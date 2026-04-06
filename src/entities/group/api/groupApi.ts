import api from '@shared/api/instance'
import type { Group } from '../model/types'

export const groupApi = {
  getAll: () => api.get<Group[]>('/groups').then(res => res.data),
  create: (name: string) => api.post<Group>('/groups', { name }).then(res => res.data),
}
