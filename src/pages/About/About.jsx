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
            year: "2007",
            title: "Signature de l’accord bilatéral Congo — Namibie pour créer l’Institut",
            description: "Les Présidents Denis Sassou Nguesso (Congo) et Hifikepunye Pohamba (Namibie) ont signé un accord bilatéral pour créer un institut de formation technique commun à Loudima."
        },
        {
            year: "2009",
            title: "Pose de la première pierre des travaux (réhabilitation du site historique)",
            description: "Les autorités congolaises et namibiennes ont procédé à la pose de la première pierre de l’IFTP de Loudima à Kitaka, marquant le lancement officiel des travaux de construction de l’institut."
        },
        {
            year: "2011",
            title: "Construction et réhabilitation avancent.",
            description: "Les travaux de construction et de réhabilitation du site de Kitaka ont commencé pour transformer l’ancien camp historique en un institut moderne."
        },
        {
            year: "22 oct. 2014",
            title: "Inauguration officielle de l’IFTPL.",
            description: "L’institut a été officiellement inauguré à Loudima par les Chefs d’État congolais et namibien, marquant l’aboutissement du projet de coopération."
        },
        {
            year: "mars 2015",
            title: "Début de la première promotion d’étudiants.",
            description: "La première promotion d’étudiants congolais et namibiens a commencé les cours au sein de l’institut."
        },
        {
            year: "2018",
            title: "Premiers diplômés sortants.",
            description: "Les premiers étudiants formés à l’institut ont obtenu leurs diplômes techniques et professionnels."
        }
    ]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="w-full bg-linear-to-r from-[#002E6D] to-[#0553c1] text-white py-20 px-5">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-red-600">À propos de l'IFTPL</h1>
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
                            <h2 className="text-4xl font-bold text-red-600 mb-6">Notre Mission</h2>
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
                    <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Nos Valeurs</h2>
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
            <section className="w-full py-16 px-5 bg-linear-to-r from-[#002E6D] to-[#0553c1] text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-xl sm:text-5xl font-bold text-[#D00D2D] mb-3">{item.number}</div>
                                <p className="sm:text-lg text-blue-100">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="w-full py-16 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#002E6D] text-center mb-12">Notre Histoire</h2>

                    {/* Desktop Timeline - Alternating Layout */}
                    <div className="hidden md:block relative">
                        {/* Center Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-[#D00D2D] to-[#002E6D]"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative">
                                    {/* Left Side - Even Index */}
                                    {index % 2 === 0 && (
                                        <div className="flex justify-end pr-8 md:pr-16">
                                            <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#D00D2D]">
                                                <div className="text-[#D00D2D] font-bold text-lg mb-2">{item.year}</div>
                                                <h3 className="text-xl font-bold text-[#002E6D] mb-2">{item.title}</h3>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Center Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-6 h-6 bg-[#D00D2D] rounded-full border-4 border-white shadow-lg"></div>

                                    {/* Right Side - Odd Index */}
                                    {index % 2 === 1 && (
                                        <div className="flex justify-start pl-8 md:pl-16">
                                            <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-r-4 border-[#D00D2D]">
                                                <div className="text-[#D00D2D] font-bold text-lg mb-2">{item.year}</div>
                                                <h3 className="text-xl font-bold text-[#002E6D] mb-2">{item.title}</h3>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline - Single Column */}
                    <div className="md:hidden space-y-8">
                        <div className="relative pl-8 border-l-4 border-gradient-to-b border-[#D00D2D]">
                            {timeline.map((item, index) => (
                                <div key={index} className="mb-8 relative">
                                    {/* Mobile Dot */}
                                    <div className="absolute -left-6 top-1 w-4 h-4 bg-[#D00D2D] rounded-full border-2 border-white shadow-lg"></div>

                                    {/* Mobile Card */}
                                    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div className="text-[#D00D2D] font-bold text-base mb-1">{item.year}</div>
                                        <h3 className="text-lg font-bold text-[#002E6D] mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 px-5 bg-linear-to-r from-[#D00D2D] to-[#ff1a3c]">
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
