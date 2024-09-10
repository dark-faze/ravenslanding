import { useState, useEffect } from 'react'
import { ChevronRight, Play } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div id="hero" className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center text-white overflow-hidden">
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-28 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Enhance writing on Medium with AI 
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             Write, research, and publish top quality articles on medium with AI, that will get you more views and followers. 💸
          </p>
          <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://darkfaze.gumroad.com/l/mediumraven" target="_blank"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span>Buy Now</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#video"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                <span>Watch Demo</span>
              </a>
            </div>
          </div>
          <div className={`w-full max-w-4xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg transform rotate-2 scale-10 opacity-50 blur-xl"></div>
              <img
                src="/Browsers.png"
                alt="AI Chrome Extension"
                className="relative z-10 w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}