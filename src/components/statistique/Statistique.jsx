import { donnees } from './stats'

export default function Statistique() {
  return (
    <section className="w-full py-16 px-5 bg-gradient-to-r from-[#002E6D] to-[#0553c1] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donnees.map((el, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#D00D2D] mb-3">
                {el.nbr}
              </div>
              <p className="text-lg text-blue-100 font-semibold">
                {el.texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
