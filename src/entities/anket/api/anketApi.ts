import api from '@shared/api/instance'
import type { Anket } from '../model/types'

export const anketApi = {
  getByFolder: (folderId: string) =>
    api.get<Anket[]>('/ankets', { params: { folderId: Number(folderId) } }).then(res => res.data),
}
