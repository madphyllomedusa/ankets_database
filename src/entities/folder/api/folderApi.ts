import api from '@shared/api/instance'
import type { Folder } from '../model/types'

export const folderApi = {
  getById: (id: string) =>
    api.get<Folder>(`/folders/${id}`).then(res => res.data),

  getByGroup: (groupId: string) =>
    api.get<Folder[]>('/folders', { params: { groupId } }).then(res => res.data),

  create: (name: string, groupId: string) =>
    api.post<Folder>('/folders', { name, groupId: Number(groupId) }).then(res => res.data),

  rename: (id: string, name: string) =>
    api.patch<Folder>(`/folders/${id}`, { name }).then(res => res.data),

  delete: (id: string) =>
    api.delete(`/folders/${id}`),
}
