import api from '@shared/api/instance'

export interface CsvImportResult {
  success: boolean
  importedRows: number
  errors: string[]
}

export type CsvRecordValue = string | number | boolean | null | undefined | string[]
export type CsvRecord = Record<string, CsvRecordValue>

export interface PageResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  number: number
  size: number
}

export const csvTransferApi = {
  getRecords: (resource: string) =>
    api
      .get<PageResponse<CsvRecord>>(`/${resource}`, { params: { size: 100, sort: 'id' } })
      .then(res => res.data),

  exportCsv: (resource: string) =>
    api
      .get<Blob>(`/${resource}/export`, { responseType: 'blob' })
      .then(res => res.data),

  importCsv: (resource: string, file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    return api
      .post<CsvImportResult>(`/${resource}/import`, formData)
      .then(res => res.data)
  },
}
