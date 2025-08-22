'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Terminal, Code, Zap, Download } from 'lucide-react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Frontend-Developer', 'UI-UX designer', 'AI/ML Enthusiast', 'Tech Innovator']

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg pt-20">

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-float opacity-20" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-400 animate-rotate3d opacity-20" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse opacity-30" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-yellow-400 rounded-full animate-ping opacity-20" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          {/* Terminal-style header */}
          <div className="cyber-glass rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center mb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-sm font-mono">~/portfolio/developer</span>
              </div>
            </div>
            <div className="text-left font-mono text-sm text-green-400">
              <span className="text-cyan-400">$</span> whoami
              <br />
              <span className="text-white">Nishika - Front-End Developer</span>
              <br />
              <span className="text-cyan-400">$</span> cat skills.txt
              <br />
              <span className="text-yellow-400">React • Next.js  • Python • AI/ML</span>
            </div>
          </div>

          <h1 className="text-6xl sm:text-6xl lg:text-6xl font-bold mb-6">
            <span className="block text-white mb-2 text-3xl sm:text-4xl lg:text-5xl">Hello, I'm</span>
            <span className="gradient-text animate-neonGlow glitch" data-text="Nishika">
              Nishika Kansal
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-6 h-12 flex items-center justify-center">
            <Terminal className="w-8 h-8 mr-4 animate-pulse" />
            <span className="animate-hologram">
              {currentText}
              <span className="animate-pulse text-white">|</span>
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Building Code that <span className="text-yellow-300 font-semibold">connects,</span> design that <span className="text-yellow-300 font-semibold">inspires.  </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={scrollToAbout}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-circuitPulse shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                <Code className="mr-3 w-6 h-6" />
                Explore My Work
                <ChevronDown className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <a 
            href="/Nishika_new.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span className="flex items-center">
              <Download className="mr-3 w-6 h-6" />
              Download CV
            </span>
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20" />
          </a>

          </div>
        

          {/* Stats display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { number: '10+', label: 'Projects Completed', icon: Code },
              { number: '2+', label: 'Years of Coding Journey', icon: Zap },
              { number: '10+', label: 'Technologies', icon: Terminal },
              { number: '100%', label: 'Dedication to Growth', icon: ChevronDown }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={index}
                  className="cyber-glass rounded-lg p-3 text-center animate-scaleIn holographic"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
    </section>
  )
}