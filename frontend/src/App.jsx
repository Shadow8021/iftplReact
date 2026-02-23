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
import ActualiteDetail from './pages/ActualiteDetail/ActualiteDetail';
import Loading from './utils/Loading';
import ScrollToTop from './utils/ScrollToTop';
import Dasboard from './admin/Dasboard';
import Login from './admin/Login';
import GalerieAdmin from './admin/pages/GalerieAdmin';
import ActualitesAdmin from './admin/pages/ActualitesAdmin';
import FormationsAdmin from './admin/pages/FormationsAdmin';

function AppContent() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const isAdminRoute = location.pathname.startsWith('/admin')

  useEffect(() => {
    if (isAdminRoute) return
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [location, isAdminRoute])

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && isLoading && <Loading />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/actualite/:id" element={<ActualiteDetail />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/formation-detail/:id" element={<FormationDetail />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dasboard />} />
          <Route path="login" element={<Login />} />
          <Route path="galerie" element={<GalerieAdmin />} />
          <Route path="actualites" element={<ActualitesAdmin />} />
          <Route path="formations" element={<FormationsAdmin />} />
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