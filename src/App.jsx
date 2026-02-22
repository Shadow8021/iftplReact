import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Galerie from "./pages/Galerie/Galerie"
import Actualite from "./pages/Actualite/Actualite"
import Error404 from './utils/Error404';
import MainLayout from './pages/layouts/MainLayout';
import AdminLayout from './admin/layout/AdminLayout'
import Formation from './pages/Formation/Formation';
import FormationDetail from './pages/FormationDetail/FormationDetail';
import Loading from './utils/Loading';
import ScrollToTop from './utils/ScrollToTop';
import Dasboard from './admin/Dasboard';
import Login from './admin/Login'

function AppContent() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <ScrollToTop />
      {isLoading && <Loading />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/formation-detail/:id" element={<FormationDetail />} />
        </Route>
        <Route element={<Dasboard />} >
          <Route path="/admin" element={<Dasboard />} />
          <Route path="/admin/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}