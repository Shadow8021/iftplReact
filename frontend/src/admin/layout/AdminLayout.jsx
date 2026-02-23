import { Outlet, useLocation } from 'react-router-dom'
import AdminSidebar from '../Components/AdminSidebar'

export default function AdminLayout() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/admin/login'

  if (isLoginPage) {
    return (
      <div className="min-h-screen">
        <Outlet />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f0f4f8] to-[#e2e8f0]">
      <AdminSidebar />
      <main className="pl-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
