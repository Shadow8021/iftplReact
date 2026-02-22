import React, { useCallback, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, BookOpen, FileText, Image, LogOut } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'Tableau de bord', path: '/admin', icon: LayoutDashboard },
  { name: 'Galerie', path: '/admin/galerie', icon: Image },
  { name: 'Actualités', path: '/admin/actualites', icon: FileText },
  { name: 'Formations', path: '/admin/formations', icon: BookOpen },
]

export default function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isActiveRoute = useCallback(
    (path) =>
      path === '/admin'
        ? pathname === '/admin'
        : pathname.startsWith(path),
    [pathname]
  )

  const handleNavigation = useCallback(
    (path) => {
      navigate(path)
    },
    [navigate]
  )

  const handleLogout = useCallback(() => {
    localStorage.removeItem('user')
    navigate('/admin/login', { replace: true })
  }, [navigate])

  const baseButtonClass =
    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'

  return (
    <nav className="w-full text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          
          {/* Logo / Title */}
          <button
            type="button"
            onClick={() => handleNavigation('/admin')}
            className="font-bold text-xl hover:opacity-90 transition-opacity"
          >
            Tableau de bord IFTPL
          </button>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-2">
            {NAV_ITEMS.map(({ name, path, icon: Icon }) => {
              const isActive = isActiveRoute(path)

              return (
                <button
                  key={path}
                  type="button"
                  onClick={() => handleNavigation(path)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`${baseButtonClass} ${
                    isActive
                      ? 'bg-[#D00D2D]'
                      : 'hover:bg-[#0553c1]'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {name}
                </button>
              )
            })}

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className={`${baseButtonClass} hover:bg-[#D00D2D]`}
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}