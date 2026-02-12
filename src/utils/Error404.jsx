import img404 from "/Img404.png"
export default function Error404() {
    return (
        <div className='w-ful m-3 bg-teal-50 shadow-2xl rounded-2xl h-125 p-5'>

            <div className='w-ful m-3 flex justify-evenly items-center bg-teal-50 rounded-2xl h-90 p-5'>
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
