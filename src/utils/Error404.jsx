import img404 from "/Img404.png"
export default function Error404() {
    return (
        <div className='w-full m-0 h-screen bg-teal-50 shadow-2xl p-5'>

            <div className='w-full flex flex-col md:flex-row justify-evenly items-center bg-teal-50 rounded-2xl h-screen p-5'>
                <div className="flex items-center flex-col">
                    <p className='text-8xl font-bold text-red-600'>404</p>
                    <p className='text-2xl font-bold'>Not found</p>
                </div>
                <div>
                    <img src={img404} alt="404image" className="w-80 mb-3" />
                </div>
            </div>
        </div>
    )
}
