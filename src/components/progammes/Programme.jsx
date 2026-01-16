import Filiere from "./Filiere"
import { donnees } from "../progammes/Info"
export default function Programme() {
    return (
        <div className=" w-full flex flex-col items-center pt-3 h-auto max-w-full  programmes ">
            <h3 className="text-center text-2xl font-bold text-[#D00D2D] ">NOS PROGRAMMES</h3>
            <div className="flex flex-col items-center justify-evenly mt-5 w-full gap-5 min-w-90 h-auto p-5 lg:flex-row ">
                {donnees.map((el, i) => {
                    return < Filiere key={i} titre={donnees[i].titre} logo={donnees[i].logo} />
                })}
            </div>
            <p
                className="inline-block text-center mx-auto my-4 text-[#D00D2D] p-3 shadow-2xl bg-[#002E6D] font-bold rounded-xl transition ease-in hover:bg-[#0553c1]">
                <a href="/formation">...plus de
                    programmes</a>
            </p>

        </div>
    )
}
