import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, BookOpen, FileText, Image, Mail, LogOut } from 'lucide-react'

const items = [
  { name: 'Tableau de bord', path: '/admin', icon: LayoutDashboard },
  { name: 'Formations', path: '/formation', icon: BookOpen, external: true },
  { name: 'Actualités', path: '/actualite', icon: FileText, external: true },
  { name: 'Galerie', path: '/galerie', icon: Image, external: true },
  { name: 'Contact', path: '/contact', icon: Mail, external: true },
]

export default function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/admin/login')
  }

  return (
    <nav className="w-full bg-[#002E6D] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">Admin IFTPL</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 lg:gap-2">
            {items.map((el) => {
              const Icon = el.icon
              const linkContent = (
                <>
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{el.name}</span>
                </>
              )
              if (el.external) {
                return (
                  <a
                    key={el.path}
                    href={el.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#D00D2D] transition-colors text-sm font-medium"
                  >
                    {linkContent}
                  </a>
                )
              }
              return (
                <NavLink
                  key={el.path}
                  to={el.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${isActive ? 'bg-[#D00D2D]' : 'hover:bg-[#0553c1]'}`
                  }
                >
                  {linkContent}
                </NavLink>
              )
            })}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#D00D2D] transition-colors text-sm font-medium"
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
