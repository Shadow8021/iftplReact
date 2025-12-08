import {donnees} from "./data"

export default function Information() {
  return (
    <div className="w-full flex flex-col gap-4 px-5 py-2">
      {
        donnees.map(dta=>(
             <div
        className="flex w-full text-[#D00D2D] justify-center gap-2 bg-[#002E6D] border border-blue-600 shadow-2xl rounded-2xl">
        <div className="w-90 h-30 p-3 flex items-center rounded-full lg:h-30 lg:w-40">
          <img className="w-full" src={dta.logo} alt="logo"/>
        </div>
        <div class=" w-200 h-30 flex items-center py-5 p-3 ">
          <p class="text-[12px] font-bold text-white lg:text-[15px]">{dta.texte}</p>
        </div>
      </div>
            
        ))
      }
    </div>
  )
}
