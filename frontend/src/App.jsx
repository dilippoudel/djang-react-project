import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Notfound from './pages/NotFound'
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import PublicationPage from './pages/Publication'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import PackagePage from './pages/Package'
function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}
function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/publication" element={<PublicationPage />} />
        <Route path="/packages" element={<PackagePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
