import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function Heros() {
    let infos = [
        {
            id: 1,
            nbr: "15+",
            texte: "Ans d'expérience"
        }, {
            id: 2,
            nbr: "5000+",
            texte: "Étudiants formés"
        }, {
            id: 3,
            nbr: "95%",
            texte: "Taux de réussite"
        }
    ]
    return (
        <section className="w-full h-auto bg-linear-to-r from-[#002E6D] via-[#005ba3] to-[#0070d4] text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D00D2D] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D00D2D] opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 py-20  lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-block mb-4">
                                <span className="bg-[#D00D2D] bg-opacity-20 text-[#D00D2D] px-4 py-2 rounded-full text-sm font-bold border border-[#D00D2D]">
                                    Bienvenue à l'IFTPL
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                <span className="text-[#D00D2D]">I.F.T.P.L</span>, le centre de référence où se forment les <span className="text-[#D00D2D]">techniciens et innovateurs</span>, prêts à transformer le monde.
                            </h1>
                            <p className="text-xl text-blue-100 mb-8">
                                L'excellence technique au service du développement. Rejoignez-nous pour une formation professionnelle de qualité supérieure.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/formation" className="inline-flex items-center justify-center bg-[#D00D2D] hover:bg-[#ff1a3c] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                                Explorez nos formations
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#videos" className="hidden sm:inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#002E6D] font-bold py-4 px-8 rounded-lg transition-colors duration-300">
                                <Play className="w-5 h-5 mr-2" />
                                Regarder la vidéo
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 pt-8 border-t border-white border-opacity-20">
                            {
                                infos.map((info) => (
                                    <div key={info.id} className="text-center">
                                        <div className="text-4xl font-bold text-[#D00D2D]">{info.nbr}</div>
                                        <p className="text-blue-100">{info.texte}</p>
                                    </div>
                                ))}

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-r from-[#D00D2D] to-[#ff1a3c] rounded-2xl blur-3xl opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=700&fit=crop"
                                alt="Formation IFTPL"
                                className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
                            />
                            {/* Play Button Overlay */}
                            <button className="absolute inset-0 flex items-center justify-center m-auto w-16 h-16 bg-[#D00D2D] hover:bg-[#ff1a3c] rounded-full shadow-lg transition-all hover:scale-110 group">
                                <Play className="w-8 h-8 text-white fill-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="hidden md:flex flex-col items-center">
                    <p className="text-sm text-blue-100 mb-2">Découvrez plus</p>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full animate-ping"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
