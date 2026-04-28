import api from '@shared/api/instance'
import type { Folder } from '../model/types'

export const folderApi = {
  getById: (id: number) =>
    api.get<Folder>(`/folders/${id}`).then(res => res.data),

  getByGroup: (groupId: number) =>
    api.get<Folder[]>('/folders', { params: { groupId } }).then(res => res.data),

  create: (name: string, groupId: number) =>
    api.post<Folder>('/folders', { name, groupId }).then(res => res.data),

  rename: (id: number, name: string) =>
    api.patch<Folder>(`/folders/${id}`, { name }).then(res => res.data),

  delete: (id: number) =>
    api.delete(`/folders/${id}`),
}
