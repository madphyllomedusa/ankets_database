import { useEffect, useMemo, useRef, useState } from 'react'
import { csvTransferApi } from '../api/csvTransferApi'
import type { CsvRecord, CsvRecordValue, DictionaryOption } from '../api/csvTransferApi'
import { csvFolders, csvResources } from '../model/resources'
import type { CsvFolder, CsvResource } from '../model/resources'
import type { FormFieldSchema } from '../model/formSchemas'
import { getLongTextRows, isLongTextField } from '../model/fieldControls'
import { getFieldLabel } from '../model/fieldLabels'
import {
  collectDisplayColumns,
  formatDisplayValue,
  getResourceFields,
  getResourceFormSchema,
} from '../model/resourcePresentation'
import { isRequiredField, validateResourceForm } from '../model/formValidation'
import { useToast } from '@shared/model/toastContext'
import folderIcon from '@assets/folder.png'
import styles from './CsvTransferPanel.module.scss'

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

function getImageSource(value: CsvRecordValue) {
  if (typeof value !== 'string') return null
  if (value.startsWith('data:image/') || value.startsWith('https://') || value.startsWith('http://')) {
    return value
  }
  return value.match(/\((https?:\/\/[^)]+)\)\s*$/)?.[1] ?? null
}

function normalizeValue(field: FormFieldSchema, value: string | string[]) {
  if (Array.isArray(value)) return value
  if (value === '') return undefined
  if (value.startsWith('DATE_')) return value.replace('DATE_', '').replaceAll('_', '-')
  if (field.type === 'integer' || field.type === 'number') return Number(value)
  if (field.type === 'boolean') return value === 'true'
  return value
}

function getFormValue(field: FormFieldSchema, value: CsvRecordValue) {
  if (Array.isArray(value)) return value
  if (value === null || value === undefined) return ''
  if (field.name === 'photo' && typeof value === 'string' && value.startsWith('data:image/')) return ''
  if (field.format === 'date-time' && typeof value === 'string') return value.slice(0, 16)
  if (field.format === 'date' && typeof value === 'string') return value.slice(0, 10)
  return String(value)
}

function getInitials(value: CsvRecordValue) {
  if (typeof value !== 'string') return '—'
  const parts = value.trim().split(/\s+/).filter(Boolean)
  return parts.slice(0, 2).map(part => part[0]?.toUpperCase()).join('') || '—'
}

function CsvTransferPanel() {
  const { showToast } = useToast()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedFolder, setSelectedFolder] = useState<CsvFolder | null>(null)
  const [selectedResource, setSelectedResource] = useState<CsvResource | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const [isSavingRecord, setIsSavingRecord] = useState(false)
  const [isLoadingRecords, setIsLoadingRecords] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false)
  const [editingRecord, setEditingRecord] = useState<CsvRecord | null>(null)
  const [formValues, setFormValues] = useState<Record<string, string | string[]>>({})
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [records, setRecords] = useState<CsvRecord[]>([])
  const [totalRecords, setTotalRecords] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState(50)
  const [dictionaryOptions, setDictionaryOptions] = useState<DictionaryOption[]>([])
  const [dictionaryField, setDictionaryField] = useState('')
  const [dictionaryValue, setDictionaryValue] = useState('')
  const [dictionaryLabel, setDictionaryLabel] = useState('')
  const [editingDictionaryId, setEditingDictionaryId] = useState<number | null>(null)
  const [editingDictionaryLabel, setEditingDictionaryLabel] = useState('')
  const [resumeView, setResumeView] = useState<'cards' | 'table'>('cards')
  const [selectedResume, setSelectedResume] = useState<CsvRecord | null>(null)

  const formSchema = useMemo(
    () => getResourceFormSchema(selectedResource?.value, dictionaryOptions),
    [dictionaryOptions, selectedResource?.value],
  )
  const fields = useMemo(
    () => getResourceFields(selectedResource?.value, formSchema),
    [formSchema, selectedResource?.value],
  )
  const fieldsByName = useMemo(
    () => new Map(fields.map(field => [field.name, field])),
    [fields],
  )
  const columns = useMemo(() => collectDisplayColumns(records, fields), [records, fields])
  const isBusy = isExporting || isImporting || isLoadingRecords || isSavingRecord
  const isResumeResource = selectedResource?.value === 'resume-profiles'
  const folderResources = selectedFolder
    ? csvResources.filter(resource => resource.folder === selectedFolder.id)
    : []

  const visiblePages = useMemo(() => {
    if (totalPages <= 1) return [0]
    const firstPage = Math.max(0, Math.min(currentPage - 2, totalPages - 5))
    const lastPage = Math.min(totalPages, firstPage + 5)
    return Array.from({ length: lastPage - firstPage }, (_, index) => firstPage + index)
  }, [currentPage, totalPages])
  const dictionaryFields = useMemo(
    () => fields.filter(field => field.type === 'string' || field.type === 'array'),
    [fields],
  )
  const selectedDictionaryOptions = useMemo(
    () => dictionaryOptions.filter(option => option.fieldName === dictionaryField),
    [dictionaryField, dictionaryOptions],
  )

  async function loadDictionaryOptions(resource: string) {
    const options = await csvTransferApi.getDictionaryOptions(resource)
    setDictionaryOptions(options)
  }

  async function loadRecords(resource: CsvResource, page = currentPage, size = pageSize) {
    try {
      setIsLoadingRecords(true)
      const response = await csvTransferApi.getRecords(resource.value, page, size)
      setRecords(response.content)
      setTotalRecords(response.totalElements)
      setTotalPages(response.totalPages)
      setCurrentPage(response.number)
    } catch {
      setRecords([])
      setTotalRecords(0)
      setTotalPages(0)
      showToast('Не удалось загрузить таблицу', 'error')
    } finally {
      setIsLoadingRecords(false)
    }
  }

  useEffect(() => {
    if (selectedResource) {
      loadRecords(selectedResource, currentPage, pageSize)
    }
  }, [selectedResource, currentPage, pageSize])

  useEffect(() => {
    if (!selectedResource) {
      setDictionaryOptions([])
      return
    }

    loadDictionaryOptions(selectedResource.value)
      .catch(() => {
        setDictionaryOptions([])
        showToast('Не удалось загрузить справочники формы', 'error')
      })
  }, [selectedResource])

  async function handleAddDictionaryOption(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedResource || !dictionaryField || !dictionaryValue.trim() || !dictionaryLabel.trim()) return

    try {
      await csvTransferApi.createDictionaryOption({
        resource: selectedResource.value,
        fieldName: dictionaryField,
        value: dictionaryValue.trim(),
        label: dictionaryLabel.trim(),
        sortOrder: selectedDictionaryOptions.length,
        active: true,
      })
      setDictionaryValue('')
      setDictionaryLabel('')
      await loadDictionaryOptions(selectedResource.value)
      showToast('Значение справочника добавлено')
    } catch {
      showToast('Не удалось добавить значение справочника', 'error')
    }
  }

  async function handleDeleteDictionaryOption(option: DictionaryOption) {
    if (!selectedResource) return
    try {
      await csvTransferApi.deleteDictionaryOption(option.id)
      await loadDictionaryOptions(selectedResource.value)
      showToast('Значение справочника удалено')
    } catch {
      showToast('Не удалось удалить значение справочника', 'error')
    }
  }

  function startEditingDictionaryOption(option: DictionaryOption) {
    setEditingDictionaryId(option.id)
    setEditingDictionaryLabel(option.label)
  }

  async function handleUpdateDictionaryOption(option: DictionaryOption) {
    if (!selectedResource || !editingDictionaryLabel.trim()) return
    try {
      await csvTransferApi.updateDictionaryOption(option.id, {
        label: editingDictionaryLabel.trim(),
      })
      setEditingDictionaryId(null)
      await loadDictionaryOptions(selectedResource.value)
      showToast('Значение справочника изменено')
    } catch {
      showToast('Не удалось изменить значение справочника', 'error')
    }
  }

  async function handleExport() {
    if (!selectedResource) return
    try {
      setIsExporting(true)
      const blob = await csvTransferApi.exportCsv(selectedResource.value)
      downloadBlob(blob, selectedResource.fileName)
      showToast('CSV экспортирован')
    } catch {
      showToast('Не удалось экспортировать CSV', 'error')
    } finally {
      setIsExporting(false)
    }
  }

  async function handleImport(file: File) {
    if (!selectedResource) return
    try {
      setIsImporting(true)
      const result = await csvTransferApi.importCsv(selectedResource.value, file)
      if (result.success) {
        showToast(`CSV импортирован: ${result.importedRows} строк`)
        if (currentPage === 0) {
          await loadRecords(selectedResource, 0, pageSize)
        } else {
          setCurrentPage(0)
        }
      } else {
        showToast(result.errors?.[0] ?? 'Не удалось импортировать CSV', 'error')
      }
    } catch {
      showToast('Не удалось импортировать CSV', 'error')
    } finally {
      setIsImporting(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  async function handleCopyFormLink() {
    if (!selectedResource) return
    const url = `${window.location.origin}/forms/${selectedResource.value}`
    try {
      await navigator.clipboard.writeText(url)
      showToast('Ссылка на форму скопирована')
    } catch {
      showToast(url)
    }
  }

  async function handleCreateRecord(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedResource || !formSchema) return

    const errors = validateResourceForm(fields, formValues)
    setFormErrors(errors)
    if (Object.keys(errors).length > 0) return

    const payload: CsvRecord = {}
    fields.forEach(field => {
      const value = normalizeValue(field, formValues[field.name] ?? (field.isArray ? [] : ''))
      if (editingRecord) {
        if (field.name === 'photo' && value === undefined) return
        payload[field.name] = value === undefined ? (field.isArray ? [] : null) : value
        return
      }
      if (value !== undefined && (!Array.isArray(value) || value.length > 0)) {
        payload[field.name] = value
      }
    })

    try {
      setIsSavingRecord(true)
      const recordId = editingRecord?.id
      if (editingRecord && (typeof recordId === 'string' || typeof recordId === 'number')) {
        await csvTransferApi.updateRecord(selectedResource.value, recordId, payload)
      } else {
        await csvTransferApi.createRecord(selectedResource.value, payload)
      }
      setFormValues({})
      setFormErrors({})
      setEditingRecord(null)
      setIsFormOpen(false)
      showToast(editingRecord ? 'Запись изменена' : 'Запись добавлена')
      if (editingRecord) {
        await loadRecords(selectedResource, currentPage, pageSize)
      } else if (currentPage === 0) {
        await loadRecords(selectedResource, 0, pageSize)
      } else {
        setCurrentPage(0)
      }
    } catch {
      showToast(editingRecord ? 'Не удалось изменить запись' : 'Не удалось добавить запись', 'error')
    } finally {
      setIsSavingRecord(false)
    }
  }

  function openCreateForm() {
    setEditingRecord(null)
    setFormValues({})
    setFormErrors({})
    setIsFormOpen(true)
  }

  function openEditForm(record: CsvRecord) {
    const values: Record<string, string | string[]> = {}
    fields.forEach(field => {
      values[field.name] = getFormValue(field, record[field.name])
    })
    setEditingRecord(record)
    setFormValues(values)
    setFormErrors({})
    setSelectedResume(null)
    setIsFormOpen(true)
  }

  function closeRecordForm() {
    setIsFormOpen(false)
    setEditingRecord(null)
    setFormValues({})
    setFormErrors({})
  }

  function renderFormField(field: FormFieldSchema) {
    const value = formValues[field.name] ?? (field.isArray ? [] : '')

    if (field.name === 'photo') {
      const currentPhoto = editingRecord ? getImageSource(editingRecord.photo) : null
      return (
        <div className={styles.photoEditor}>
          {currentPhoto && (
            <img src={currentPhoto} alt="" />
          )}
          <input
            className={styles.formControl}
            type="url"
            placeholder={currentPhoto ? 'Вставьте ссылку, чтобы заменить фото' : 'Ссылка на фото'}
            value={String(value)}
            onChange={e => {
              setFormValues(prev => ({ ...prev, [field.name]: e.target.value }))
              setFormErrors(prev => ({ ...prev, [field.name]: '' }))
            }}
          />
        </div>
      )
    }

    if (field.isArray && field.enumValues) {
      const selected = Array.isArray(value) ? value : []
      return (
        <div className={styles.checkboxList}>
          {field.enumValues.map(option => (
            <label key={option.value} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={e => {
                  setFormValues(prev => ({
                    ...prev,
                    [field.name]: e.target.checked
                      ? [...selected, option.value]
                      : selected.filter(item => item !== option.value),
                  }))
                  setFormErrors(prev => ({ ...prev, [field.name]: '' }))
                }}
              />
              {option.label}
            </label>
          ))}
        </div>
      )
    }

    if (field.enumValues) {
      return (
        <select
          className={styles.formControl}
          value={String(value)}
          onChange={e => {
            setFormValues(prev => ({ ...prev, [field.name]: e.target.value }))
            setFormErrors(prev => ({ ...prev, [field.name]: '' }))
          }}
        >
          <option value="">Не выбрано</option>
          {field.enumValues.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      )
    }

    if (field.type === 'boolean') {
      return (
        <select
          className={styles.formControl}
          value={String(value)}
          onChange={e => {
            setFormValues(prev => ({ ...prev, [field.name]: e.target.value }))
            setFormErrors(prev => ({ ...prev, [field.name]: '' }))
          }}
        >
          <option value="">Не выбрано</option>
          <option value="true">Да</option>
          <option value="false">Нет</option>
        </select>
      )
    }

    if (isLongTextField(field, value)) {
      return (
        <textarea
          className={`${styles.formControl} ${styles.textareaControl}`}
          rows={getLongTextRows(value)}
          value={String(value)}
          onChange={e => {
            setFormValues(prev => ({ ...prev, [field.name]: e.target.value }))
            setFormErrors(prev => ({ ...prev, [field.name]: '' }))
          }}
        />
      )
    }

    return (
      <input
        className={styles.formControl}
        type={field.format === 'date-time' ? 'datetime-local' : field.format === 'date' ? 'date' : field.type === 'integer' || field.type === 'number' ? 'number' : 'text'}
        step={field.type === 'number' ? '0.01' : undefined}
        value={String(value)}
        onChange={e => {
          setFormValues(prev => ({ ...prev, [field.name]: e.target.value }))
          setFormErrors(prev => ({ ...prev, [field.name]: '' }))
        }}
      />
    )
  }

  if (!selectedFolder) {
    return (
      <section className={styles.root}>
        <div className={styles.workspaceTitle}>
          <span className={styles.workspaceIcon}>♟</span>
          <span>ЦРТРИС</span>
          <span className={styles.workspaceArrow}>⌄</span>
        </div>

        <div className={styles.folderGrid}>
          {csvFolders.map(folder => (
            <button
              key={folder.id}
              className={styles.folderItem}
              onClick={() => setSelectedFolder(folder)}
            >
              <img src={folderIcon} alt="" width={50} height={35} />
              <span>{folder.label}</span>
            </button>
          ))}
          <button className={styles.addItem} disabled>
            <span className={styles.addIcon}>+</span>
            <span>Добавьте базу или папку</span>
          </button>
        </div>
      </section>
    )
  }

  if (!selectedResource) {
    return (
      <section className={styles.root}>
        <div className={styles.breadcrumb}>
          <button className={styles.backButton} onClick={() => setSelectedFolder(null)}>←</button>
          <h1 className={styles.pageTitle}>{selectedFolder.label}</h1>
        </div>
        <div className={styles.folderGrid}>
          {folderResources.map(resource => (
            <button
              key={resource.value}
              className={styles.tableItem}
              onClick={() => setSelectedResource(resource)}
            >
              <span className={styles.tableIcon}>▦</span>
              <span>{resource.label}</span>
            </button>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className={styles.root}>
      <div className={styles.breadcrumb}>
        <button
          className={styles.backButton}
          onClick={() => {
            setSelectedResource(null)
            setRecords([])
            setTotalRecords(0)
            setTotalPages(0)
            setCurrentPage(0)
          }}
        >
          ←
        </button>
        <div>
          <div className={styles.parentLabel}>{selectedFolder.label}</div>
          <h1 className={styles.pageTitle}>{selectedResource.label}</h1>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.viewBar}>
          <div className={styles.tableMeta}>{totalRecords} записей</div>
          {isResumeResource && (
            <div className={styles.viewTabs} role="tablist" aria-label="Вид резюме">
              <button
                className={resumeView === 'cards' ? styles.viewTabActive : styles.viewTab}
                type="button"
                role="tab"
                aria-selected={resumeView === 'cards'}
                onClick={() => setResumeView('cards')}
              >
                Карточки
              </button>
              <button
                className={resumeView === 'table' ? styles.viewTabActive : styles.viewTab}
                type="button"
                role="tab"
                aria-selected={resumeView === 'table'}
                onClick={() => setResumeView('table')}
              >
                Таблица
              </button>
            </div>
          )}
        </div>
        <div className={styles.actions}>
          <button
            className={styles.button}
            disabled={isBusy}
            onClick={() => loadRecords(selectedResource, currentPage, pageSize)}
          >
            {isLoadingRecords ? 'Загрузка...' : 'Обновить'}
          </button>
          {formSchema && (
            <button className={styles.buttonGreen} disabled={isBusy} onClick={openCreateForm}>
              Добавить запись
            </button>
          )}
          {formSchema && (
            <button className={styles.button} disabled={isBusy} onClick={handleCopyFormLink}>
              Ссылка формы
            </button>
          )}
          {formSchema && (
            <button
              className={styles.button}
              disabled={isBusy}
              onClick={() => {
                setDictionaryField(dictionaryFields[0]?.name ?? '')
                setIsDictionaryOpen(true)
              }}
            >
              Справочники
            </button>
          )}
          <button className={styles.button} disabled={isBusy} onClick={handleExport}>
            {isExporting ? 'Экспорт...' : 'Экспорт CSV'}
          </button>
          <button
            className={styles.buttonGreen}
            disabled={isBusy}
            onClick={() => fileInputRef.current?.click()}
          >
            {isImporting ? 'Импорт...' : 'Импорт CSV / Excel'}
          </button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        className={styles.fileInput}
        type="file"
        accept=".csv,.xlsx,.xls,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
        onChange={e => {
          const file = e.target.files?.[0]
          if (file) {
            handleImport(file)
          }
        }}
      />

      {isFormOpen && formSchema && (
        <div className={styles.formOverlay} onClick={closeRecordForm}>
          <form className={styles.recordForm} onSubmit={handleCreateRecord} onClick={e => e.stopPropagation()}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>
                {editingRecord ? 'Редактирование записи' : 'Новая запись'}
              </h2>
              <button className={styles.closeButton} type="button" onClick={closeRecordForm}>✕</button>
            </div>

            <div className={styles.formGrid}>
              {fields.map(field => (
                <label
                  key={field.name}
                  className={[
                    styles.formField,
                    isLongTextField(field, formValues[field.name]) ? styles.longTextField : '',
                    formErrors[field.name] ? styles.formFieldError : '',
                  ].filter(Boolean).join(' ')}
                >
                  <span>
                    {getFieldLabel(field, selectedResource.value)}
                    {isRequiredField(field) && <span className={styles.required}> *</span>}
                  </span>
                  {renderFormField(field)}
                  {formErrors[field.name] && <span className={styles.errorText}>{formErrors[field.name]}</span>}
                </label>
              ))}
            </div>

            <div className={styles.formActions}>
              <button className={styles.button} type="button" onClick={closeRecordForm}>
                Отмена
              </button>
              <button className={styles.buttonGreen} type="submit" disabled={isSavingRecord}>
                {isSavingRecord
                  ? 'Сохранение...'
                  : editingRecord ? 'Сохранить изменения' : 'Добавить'}
              </button>
            </div>
          </form>
        </div>
      )}

      {isDictionaryOpen && selectedResource && (
        <div className={styles.formOverlay} onClick={() => setIsDictionaryOpen(false)}>
          <section className={styles.dictionaryPanel} onClick={e => e.stopPropagation()}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Справочники формы</h2>
              <button
                className={styles.closeButton}
                type="button"
                onClick={() => setIsDictionaryOpen(false)}
              >
                ✕
              </button>
            </div>

            <label className={styles.formField}>
              <span>Поле</span>
              <select
                className={styles.formControl}
                value={dictionaryField}
                onChange={e => setDictionaryField(e.target.value)}
              >
                {dictionaryFields.map(field => (
                  <option key={field.name} value={field.name}>
                    {getFieldLabel(field, selectedResource.value)}
                  </option>
                ))}
              </select>
            </label>

            <div className={styles.dictionaryList}>
              {selectedDictionaryOptions.length === 0 ? (
                <div className={styles.empty}>У поля пока нет вариантов</div>
              ) : selectedDictionaryOptions.map(option => (
                <div key={option.id} className={styles.dictionaryRow}>
                  {editingDictionaryId === option.id ? (
                    <>
                      <div className={styles.dictionaryEditFields}>
                        <span className={styles.dictionaryCode}>{option.value}</span>
                        <input
                          className={styles.formControl}
                          aria-label="Отображаемое название"
                          value={editingDictionaryLabel}
                          onChange={e => setEditingDictionaryLabel(e.target.value)}
                        />
                      </div>
                      <div className={styles.dictionaryRowActions}>
                        <button
                          className={styles.smallPrimaryButton}
                          type="button"
                          onClick={() => handleUpdateDictionaryOption(option)}
                        >
                          Сохранить
                        </button>
                        <button
                          className={styles.smallButton}
                          type="button"
                          onClick={() => setEditingDictionaryId(null)}
                        >
                          Отмена
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <strong>{option.label}</strong>
                        <span>{option.value}</span>
                      </div>
                      <div className={styles.dictionaryRowActions}>
                        <button
                          className={styles.smallButton}
                          type="button"
                          onClick={() => startEditingDictionaryOption(option)}
                        >
                          Изменить
                        </button>
                        <button
                          className={styles.deleteOption}
                          type="button"
                          aria-label={`Удалить ${option.label}`}
                          onClick={() => handleDeleteDictionaryOption(option)}
                        >
                          ✕
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <form className={styles.dictionaryAdd} onSubmit={handleAddDictionaryOption}>
              <label className={styles.formField}>
                <span>Код значения</span>
                <input
                  className={styles.formControl}
                  value={dictionaryValue}
                  onChange={e => setDictionaryValue(e.target.value)}
                />
              </label>
              <label className={styles.formField}>
                <span>Отображаемое название</span>
                <input
                  className={styles.formControl}
                  value={dictionaryLabel}
                  onChange={e => setDictionaryLabel(e.target.value)}
                />
              </label>
              <button className={styles.buttonGreen} type="submit">
                Добавить
              </button>
            </form>
          </section>
        </div>
      )}

      {selectedResume && isResumeResource && (
        <div className={styles.formOverlay} onClick={() => setSelectedResume(null)}>
          <article className={styles.resumeDetails} onClick={e => e.stopPropagation()}>
            <div className={styles.formHeader}>
              <div>
                <div className={styles.parentLabel}>Резюме</div>
                <h2 className={styles.formTitle}>
                  {formatDisplayValue(selectedResume.fullName, fieldsByName.get('fullName'))}
                </h2>
              </div>
              <div className={styles.resumeDetailsActions}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => openEditForm(selectedResume)}
                >
                  Изменить
                </button>
                <button
                  className={styles.closeButton}
                  type="button"
                  aria-label="Закрыть"
                  onClick={() => setSelectedResume(null)}
                >
                  ✕
                </button>
              </div>
            </div>

            <div className={styles.resumeDetailsBody}>
              <div className={styles.resumeDetailsPhoto}>
                {getImageSource(selectedResume.photo) ? (
                  <img
                    src={getImageSource(selectedResume.photo) ?? undefined}
                    alt={String(selectedResume.fullName ?? '')}
                  />
                ) : (
                  <span>{getInitials(selectedResume.fullName)}</span>
                )}
              </div>

              <dl className={styles.resumeDetailsGrid}>
                {fields
                  .filter(field => field.name !== 'photo' && field.name !== 'fullName')
                  .filter(field => {
                    const value = selectedResume[field.name]
                    return value !== null
                      && value !== undefined
                      && value !== ''
                      && (!Array.isArray(value) || value.length > 0)
                  })
                  .map(field => (
                    <div key={field.name} className={styles.resumeDetail}>
                      <dt>{getFieldLabel(field, selectedResource.value)}</dt>
                      <dd>{formatDisplayValue(selectedResume[field.name], field)}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          </article>
        </div>
      )}

      {isResumeResource && resumeView === 'cards' ? (
        <div className={styles.resumeGrid}>
          {records.length === 0 ? (
            <div className={styles.empty}>
              {isLoadingRecords ? 'Загрузка резюме...' : 'Нет записей'}
            </div>
          ) : records.map((record, index) => {
            const photo = getImageSource(record.photo)
            return (
              <button
                key={String(record.id ?? index)}
                className={styles.resumeCard}
                type="button"
                onClick={() => setSelectedResume(record)}
              >
                <div className={styles.resumePhoto}>
                  {photo ? (
                    <img src={photo} alt={String(record.fullName ?? '')} loading="lazy" />
                  ) : (
                    <span>{getInitials(record.fullName)}</span>
                  )}
                </div>
                <div className={styles.resumeCardBody}>
                  <h3 title={String(record.fullName ?? '')}>
                    {formatDisplayValue(record.fullName, fieldsByName.get('fullName'))}
                  </h3>
                  <div className={styles.resumeAttribute}>
                    <span>Статус</span>
                    <strong className={styles.statusBadge}>
                      {formatDisplayValue(record.status, fieldsByName.get('status'))}
                    </strong>
                  </div>
                  <div className={styles.resumeAttribute}>
                    <span>Должность</span>
                    <strong className={styles.positionBadge}>
                      {formatDisplayValue(record.position, fieldsByName.get('position'))}
                    </strong>
                  </div>
                  <div className={styles.resumeMetric}>
                    <span>Стаж, дн</span>
                    <strong>{formatDisplayValue(record.experienceDays, fieldsByName.get('experienceDays'))}</strong>
                  </div>
                  <div className={styles.resumeMetric}>
                    <span>Рейтинг</span>
                    <strong>{formatDisplayValue(record.rating, fieldsByName.get('rating'))}</strong>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      ) : (
      <div className={styles.tableScroll}>
        {records.length === 0 ? (
          <div className={styles.empty}>
            {isLoadingRecords ? 'Загрузка таблицы...' : 'Нет записей'}
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                {columns.map(column => (
                  <th key={column}>
                    {getFieldLabel(
                      fieldsByName.get(column) ?? {
                        name: column,
                        label: column,
                        type: 'string',
                        isArray: false,
                      },
                      selectedResource.value,
                    )}
                  </th>
                ))}
                <th className={styles.actionsColumn}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={String(record.id ?? index)}>
                  {columns.map(column => {
                    const value = record[column]
                    const imageSource = column === 'photo' ? getImageSource(value) : null
                    return (
                      <td key={column}>
                        {imageSource ? (
                          <img className={styles.photo} src={imageSource} alt="" loading="lazy" />
                        ) : (
                          formatDisplayValue(value, fieldsByName.get(column))
                        )}
                      </td>
                    )
                  })}
                  <td className={styles.actionsCell}>
                    <button
                      className={styles.smallButton}
                      type="button"
                      onClick={() => openEditForm(record)}
                    >
                      Изменить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      )}

      {totalRecords > 0 && (
        <div className={styles.pagination}>
          <div className={styles.pageSummary}>
            {currentPage * pageSize + 1}–{Math.min((currentPage + 1) * pageSize, totalRecords)}
            {' '}из {totalRecords}
          </div>

          <div className={styles.pageControls}>
            <button
              className={styles.pageButton}
              type="button"
              aria-label="Предыдущая страница"
              disabled={isBusy || currentPage === 0}
              onClick={() => setCurrentPage(page => page - 1)}
            >
              ‹
            </button>
            {visiblePages.map(page => (
              <button
                key={page}
                className={`${styles.pageButton} ${page === currentPage ? styles.pageButtonActive : ''}`}
                type="button"
                disabled={isBusy}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </button>
            ))}
            <button
              className={styles.pageButton}
              type="button"
              aria-label="Следующая страница"
              disabled={isBusy || currentPage + 1 >= totalPages}
              onClick={() => setCurrentPage(page => page + 1)}
            >
              ›
            </button>
          </div>

          <label className={styles.pageSize}>
            <span>Строк на странице</span>
            <select
              value={pageSize}
              disabled={isBusy}
              onChange={event => {
                setCurrentPage(0)
                setPageSize(Number(event.target.value))
              }}
            >
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </label>
        </div>
      )}
    </section>
  )
}

export default CsvTransferPanel
