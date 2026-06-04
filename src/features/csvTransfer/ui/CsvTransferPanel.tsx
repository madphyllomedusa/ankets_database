import { useEffect, useMemo, useRef, useState } from 'react'
import { csvTransferApi } from '../api/csvTransferApi'
import type { CsvRecord, CsvRecordValue } from '../api/csvTransferApi'
import { csvFolders, csvResources } from '../model/resources'
import type { CsvFolder, CsvResource } from '../model/resources'
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

function CsvTransferPanel() {
  const { showToast } = useToast()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedFolder, setSelectedFolder] = useState<CsvFolder | null>(null)
  const [selectedResource, setSelectedResource] = useState<CsvResource | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const [isLoadingRecords, setIsLoadingRecords] = useState(false)
  const [records, setRecords] = useState<CsvRecord[]>([])
  const [totalRecords, setTotalRecords] = useState(0)

  const columns = useMemo(() => collectColumns(records), [records])
  const isBusy = isExporting || isImporting || isLoadingRecords
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
