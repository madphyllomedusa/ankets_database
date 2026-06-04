import axios from 'axios'
import type { User } from '@entities/auth/model/types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api',
})

api.interceptors.request.use((config) => {
  const rawUser = localStorage.getItem('user')
  if (!rawUser) return config

  try {
    const user = JSON.parse(rawUser) as User
    if (user.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`
    }
  } catch {
    localStorage.removeItem('user')
  }

  return config
})

export default api
