import './Ripple.css'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center z-50">
      {/* Spinner */}
      <div className="loadingio-spinner-ripple-2by998twmg8 mb-8">
        <div className="ldio-yzaezf3dcmj">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-[#002E6D]">Chargement en cours...</h3>
        <p className="text-gray-600 text-sm">Veuillez patienter un moment</p>

        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#D00D2D] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="inline-block w-2 h-2 bg-[#D00D2D] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
          <span className="inline-block w-2 h-2 bg-[#D00D2D] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
        </div>
      </div>
    </div>
  )
}

