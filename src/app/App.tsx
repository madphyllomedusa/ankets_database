import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { Header } from '../widgets/header'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
