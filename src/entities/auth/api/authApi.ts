import authInstance from '@shared/api/authInstance'
import type { User } from '@entities/auth/model/types'

export const authApi = {
  login: (login: string, password: string) =>
    authInstance
      .get<User[]>('/users')
      .then(res => res.data.find(u => u.login === login && u.password === password) ?? null),
}
