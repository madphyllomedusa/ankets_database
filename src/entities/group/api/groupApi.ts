import api from '../../../shared/api/instance'
import type { Group } from '../model/types'

export const groupApi = {
  getAll: () => api.get<Group[]>('/groups').then(res => res.data),
}
