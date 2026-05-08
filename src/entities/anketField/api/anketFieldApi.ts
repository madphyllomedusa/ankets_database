import api from '@shared/api/instance'
import type { AnketField, FieldType } from '../model/types'

export const anketFieldApi = {
  getByAnket: (anketId: string) =>
    api
      .get<AnketField[]>('/anketFields', { params: { anketId } })
      .then(res => res.data),

  create: (anketId: string, order: number, type: FieldType, label: string, options: string[] | null) =>
    api
      .post<AnketField>('/anketFields', { anketId, order, type, label, options })
      .then(res => res.data),
}
