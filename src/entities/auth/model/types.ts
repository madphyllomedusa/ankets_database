export interface User {
  id?: number
  login: string
  password?: string
  name: string
  lastname: string
  role?: string
  tokenType?: string
  accessToken?: string
  expiresAt?: string
}

export interface AuthResponse {
  tokenType: string
  accessToken: string
  expiresAt: string
  username: string
  role: string
}
