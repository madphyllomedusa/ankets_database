import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HomePage } from '@pages/home'
import { LoginPage } from '@pages/login'
import { AnketPage } from '@pages/anketPage'
import { FillAnketPage } from '@pages/fillAnketPage'
import { CreateAnketPage } from '@pages/createAnketPage'
import { EditAnketPage } from '@pages/editAnketPage'
import { Header } from '@widgets/header'
import ProtectedRoute from '@app/ProtectedRoute'
import { setUser } from '@features/auth/authSlice'
import type { User } from '@entities/auth/model/types'
import { ToastProvider } from '@shared/model/toastContext'
import { Toast } from '@shared/ui/Toast'
import './App.scss'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const raw = localStorage.getItem('user')
    if (raw) {
      try {
        dispatch(setUser(JSON.parse(raw) as User))
      } catch {
        localStorage.removeItem('user')
      }
    }
  }, [dispatch])

  return (
    <ToastProvider>
      <Toast />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<><Header /><Outlet /></>}>
              <Route path="/" element={<HomePage />} />
              <Route path="/anket/:id" element={<AnketPage />} />
              <Route path="/create-anket/:folderId" element={<CreateAnketPage />} />
              <Route path="/edit-anket/:id" element={<EditAnketPage />} />
            </Route>
            <Route path="/fill-anket/:id" element={<FillAnketPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
