import React from 'react'
import { CheckCircle, Target, Heart, Users } from 'lucide-react'

export default function About() {
    const values = [
        {
            id: 1,
            icon: <Target className="w-12 h-12 text-[#D00D2D]" />,
            title: "Excellence",
            description: "Nous nous engageons à fournir une formation de qualité supérieure pour préparer les étudiants aux défis du marché du travail."
        },
        {
            id: 2,
            icon: <Heart className="w-12 h-12 text-[#D00D2D]" />,
            title: "Passion",
            description: "Notre passion pour l'éducation nous pousse à innover et à créer les meilleures expériences d'apprentissage."
        },
        {
            id: 3,
            icon: <Users className="w-12 h-12 text-[#D00D2D]" />,
            title: "Communauté",
            description: "Nous créons un environnement inclusif où chaque étudiant peut s'épanouir et atteindre son plein potentiel."
        },
        {
            id: 4,
            icon: <CheckCircle className="w-12 h-12 text-[#D00D2D]" />,
            title: "Responsabilité",
            description: "Nous sommes responsables de la formation de professionnels éthiques et compétents pour la société."
        }
    ]

    const achievements = [
        { number: "15+", label: "Ans d'expérience" },
        { number: "5000+", label: "Étudiants formés" },
        { number: "95%", label: "Taux de réussite" },
        { number: "30+", label: "Partenaires industriels" }
    ]

    const timeline = [
        {
            year: "2009",
            title: "Fondation de l'IFTPL",
            description: "L'Institut de Formation Technique et Professionnelle de Loudima est créé avec la mission de former les futurs professionnels."
        },
        {
            year: "2014",
            title: "Expansion des programmes",
            description: "Ajout de nouveaux programmes de formation pour répondre aux besoins du marché du travail."
        },
        {
            year: "2018",
            title: "Accréditation nationale",
            description: "Obtention de l'accréditation officielle du ministère de l'enseignement technique et professionnel."
        },
        {
            year: "2023",
            title: "Modernisation",
            description: "Mise à jour des installations et intégration de nouvelles technologies dans nos programmes de formation."
        }
    ]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-r from-[#002E6D] to-[#0553c1] text-white py-20 px-5">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">À propos de l'IFTPL</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Depuis plus de 15 ans, l'Institut de Formation Technique et Professionnelle de Loudima forme les talents de demain en offrant une éducation de qualité, adaptée aux réalités du marché du travail moderne.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="w-full py-16 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-[#002E6D] mb-6">Notre Mission</h2>
                            <p className="text-gray-700 text-lg mb-4">
                                Former des professionnels compétents, éthiques et responsables, capables de contribuer au développement socio-économique de la République du Congo et de toute la région.
                            </p>
                            <p className="text-gray-700 text-lg mb-6">
                                Nous nous engageons à offrir une formation pratique et théorique de haut niveau, en partenariat avec les entreprises et institutions du secteur professionnel.
                            </p>
                            <a href="#" className="inline-block bg-[#D00D2D] hover:bg-[#ff1a3c] text-white font-bold py-3 px-8 rounded-lg transition-colors">
                                En savoir plus
                            </a>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Mission" className="rounded-2xl shadow-2xl w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full py-16 px-5 bg-[#f5f5f5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#002E6D] text-center mb-12">Nos Valeurs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-2xl font-bold text-[#002E6D] mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="w-full py-16 px-5 bg-gradient-to-r from-[#002E6D] to-[#0553c1] text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-[#D00D2D] mb-3">{item.number}</div>
                                <p className="text-lg text-blue-100">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="w-full py-16 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#002E6D] text-center mb-12">Notre Histoire</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#D00D2D]"></div>
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-1/2"></div>
                                    <div className="w-1/2 px-8">
                                        <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'ml-auto mr-8' : 'ml-8 mr-auto'}`}>
                                            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#D00D2D] rounded-full border-4 border-white"></div>
                                            <div className="text-[#D00D2D] font-bold text-lg mb-2">{item.year}</div>
                                            <h3 className="text-xl font-bold text-[#002E6D] mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 px-5 bg-gradient-to-r from-[#D00D2D] to-[#ff1a3c]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Rejoignez-nous Aujourd'hui</h2>
                    <p className="text-xl mb-8 text-red-100">
                        Commencez votre parcours vers une carrière professionnelle réussie avec l'IFTPL.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#D00D2D] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                            Consulter nos formations
                        </button>
                        <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#D00D2D] transition-colors">
                            Nous contacter
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
