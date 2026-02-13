import React from 'react'
import { Link } from 'react-router-dom'
import { formationsData } from '../../data/formationsData'
import { ArrowRight } from 'lucide-react'

export default function Actualite() {
    const formations = formationsData

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

            {/* Formations Section */}
            <section className="w-full min-h-screen bg-linear-to-b from-[#f5f5f5] to-[#ffffff] py-16 px-5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#002E6D] mb-4">Nos Formations Disponibles</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Explorez nos programmes de formation professionnelle et trouvez celui qui convient à votre parcours
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {formations.map((formation) => (
                            <div key={formation.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                {/* Image conteneur */}
                                <div className="relative h-48 overflow-hidden bg-gray-200">
                                    <img
                                        src={formation.image}
                                        alt={formation.titre}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {/* Badge catégorie */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-[#D00D2D] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            {formation.categorie}
                                        </span>
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="p-6">
                                    {/* Titre */}
                                    <h3 className="text-xl font-bold text-[#002E6D] mb-3 line-clamp-2 group-hover:text-[#D00D2D] transition-colors">
                                        {formation.titre}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {formation.description}
                                    </p>

                                    {/* Infos */}
                                    <div className="flex flex-wrap gap-4 mb-6 py-4 border-t border-b border-gray-200">
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Durée</p>
                                            <p className="text-lg font-bold text-[#D00D2D]">{formation.duree}</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Niveau</p>
                                            <p className="text-lg font-bold text-[#002E6D]">{formation.niveauAcces}</p>
                                        </div>
                                    </div>

                                    {/* Bouton */}
                                    <Link
                                        to={`/formation-detail/${formation.id}`}
                                        state={{ formation }}
                                        className="w-full block text-center bg-[#002E6D] text-white font-bold py-3 rounded-lg hover:bg-[#0553c1] transition-colors duration-300 flex items-center justify-center gap-2"
                                    >
                                        En savoir plus
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
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
