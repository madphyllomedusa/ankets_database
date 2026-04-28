import api from '@shared/api/instance'
import type { AnketField } from '../model/types'

export const anketFieldApi = {
  getByAnket: (anketId: string) =>
    api
      .get<AnketField[]>('/anketFields', { params: { anketId: Number(anketId) } })
      .then(res => res.data.sort((a, b) => a.order - b.order)),
}
