import React, { useCallback, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Image,
  LogOut,
  ChevronRight,
  Building2,
} from 'lucide-react'

const NAV_ITEMS = [
  { name: 'Tableau de bord', path: '/admin', icon: LayoutDashboard },
  { name: 'Galerie', path: '/admin/galerie', icon: Image },
  { name: 'Actualités', path: '/admin/actualites', icon: FileText },
  { name: 'Formations', path: '/admin/formations', icon: BookOpen },
]

export default function AdminSidebar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const user = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('user') || 'null')
    } catch {
      return null
    }
  }, [])

  const isActiveRoute = useCallback(
    (path) =>
      path === '/admin'
        ? pathname === '/admin'
        : pathname.startsWith(path),
    [pathname]
  )

  const handleNavigation = useCallback(
    (path) => navigate(path),
    [navigate]
  )

  const handleLogout = useCallback(() => {
    localStorage.removeItem('user')
    navigate('/admin/login', { replace: true })
  }, [navigate])

  const baseItemClass =
    'group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all duration-200'

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-[#002E6D]/80 bg-[#002E6D] shadow-xl">
      
      {/* Brand */}
      <div className="flex h-16 items-center gap-3 border-b border-[#0553c1]/50 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D00D2D]">
          <Building2 className="h-5 w-5 text-white" />
        </div>
        <span className="font-semibold tracking-tight text-white">
          IFTPL Admin
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {NAV_ITEMS.map(({ name, path, icon: Icon }) => {
          const isActive = isActiveRoute(path)

          return (
            <button
              key={path}
              type="button"
              onClick={() => handleNavigation(path)}
              aria-current={isActive ? 'page' : undefined}
              className={`${baseItemClass} ${
                isActive
                  ? 'bg-[#D00D2D] text-white shadow-md'
                  : 'text-blue-100 hover:bg-[#0553c1] hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5 shrink-0 opacity-90" />
              <span className="flex-1">{name}</span>

              <ChevronRight
                className={`h-4 w-4 shrink-0 opacity-60 transition-transform duration-200 ${
                  isActive
                    ? 'translate-x-1'
                    : 'group-hover:translate-x-1'
                }`}
              />
            </button>
          )
        })}
      </nav>

      {/* User & Logout */}
      <div className="border-t border-[#0553c1]/50 p-3">
        {user?.email && (
          <p
            className="mb-2 truncate px-3 py-1.5 text-xs text-blue-200"
            title={user.email}
          >
            {user.email}
          </p>
        )}

        <button
          type="button"
          onClick={handleLogout}
          className={`${baseItemClass} text-blue-100 hover:bg-[#D00D2D] hover:text-white`}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          Déconnexion
        </button>
      </div>
    </aside>
  )
}