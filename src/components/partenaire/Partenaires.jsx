import { donnees } from './info'

export default function Partenaires() {
    return (
        <section className="w-full py-16 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#002E6D] mb-4">Nos <span className="text-[#D00D2D]">Partenaires</span></h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        L'IFTPL collabore avec les meilleures organisations et entreprises pour garantir une formation de qualité
                    </p>
                </div>

                <div className="bg-gradient-to-r from-[#f5f5f5] to-[#ffffff] p-12 rounded-2xl">
                    <div className="flex flex-wrap gap-8 justify-center items-center">
                        {donnees.map((el, index) => {
                            return (
                                <a
                                    key={index}
                                    href={el.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-[#D00D2D]"
                                >
                                    <img
                                        className="h-20 object-contain group-hover:opacity-80 transition-opacity"
                                        src={el.logo}
                                        alt={el.alt}
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
