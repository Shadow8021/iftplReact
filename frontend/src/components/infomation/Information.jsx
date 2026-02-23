import { donnees } from "./data"
import { CheckCircle } from 'lucide-react'

export default function Information() {
  return (
    <section className="w-full py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#002E6D] text-center mb-4">Pourquoi Choisir l'IFTPL ?</h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez les avantages et services qui font de l'IFTPL le meilleur choix pour votre formation professionnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donnees.map((dta, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#f5f5f5] to-white border-l-4 border-[#D00D2D] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0">
                  <img className="w-16 h-16 object-contain" src={dta.logo} alt="logo" />
                </div>
                <div className="flex-1">
                  <CheckCircle className="w-6 h-6 text-[#D00D2D] mb-2" />
                </div>
              </div>
              <p className="text-gray-700 font-semibold text-lg leading-relaxed">
                {dta.texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
