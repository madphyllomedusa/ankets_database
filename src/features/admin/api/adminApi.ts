import api from '@shared/api/instance'

export type UserRole = 'ADMIN' | 'CURATOR' | 'ASSISTANT'

export interface ManagedUser {
  id: number
  username: string
  role: UserRole
  enabled: boolean
  createdAt: string
}

export interface AuditEntry {
  id: number
  username: string
  userRole: string
  action: string
  resource: string
  entityId: number | null
  beforeData: string | null
  afterData: string | null
  createdAt: string
}

export interface AuditPage {
  content: AuditEntry[]
  totalElements: number
  totalPages: number
  number: number
}

export const adminApi = {
  getUsers: () =>
    api.get<ManagedUser[]>('/admin/users').then(response => response.data),

  createUser: (payload: { username: string; password: string; role: UserRole }) =>
    api.post<ManagedUser>('/admin/users', payload).then(response => response.data),

  updateUser: (id: number, payload: { enabled?: boolean; role?: UserRole; password?: string }) =>
    api.patch<ManagedUser>(`/admin/users/${id}`, payload).then(response => response.data),

  getAudit: (page = 0, size = 50) =>
    api
      .get<AuditPage>('/admin/audit', { params: { page, size, sort: 'id,desc' } })
      .then(response => response.data),
}
