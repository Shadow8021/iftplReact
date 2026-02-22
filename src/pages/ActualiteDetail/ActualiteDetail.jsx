import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getActualiteById } from '../../utils/storeActualites'
import { ArrowLeft, Calendar } from 'lucide-react'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ActualiteDetail() {
  const { id } = useParams()
  const item = getActualiteById(id)

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Actualité introuvable.</p>
          <Link to="/actualite" className="text-[#0553c1] hover:text-[#D00D2D] font-semibold flex items-center justify-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Retour aux actualités
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <section className="w-full bg-linear-to-r from-[#002E6D] to-[#0553c1] text-white py-12 px-5">
        <div className="max-w-4xl mx-auto">
          <Link to="/actualite" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 font-medium">
            <ArrowLeft className="w-5 h-5" /> Retour aux actualités
          </Link>
          {item.date && (
            <p className="flex items-center gap-2 text-blue-100 mb-4">
              <Calendar className="w-5 h-5" />
              {formatDate(item.date)}
            </p>
          )}
          <h1 className="text-4xl lg:text-5xl font-bold">{item.titre}</h1>
        </div>
      </section>

      <section className="w-full py-12 px-5 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {item.image && (
            <div className="aspect-video bg-gray-100">
              <img src={item.image} alt={item.titre} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="p-8 lg:p-12">
            {item.description && (
              <p className="text-xl text-gray-600 mb-6 font-medium">{item.description}</p>
            )}
            <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap">
              {item.contenu || item.description}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
