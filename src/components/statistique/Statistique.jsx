import React from 'react'

export default function Statistique() {
  return (
    <section className="bg-[#d5d5d5] pt-5">
      <h4 className="text-center font-bold text-2xl text-[#D00D2D] ">STATISTIQUE DE L'ÉCOLE</h4>
      <div className="w-full h-auto py-3 flex flex-wrap justify-evenly gap-2 items-center px-auto">
        <div className="w-1/3  h-20 flex justify-center px-6 gap-2 items-center text-xl">
          <p className="text-lg text-center"><span class="text-[#D00D2D] text-xl font-bold">+7 </span>formations</p>
        </div>
        <div className="w-1/3  h-20 flex justify-center px-6 gap-2 items-center text-xl">
          <p className="text-lg text-center"><span class="text-[#D00D2D] text-xl font-bold">2 </span>langages</p>
        </div>
        <div className="w-1/3  h-20 flex justify-center px-6 gap-2 items-center text-xl">
          <p className="text-lg text-center"><span class="text-[#D00D2D] text-xl font-bold">+200 </span>étudiants</p>
        </div>
        <div className="w-1/3  h-20 flex justify-center px-6 gap-2 items-center text-xl">
          <p className="text-lg text-center"><span class="text-[#D00D2D] text-xl font-bold">+500 </span>
            lauréats</p>
        </div>
        <div className="w-1/3  h-20 flex justify-center px-6 gap-2 items-center text-xl">
          <p className="text-lg text-center"><span class="text-[#D00D2D] text-xl font-bold">30 </span>Personnel
            Administratif</p>
        </div>
        <div className="w-1/3  h-20 flex justify-center px-6 gap-2 items-center text-xl">
          <p className="text-lg text-center"><span class="text-[#D00D2D] text-xl font-bold">+51 </span>Personnel enseignants
          </p>
        </div>
      </div>
    </section>
  )
}
