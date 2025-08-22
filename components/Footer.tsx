import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Thanks for visiting!
            </h3>
            
            <p className="text-gray-400 mb-6">
              Let's connect and create something amazing together.
            </p>
            
            <div className="flex items-center justify-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-5 h-5 mx-2 text-red-500 fill-current" />
              <span>by Nishika</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}