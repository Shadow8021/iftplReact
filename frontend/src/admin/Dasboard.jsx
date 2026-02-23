import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getFormations } from '../utils/storeFormations'
import { donnees } from '../components/statistique/stats'
import {
  BookOpen,
  Users,
  Award,
  Building2,
  GraduationCap,
  Image,
  FileText,
  Mail,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  /* ================= AUTH ================= */

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('user') || 'null')
      if (!stored) {
        navigate('/admin/login', { replace: true })
      } else {
        setUser(stored)
      }
    } catch {
      navigate('/admin/login', { replace: true })
    }
  }, [navigate])

  /* ================= DATA ================= */

  const formations = useMemo(() => getFormations(), [])

  const statsMap = useMemo(() => {
    return donnees.reduce((acc, item) => {
      acc[item.texte] = item.nbr
      return acc
    }, {})
  }, [])

  const statsDisplay = useMemo(
    () => [
      { id: 1, nbr: formations.length, texte: 'Formations', icon: BookOpen },
      { id: 2, nbr: statsMap['étudiants'] || '+200', texte: 'Étudiants', icon: Users },
      { id: 3, nbr: statsMap['lauréats'] || '+500', texte: 'Lauréats', icon: Award },
      { id: 4, nbr: '30', texte: 'Personnel admin', icon: Building2 },
      { id: 5, nbr: '+51', texte: 'Enseignants', icon: GraduationCap },
    ],
    [formations.length, statsMap]
  )

  const quickLinks = [
    { label: 'Formations', path: '/formation', icon: BookOpen },
    { label: 'Actualités', path: '/actualite', icon: FileText },
    { label: 'Galerie', path: '/galerie', icon: Image },
    { label: 'Contact', path: '/contact', icon: Mail },
  ]

  if (!user) return null

  const username = user.email?.split('@')[0] || 'Admin'

  /* ================= UI ================= */

  return (
    <div className="p-8 space-y-10">

      {/* HEADER */}
      <header>
        <p className="text-sm text-[#0553c1]">Tableau de bord</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#002E6D]">
          Bonjour, {username}
        </h1>
      </header>

      {/* STATS */}
      <section>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {statsDisplay.map(({ id, nbr, texte, icon: Icon }, i) => {
            const colors = [
              'bg-[#002E6D]',
              'bg-[#0553c1]',
              'bg-[#D00D2D]',
            ]
            const iconBg = colors[i % colors.length]

            return (
              <div
                key={id}
                className="rounded-xl border border-[#002E6D]/10 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold tabular-nums text-[#002E6D]">
                    {nbr}
                  </span>
                  <span className={`rounded-lg ${iconBg} p-2 text-white`}>
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#0553c1]/90">{texte}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* QUICK LINKS */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#0553c1]">
          Accès rapide au site
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-[#002E6D]/10 bg-white p-4 shadow-sm transition-all hover:border-[#D00D2D]/30 hover:shadow-md"
            >
              <span className="rounded-lg bg-[#002E6D]/10 p-2.5 text-[#002E6D] group-hover:bg-[#D00D2D]/20 group-hover:text-[#D00D2D]">
                <Icon className="h-5 w-5" />
              </span>

              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#002E6D] group-hover:text-[#D00D2D]">
                  {label}
                </p>
                <p className="text-xs text-[#0553c1]/80">Ouvrir la page</p>
              </div>

              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#0553c1]/70 group-hover:text-[#D00D2D]" />
            </Link>
          ))}
        </div>
      </section>

      {/* FORMATIONS TABLE */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#0553c1]">
          Formations proposées
        </h2>

        <div className="overflow-hidden rounded-xl border border-[#002E6D]/10 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#002E6D]/20 bg-[#002E6D]">
                  <th className="px-5 py-3.5 text-left font-medium text-white">Formation</th>
                  <th className="px-5 py-3.5 text-left font-medium text-white">Catégorie</th>
                  <th className="px-5 py-3.5 text-left font-medium text-white">Durée</th>
                  <th className="px-5 py-3.5 text-left font-medium text-white">Places</th>
                  <th className="px-5 py-3.5 text-right font-medium text-white"></th>
                </tr>
              </thead>

              <tbody>
                {formations.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-5 py-6 text-center text-[#0553c1]/70"
                    >
                      Aucune formation disponible.
                    </td>
                  </tr>
                ) : (
                  formations.map((f) => (
                    <tr
                      key={f.id}
                      className="border-b border-gray-100 last:border-0 hover:bg-[#f8fafc] transition-colors"
                    >
                      <td className="px-5 py-3.5 font-medium text-[#002E6D]">
                        {f.titre}
                      </td>

                      <td className="px-5 py-3.5">
                        <span className="inline-flex rounded-full bg-[#D00D2D]/10 px-2.5 py-0.5 text-xs font-medium text-[#D00D2D]">
                          {f.categorie}
                        </span>
                      </td>

                      <td className="px-5 py-3.5 text-[#0553c1]/90">
                        {f.duree}
                      </td>

                      <td className="px-5 py-3.5 text-[#0553c1]/90">
                        {f.place}
                      </td>

                      <td className="px-5 py-3.5 text-right">
                        <Link
                          to={`/formation-detail/${f.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-[#0553c1] hover:text-[#D00D2D]"
                        >
                          Voir <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}