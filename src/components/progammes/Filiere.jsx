import { ArrowRight } from 'lucide-react'

export default function Filiere(props) {
    return (
        <a className="block group" href={props.lien}>
            <div className="w-full max-w-80 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#D00D2D] group">
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-linear-to-r from-[#D00D2D] to-[#ff1a3c] opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
                    <img className="w-20 h-20 mx-auto object-contain relative z-10" src={props.logo} alt={props.titre} />
                </div>
                <p className="text-[#002E6D] font-bold text-center text-lg mb-4 group-hover:text-[#D00D2D] transition-colors">
                    {props.titre}
                </p>
                <div className="flex items-center justify-center text-[#D00D2D] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="mr-2">En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </a>
    )
}
