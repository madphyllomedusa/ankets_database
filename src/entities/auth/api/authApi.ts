import authInstance from '@shared/api/authInstance'
import type { AuthResponse, User } from '@entities/auth/model/types'

export const authApi = {
  login: (login: string, password: string) =>
    authInstance
      .post<AuthResponse>('/auth/login', { username: login, password })
      .then<User>(res => ({
        login: res.data.username,
        name: res.data.username,
        lastname: '',
        role: res.data.role,
        tokenType: res.data.tokenType,
        accessToken: res.data.accessToken,
        expiresAt: res.data.expiresAt,
      }))
      .catch(() => null),
}
