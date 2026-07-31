'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Terminal, Code, Zap, Download } from 'lucide-react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Full-Stack Developer',
    'AI/ML Engineer',
    'Software Engineer',
    'Problem Solver',
    'DSA Enthusiast'
  ]

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg pt-16">

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-14 h-14 sm:w-16 sm:h-16 border-2 border-cyan-400 rotate-45 animate-float opacity-20" />
        <div className="absolute top-32 right-14 w-12 h-12 sm:w-14 sm:h-14 border-2 border-purple-400 animate-rotate3d opacity-20" />
        <div className="absolute bottom-32 left-14 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse opacity-30" />
        <div className="absolute bottom-16 right-8 w-18 h-18 sm:w-20 sm:h-20 border border-yellow-400 rounded-full animate-ping opacity-20" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="animate-fadeInUp">

          {/* Terminal-style header */}
          <div className="cyber-glass rounded-lg p-3 sm:p-4 mb-6 max-w-xl mx-auto">
            <div className="flex items-center mb-2">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-xs font-mono">~/portfolio/developer</span>
              </div>
            </div>
            <div className="text-left font-mono text-xs sm:text-sm text-green-400">
              <span className="text-cyan-400">$</span> whoami
              <br />
              <span className="text-white">Nishika - Software Engineer</span>
              <br />
              <span className="text-cyan-400">$</span> cat skills.txt
              <br />
              <span className="text-yellow-400 text-[11px] sm:text-xs leading-relaxed">
                React • Next.js • Node.js • MongoDB • C++ • Java • Python • AI/ML
              </span>
            </div>
          </div>

          {/* Name heading */}
          <h1 className="font-bold mb-3">
            <span className="block text-white mb-1 text-xl sm:text-2xl lg:text-3xl">Hello, I'm</span>
            <span
              className="gradient-text animate-neonGlow glitch text-3xl sm:text-4xl lg:text-5xl"
              data-text="Nishika Kansal"
            >
              Nishika Kansal
            </span>
          </h1>

          {/* Typewriter */}
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 mb-4 h-9 flex items-center justify-center">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 mr-2.5 animate-pulse flex-shrink-0" />
            <span className="animate-hologram">
              {currentText}
              <span className="animate-pulse text-white">|</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
            Building Code that <span className="text-yellow-300 font-semibold">connects,</span> design that{' '}
            <span className="text-yellow-300 font-semibold">inspires.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <button
              onClick={scrollToAbout}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-sm rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-circuitPulse shadow-lg w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Code className="mr-2 w-4 h-4" />
                Explore My Work
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href="/Resume_Nishika.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 font-semibold text-sm rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </span>
              <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20" />
            </a>
          </div>

          {/* Stats display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { number: '10+', label: 'Projects Completed', icon: Code },
              { number: '2+',  label: 'Years of Coding Journey', icon: Zap },
              { number: '20+', label: 'Technologies', icon: Terminal },
              { number: '250+', label: 'Problems Solved', icon: ChevronDown }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="cyber-glass rounded-lg p-2.5 sm:p-3 text-center animate-scaleIn holographic"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-5 h-5 mx-auto mb-1.5 text-cyan-400" />
                  <div className="text-lg sm:text-xl font-bold text-white mb-0.5">{stat.number}</div>
                  <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* Scroll-down button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
    </section>
  )
}