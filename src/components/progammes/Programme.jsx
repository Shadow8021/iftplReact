import Filiere from "./Filiere"
import { donnees } from "../progammes/Info"
import { ArrowRight } from 'lucide-react'

export default function Programme() {
    return (
        <section className="w-full py-16 px-5 bg-linear-to-b from-[#f5f5f5] to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#002E6D] mb-4">Nos <span className="text-[#D00D2D]">Programmes</span></h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Découvrez notre large gamme de programmes de formation profesionnelles conçus pour préparer les talents de demain
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {donnees.map((el, i) => {
                        return <Filiere key={i} lien={el.lien} titre={el.titre} logo={el.logo} />
                    })}
                </div>

                <div className="text-center">
                    <a
                        href="/formation"
                        className="inline-flex items-center justify-center bg-[#D00D2D] hover:bg-[#ff1a3c] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg group"
                    >
                        Voir tous les programmes
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}
