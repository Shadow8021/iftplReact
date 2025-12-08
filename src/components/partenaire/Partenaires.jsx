import React from 'react'

export default function Partenaires() {
    return (
        <div className="py-3 pb-3">
            <h3 className="text-center font-extrabold my-5 text-2xl text-[#D00D2D]">NOS PARTENAIRES</h3>
            <div className="w-full flex gap-2 justify-evenly flex-wrap ">
                <div className="w-20 px-2">
                    <a href="#"><img class="rounded-2xl" src="./public/Metp.png" alt="logo" /></a>
                </div>

                <div className="w-20 px-2">
                    <a href="#"><img class="h-15 rounded-2xl" src="./public/TotalEnergies.png" alt="logo" /></a>
                </div>
                <div className="w-20 px-2">
                    <a href="#"><img class="h-15 rounded-2xl" src="./public/Armoiries-de-la-Namibie.svg" alt="logo" /></a>
                </div>

            </div>
        </div>
    )
}
