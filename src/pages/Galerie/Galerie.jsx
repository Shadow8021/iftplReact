import React from 'react'

export default function Galerie() {
    return (
        <div className='w-full p-10 h-200 mx-autom mb-50 flex flex-col gap-2'>
            <div className="flex items-center max-w-100 mx-auto justify-evenly gap-2 px-20 bg-red-200 py-1">
                <button class="btn rounded-2xl py-1 hover:bg-amber-300">Tous</button>
                <button class="btn rounded-2xl">Images</button>
                <button class="btn rounded-2xl">Videos</button>
            </div>
            <div className='bg-green-400 w-full p-10 h-200 mx-auto flex gap-2 justify-evenly flex-wrap'>
                <div className="w-40 bg-red-400 h-50"></div>
                <div className="w-40 bg-red-400 h-50"></div>
                <div className="w-40 bg-red-400 h-50"></div>
                <div className="w-40 bg-red-400 h-50"></div>
                <div className="w-40 bg-red-400 h-50"></div>
            </div>
            <div className="flex items-center max-w-100 mx-auto justify-evenly gap-2 px-20 bg-red-200 py-1">
                <div className="rounded-lg p-2 bg-yellow-200">Tous</div>
                <div className="rounded-lg p-2 bg-yellow-200">Images</div>
                <div className="rounded-lg p-2 bg-yellow-200">Videos</div>
            </div>
        </div>
    )
}
