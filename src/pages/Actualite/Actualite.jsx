import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getActualites } from '../../utils/storeActualites'
import { ArrowRight, Calendar } from 'lucide-react'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Actualite() {
  const [actualites, setActualites] = useState([])

  useEffect(() => {
    setActualites(getActualites())
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-linear-to-r from-[#002E6D] to-[#0553c1] text-white py-16 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Nos <span className="text-[#D00D2D]">Actualités</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez les dernières informations sur nos formations et les événements de l'IFTPL
          </p>
        </div>
      </section>

      {/* Liste des actualités */}
      <section className="w-full min-h-screen bg-linear-to-b from-[#f5f5f5] to-[#ffffff] py-16 px-5">
        <div className="max-w-7xl mx-auto">
          {actualites.length === 0 ? (
            <p className="text-center text-gray-500 py-12">Aucune actualité pour le moment.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {actualites.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.titre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#002E6D]/10 text-[#002E6D] font-bold">
                        IFTPL
                      </div>
                    )}
                    {item.date && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 text-[#002E6D] px-3 py-1 rounded-full text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        {formatDate(item.date)}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[#002E6D] mb-3 line-clamp-2 group-hover:text-[#D00D2D] transition-colors">
                      {item.titre}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description || item.contenu?.slice(0, 120)}
                    </p>
                    <Link
                      to={`/actualite/${item.id}`}
                      className="inline-flex items-center gap-2 text-[#0553c1] hover:text-[#D00D2D] font-semibold text-sm"
                    >
                      Lire la suite
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-5 bg-linear-to-r from-[#D00D2D] to-[#ff1a3c] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Envie de commencer une formation ?</h2>
          <p className="text-xl text-red-100 mb-8">
            Inscrivez-vous dès maintenant et rejoignez la communauté des étudiants de l'IFTPL
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-[#D00D2D] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors group">
              S'inscrire
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/formation" className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#D00D2D] transition-colors">
              Voir toutes les formations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
