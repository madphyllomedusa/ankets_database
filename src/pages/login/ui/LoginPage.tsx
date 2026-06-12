import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authApi } from '@entities/auth'
import { Input, Button } from '@shared/ui'
import { useDispatch } from 'react-redux'
import { setUser } from '@features/auth/authSlice'
import styles from './LoginPage.module.scss'

function LoginPage() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const user = await authApi.login(login, password)
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(setUser(user))
      navigate('/')
    } else {
      setError('Неверный логин или пароль')
    }
  }

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Вход</h1>
        <Input
          label="Логин"
          value={login}
          onChange={setLogin}
          placeholder="Введите логин"
          autoComplete="username"
        />
        <Input
          label="Пароль"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Введите пароль"
          autoComplete="current-password"
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button label="Войти" variant="green" />
      </form>
    </div>
  )
}

export default LoginPage
