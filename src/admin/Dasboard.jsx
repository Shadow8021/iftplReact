import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { formationsData } from '../data/formationsData'
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
  LayoutDashboard,
} from 'lucide-react'

export default function Dasboard() {
  const navigate = useNavigate()
  const userJson = localStorage.getItem('user')
  const user = userJson ? JSON.parse(userJson) : null

  useEffect(() => {
    if (!user) {
      navigate('/admin/login')
    }
  }, [user, navigate])

  if (!user) return null

  const statsDisplay = [
    { id: 1, nbr: formationsData.length, texte: 'Formations', icon: BookOpen, color: 'bg-[#002E6D]' },
    { id: 2, nbr: donnees.find(d => d.texte === 'étudiants')?.nbr || '+200', texte: 'Étudiants', icon: Users, color: 'bg-[#0553c1]' },
    { id: 3, nbr: donnees.find(d => d.texte === 'lauréats')?.nbr || '+500', texte: 'Lauréats', icon: Award, color: 'bg-[#D00D2D]' },
    { id: 4, nbr: '30', texte: 'Personnel admin', icon: Building2, color: 'bg-[#002E6D]' },
    { id: 5, nbr: '+51', texte: 'Enseignants', icon: GraduationCap, color: 'bg-[#0553c1]' },
  ]

  const quickLinks = [
    { label: 'Formations', path: '/formation', icon: BookOpen },
    { label: 'Actualités', path: '/actualite', icon: FileText },
    { label: 'Galerie', path: '/galerie', icon: Image },
    { label: 'Contact', path: '/contact', icon: Mail },
  ]

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#f0f4f8] to-[#e2e8f0] text-[#002E6D]">
      {/* En-tête */}
      <div className="w-full bg-gradient-to-r from-[#002E6D] via-[#005ba3] to-[#0070d4] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-5 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#D00D2D] rounded-xl">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold">Tableau de bord IFTPL</h1>
                <p className="text-blue-200 text-sm">Bienvenue, {user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-8 space-y-8">
        {/* Cartes statistiques */}
        <div>
          <h2 className="text-xl font-bold text-[#002E6D] mb-4">Vue d'ensemble</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {statsDisplay.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
                >
                  <div className={`inline-flex p-3 rounded-xl ${stat.color} text-white mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-3xl font-bold text-[#002E6D]">{stat.nbr}</p>
                  <p className="text-gray-600 font-medium">{stat.texte}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Accès rapide au site */}
        <div>
          <h2 className="text-xl font-bold text-[#002E6D] mb-4">Accès rapide au site</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#D00D2D]/30 transition-all group"
                >
                  <div className="p-3 bg-[#002E6D]/10 rounded-xl group-hover:bg-[#D00D2D]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#002E6D] group-hover:text-[#D00D2D]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#002E6D] group-hover:text-[#D00D2D]">{link.label}</p>
                    <p className="text-sm text-gray-500">Voir la page</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#D00D2D]" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Liste des formations */}
        <div>
          <h2 className="text-xl font-bold text-[#002E6D] mb-4">Formations proposées</h2>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#002E6D] text-white">
                    <th className="text-left py-4 px-5 font-semibold">Formation</th>
                    <th className="text-left py-4 px-5 font-semibold">Catégorie</th>
                    <th className="text-left py-4 px-5 font-semibold">Durée</th>
                    <th className="text-left py-4 px-5 font-semibold">Places</th>
                    <th className="text-center py-4 px-5 font-semibold">Lien</th>
                  </tr>
                </thead>
                <tbody>
                  {formationsData.map((f) => (
                    <tr
                      key={f.id}
                      className="border-b border-gray-100 hover:bg-[#f8fafc] transition-colors"
                    >
                      <td className="py-4 px-5 font-medium text-[#002E6D]">{f.titre}</td>
                      <td className="py-4 px-5">
                        <span className="bg-[#D00D2D]/10 text-[#D00D2D] px-3 py-1 rounded-full text-sm font-semibold">
                          {f.categorie}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-gray-600">{f.duree}</td>
                      <td className="py-4 px-5 text-gray-600">{f.place}</td>
                      <td className="py-4 px-5 text-center">
                        <Link
                          to={`/formation-detail/${f.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#0553c1] hover:text-[#D00D2D] font-semibold text-sm"
                        >
                          Voir <ExternalLink className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pied de page du dashboard */}
        <div className="bg-gradient-to-r from-[#002E6D] to-[#0553c1] rounded-2xl p-6 text-white text-center">
          <p className="text-blue-100">
            Ce tableau de bord reflète les données du site IFTPL. Pour modifier les contenus, connectez-vous à votre backend ou éditez les fichiers de données.
          </p>
        </div>
      </div>
    </section>
  )
}
