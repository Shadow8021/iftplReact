import React from 'react'
import { Link } from 'react-router-dom'

export default function Formation() {
    const formations = [
        {
            id: 1,
            titre: "Maintenance des Équipements Industriels",
            description: "Apprenez à diagnostiquer, réparer et maintenir les équipements industriels pour une production fiable et efficace.",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
            duree: "3 ans",
            modules: 12,
            niveau: "Intermédiaire",
            categorie: "Industrie"
        },
        {
            id: 2,
            titre: "Bâtiment et Travaux Publics (BTP)",
            description: "Maîtrisez les techniques de construction, la gestion de projets et la sécurité sur les chantiers.",
            image: "https://images.unsplash.com/photo-1504917595217-343ec35474b7?w=500&h=300&fit=crop",
            duree: "3 ans",
            modules: 15,
            niveau: "Avancé",
            categorie: "Construction"
        },
        {
            id: 3,
            titre: "Commercialisation des Services en Restauration (CSR)",
            description: "Développez vos compétences en gestion, marketing et service client dans le secteur de la restauration.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
            duree: "3 an",
            modules: 8,
            niveau: "Débutant",
            categorie: "Restauration"
        },
        {
            id: 4,
            titre: "Commercialisation des Services en Restauration (CSR)",
            description: "Développez vos compétences en gestion, marketing et service client dans le secteur de la restauration.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
            duree: "3 an",
            modules: 8,
            niveau: "Débutant",
            categorie: "Restauration"
        },
        {
            id: 5,
            titre: "Commercialisation des Services en Restauration (CSR)",
            description: "Développez vos compétences en gestion, marketing et service client dans le secteur de la restauration.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
            duree: "3 an",
            modules: 8,
            niveau: "Débutant",
            categorie: "Restauration"
        },
        {
            id: 6,
            titre: "Commercialisation des Services en Restauration (CSR)",
            description: "Développez vos compétences en gestion, marketing et service client dans le secteur de la restauration.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
            duree: "3 an",
            modules: 8,
            niveau: "Débutant",
            categorie: "Restauration"
        }
    ]

    return (
        <div>
            {/* debut de la section formations disponibles */}
            <section className="w-full min-h-screen bg-linear-to-b from-[#f5f5f5] to-[#ffffff] py-16 px-5">

                {/* En-tête */}
                <div className="max-w-7xl mx-auto mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#002E6D] mb-4 text-center">
                        Nos <span className="text-[#D00D2D]">Formations</span>
                    </h2>
                    <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
                        Découvrez nos programmes de formation professionnelle adaptés à vos objectifs de carrière et conçus pour vous préparer au monde du travail.
                    </p>
                </div>

                {/* Grille de cartes */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">Modules</p>
                                        <p className="text-lg font-bold text-[#002E6D]">{formation.modules}</p>
                                    </div>

                                </div>

                                {/* Bouton */}
                                <Link
                                    to={`/formation-detail/${formation.id}`}
                                    state={{ formation }}
                                    className="w-full block text-center bg-[#002E6D] text-white font-bold py-3 rounded-lg hover:bg-[#0553c1] transition-colors duration-300"
                                >
                                    En savoir plus
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-linear-to-r from-[#002E6D] to-[#0553c1] rounded-2xl p-8 max-w-4xl mx-auto text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Prêt à commencer ?</h3>
                    <p className="mb-6 text-blue-100">Inscrivez-vous dès maintenant et rejoignez des centaines d'autres étudiants satisfaits</p>
                    <button className="bg-[#D00D2D] hover:bg-[#ff1a3c] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        S'inscrire maintenant
                    </button>
                </div>

            </section>
            {/* fin de la section formations disponibles */}
        </div>
    )
}

