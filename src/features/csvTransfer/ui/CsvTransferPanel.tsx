import { useEffect, useMemo, useRef, useState } from 'react'
import { csvTransferApi } from '../api/csvTransferApi'
import type { CsvRecord, CsvRecordValue } from '../api/csvTransferApi'
import { csvFolders, csvResources } from '../model/resources'
import type { CsvFolder, CsvResource } from '../model/resources'
import { resourceFormSchemas } from '../model/formSchemas'
import type { FormFieldSchema } from '../model/formSchemas'
import { getFieldLabel } from '../model/fieldLabels'
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

function formatCellValue(value: CsvRecordValue) {
  if (value === null || value === undefined || value === '') return '-'
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'boolean') return value ? 'Да' : 'Нет'
  return String(value)
}

function collectColumns(records: CsvRecord[]) {
  const columns = new Set<string>()
  records.forEach(record => {
    Object.keys(record).forEach(key => columns.add(key))
  })
  return Array.from(columns)
}

function normalizeValue(field: FormFieldSchema, value: string | string[]) {
  if (Array.isArray(value)) return value
  if (value === '') return undefined
  if (value.startsWith('DATE_')) return value.replace('DATE_', '').replaceAll('_', '-')
  if (field.type === 'integer' || field.type === 'number') return Number(value)
  if (field.type === 'boolean') return value === 'true'
  return value
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
  const [formValues, setFormValues] = useState<Record<string, string | string[]>>({})
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [records, setRecords] = useState<CsvRecord[]>([])
  const [totalRecords, setTotalRecords] = useState(0)

  const columns = useMemo(() => collectColumns(records), [records])
  const formSchema = selectedResource ? resourceFormSchemas[selectedResource.value] : undefined
  const isBusy = isExporting || isImporting || isLoadingRecords || isSavingRecord
  const folderResources = selectedFolder
    ? csvResources.filter(resource => resource.folder === selectedFolder.id)
    : []

  async function loadRecords(resource: CsvResource) {
    try {
      setIsLoadingRecords(true)
      const page = await csvTransferApi.getRecords(resource.value)
      setRecords(page.content)
      setTotalRecords(page.totalElements)
    } catch {
      setRecords([])
      setTotalRecords(0)
      showToast('Не удалось загрузить таблицу', 'error')
    } finally {
      setIsLoadingRecords(false)
    }
  }

  useEffect(() => {
    if (selectedResource) {
      loadRecords(selectedResource)
    }
  }, [selectedResource])

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
        await loadRecords(selectedResource)
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

    const errors = validateResourceForm(formSchema.fields, formValues)
    setFormErrors(errors)
    if (Object.keys(errors).length > 0) return

    const payload: CsvRecord = {}
    formSchema.fields.forEach(field => {
      const value = normalizeValue(field, formValues[field.name] ?? (field.isArray ? [] : ''))
      if (value !== undefined && (!Array.isArray(value) || value.length > 0)) {
        payload[field.name] = value
      }
    })

    try {
      setIsSavingRecord(true)
      await csvTransferApi.createRecord(selectedResource.value, payload)
      setFormValues({})
      setFormErrors({})
      setIsFormOpen(false)
      showToast('Запись добавлена')
      await loadRecords(selectedResource)
    } catch {
      showToast('Не удалось добавить запись', 'error')
    } finally {
      setIsSavingRecord(false)
    }
  }

  function renderFormField(field: FormFieldSchema) {
    const value = formValues[field.name] ?? (field.isArray ? [] : '')

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
        <div className={styles.tableMeta}>{totalRecords} записей</div>
        <div className={styles.actions}>
          <button className={styles.button} disabled={isBusy} onClick={() => loadRecords(selectedResource)}>
            {isLoadingRecords ? 'Загрузка...' : 'Обновить'}
          </button>
          {formSchema && (
            <button className={styles.buttonGreen} disabled={isBusy} onClick={() => setIsFormOpen(true)}>
              Заполнить форму
            </button>
          )}
          {formSchema && (
            <button className={styles.button} disabled={isBusy} onClick={handleCopyFormLink}>
              Ссылка формы
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
            {isImporting ? 'Импорт...' : 'Импорт CSV'}
          </button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        className={styles.fileInput}
        type="file"
        accept=".csv,text/csv"
        onChange={e => {
          const file = e.target.files?.[0]
          if (file) {
            handleImport(file)
          }
        }}
      />

      {isFormOpen && formSchema && (
        <div className={styles.formOverlay} onClick={() => {
          setIsFormOpen(false)
          setFormErrors({})
        }}>
          <form className={styles.recordForm} onSubmit={handleCreateRecord} onClick={e => e.stopPropagation()}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Новая запись</h2>
              <button className={styles.closeButton} type="button" onClick={() => {
                setIsFormOpen(false)
                setFormErrors({})
              }}>✕</button>
            </div>

            <div className={styles.formGrid}>
              {formSchema.fields.map(field => (
                <label key={field.name} className={`${styles.formField} ${formErrors[field.name] ? styles.formFieldError : ''}`}>
                  <span>
                    {getFieldLabel(field)}
                    {isRequiredField(field) && <span className={styles.required}> *</span>}
                  </span>
                  {renderFormField(field)}
                  {formErrors[field.name] && <span className={styles.errorText}>{formErrors[field.name]}</span>}
                </label>
              ))}
            </div>

            <div className={styles.formActions}>
              <button className={styles.button} type="button" onClick={() => {
                setIsFormOpen(false)
                setFormErrors({})
              }}>
                Отмена
              </button>
              <button className={styles.buttonGreen} type="submit" disabled={isSavingRecord}>
                {isSavingRecord ? 'Сохранение...' : 'Сохранить'}
              </button>
            </div>
          </form>
        </div>
      )}

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
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={String(record.id ?? index)}>
                  {columns.map(column => (
                    <td key={column}>{formatCellValue(record[column])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default CsvTransferPanel
