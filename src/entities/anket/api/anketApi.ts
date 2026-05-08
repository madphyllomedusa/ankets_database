import api from '@shared/api/instance'
import type { Anket } from '../model/types'

export const anketApi = {
  getByFolder: (folderId: string) =>
    api.get<Anket[]>('/ankets', { params: { folderId: Number(folderId) } }).then(res => res.data),

  getById: (id: string) =>
    api.get<Anket>(`/ankets/${id}`).then(res => res.data),

  create: (name: string, folderId: string) =>
    api.post<Anket>('/ankets', { name, folderId: Number(folderId) }).then(res => res.data),

  delete: (id: string) =>
    api.delete(`/ankets/${id}`).then(res => res.data),
}
