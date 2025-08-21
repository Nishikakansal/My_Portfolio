'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'cyber-glass border-b border-cyan-400/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-cyan-400 animate-pulse" />
              <span className="text-2xl font-bold gradient-text font-mono">
                &lt;MyPortfolio/&gt;
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'about', label: 'System.about()' },
                { name: 'skills', label: 'Skills.exe' },
                { name: 'projects', label: 'Projects[]' },
                { name: 'contact', label: 'Contact.init()' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 font-mono text-sm group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg cyber-glass hover:bg-cyan-400/10 transition-all duration-300 group"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400 group-hover:animate-spin" />
                ) : (
                  <Moon className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg cyber-glass hover:bg-cyan-400/10 transition-all duration-300"
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-cyan-400" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg cyber-glass hover:bg-cyan-400/10 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-cyan-400" />
                ) : (
                  <Menu className="w-6 h-6 text-cyan-400" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-80 cyber-glass border-l border-cyan-400/20 transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            {/* Terminal-style menu */}
            <div className="bg-gray-900 rounded-lg p-4 mb-6 font-mono text-sm">
              <div className="text-green-400 mb-2">
                <span className="text-cyan-400">$</span> ls -la navigation/
              </div>
              <div className="text-gray-400">
                total 4 sections
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: 'about', label: 'about.js', icon: '📄' },
                { name: 'skills', label: 'skills.json', icon: '⚙️' },
                { name: 'projects', label: 'projects/', icon: '📁' },
                { name: 'contact', label: 'contact.md', icon: '📧' }
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className={`w-full text-left p-4 rounded-lg cyber-glass hover:bg-cyan-400/10 transition-all duration-300 group animate-slideInRight`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-gray-400 text-sm font-mono">
                        ./{item.name}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Terminal footer */}
            <div className="mt-8 bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">
                <span className="text-cyan-400">$</span> whoami
              </div>
              <div className="text-white">Full Stack Developer</div>
              <div className="text-gray-400 mt-2">
                Status: <span className="text-green-400">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}