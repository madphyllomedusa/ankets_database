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

export interface DictionaryOption {
  id: number
  resource: string
  fieldName: string
  value: string
  label: string
  sortOrder: number
  active: boolean
}

export type DictionaryOptionInput = Omit<DictionaryOption, 'id'>

export const csvTransferApi = {
  getRecords: (resource: string, page = 0, size = 50) =>
    api
      .get<PageResponse<CsvRecord>>(`/${resource}`, {
        params: { page, size, sort: 'id,desc' },
      })
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

  createRecord: (resource: string, payload: CsvRecord) =>
    api
      .post<CsvRecord>(`/${resource}`, payload)
      .then(res => res.data),

  updateRecord: (resource: string, id: string | number, payload: CsvRecord) =>
    api
      .patch<CsvRecord>(`/${resource}/${id}`, payload)
      .then(res => res.data),

  getDictionaryOptions: (resource: string) =>
    api
      .get<DictionaryOption[]>('/dictionary-options', { params: { resource } })
      .then(res => res.data),

  createDictionaryOption: (payload: DictionaryOptionInput) =>
    api
      .post<DictionaryOption>('/dictionary-options', payload)
      .then(res => res.data),

  updateDictionaryOption: (id: number, payload: Partial<DictionaryOptionInput>) =>
    api
      .patch<DictionaryOption>(`/dictionary-options/${id}`, payload)
      .then(res => res.data),

  deleteDictionaryOption: (id: number) =>
    api.delete(`/dictionary-options/${id}`),
}
