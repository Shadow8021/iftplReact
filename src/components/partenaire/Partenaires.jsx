import { donnees } from './info'
export default function Partenaires() {
    return (
        <div className="py-3 pb-3">
            <h3 className="text-center font-extrabold my-5 text-2xl text-[#D00D2D]">NOS PARTENAIRES</h3>
            <div className="w-full flex gap-2 justify-evenly flex-wrap ">
                {
                    donnees.map(el => (
                        <div className="w-20 px-2">
                            <a href="#"><img class="rounded-2xl" src={el.logo} alt={el.alt} /></a>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
