'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  Code2, 
  Database, 
  Globe, 
  Layers,
  Terminal
} from 'lucide-react'

const techCategories = [
  {
    icon: Terminal,
    title: 'Core Systems',
    color: 'from-cyan-400 to-blue-500',
    technologies: [
      { name: 'Python', icon: '🐍', level: 90 },
      { name: 'Java', icon: '☕', level: 70 },
      { name: 'JavaScript', icon: '⚡', level: 85 }
    ]
  },
  {
    icon: Code2,
    title: 'Interface Layer',
    color: 'from-blue-400 to-cyan-500',
    technologies: [
      { name: 'HTML', icon: '🌐', level: 95 },
      { name: 'CSS', icon: '🎨', level: 90 },
      { name: 'React', icon: '⚛️', level: 85 }
    ]
  },
  {
    icon: Layers,
    title: 'Framework Matrix',
    color: 'from-emerald-400 to-teal-500',
    technologies: [
      { name: 'Next.js', icon: '▲', level: 80 },
      { name: 'Flask', icon: '🌶️', level: 80 },
      { name: 'Tailwind', icon: '💨', level: 85 }
    ]
  },
  {
    icon: Database,
    title: 'Data Vaults',
    color: 'from-teal-400 to-green-500',
    technologies: [
      { name: 'MongoDB', icon: '🍃', level: 85 },
      { name: 'SQL', icon: '🗄️', level: 80 },
      { name: 'Firebase', icon: '🔥', level: 80 }
    ]
  }
]

function TechNode({ tech, isVisible, delay, categoryIndex }: { 
  tech: { name: string; icon: string; level: number }, 
  isVisible: boolean,
  delay: number,
  categoryIndex: number
}) {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 ${
        isVisible ? 'animate-scaleIn' : 'opacity-0 scale-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative">
        {/* Connection Lines
        <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent opacity-50" /> */}
        
        {/* Tech Node */}
        <div className="cyber-glass rounded-full w-24 h-24 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 group-hover:animate-circuitPulse relative overflow-hidden">
          {/* Scanning Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-dataStream opacity-0 group-hover:opacity-100" />
          
          <div className="text-2xl mb-1 relative z-10">{tech.icon}</div>
          <div className="text-white font-bold text-xs text-center relative z-10">{tech.name}</div>
          
          {/* Circular Progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={isVisible ? `${2 * Math.PI * 45 * (1 - tech.level / 100)}` : `${2 * Math.PI * 45}`}
              className="transition-all duration-1500"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="#0099ff" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Level Badge */}
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {tech.level}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCategories(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.3 }
    )

    const cards = sectionRef.current?.querySelectorAll('.tech-category')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [techCategories])

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden circuit-pattern mt-20" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-dataStream" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-dataStream" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text glitch" data-text="System Architecture">System Architecture</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 animate-pulse" />
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 animate-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interconnected technology nodes forming a comprehensive development ecosystem
          </p>
        </div>

        {/* System Architecture Diagram */}
        <div className="max-w-6xl mx-auto mb-20">
          {/* Central Hub */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="cyber-glass rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4 animate-float">
                <div className="text-4xl">🧠</div>
              </div>
              <div className="text-xl font-bold text-white">Core System</div>
              <div className="text-cyan-400 text-sm">Full Stack Developer</div>
              
            
            </div>
          </div>
          
          {/* Tech Categories in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 place-items-center">
              {techCategories.map((category, categoryIndex) => {
                const Icon = category.icon
                const isVisible = visibleCategories.includes(categoryIndex)

                return (
                  <div
                    key={category.title}
                    data-index={categoryIndex}
                    className={`tech-category w-full max-w-md text-center transform transition-all duration-700 ${
                      isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${categoryIndex * 200}ms` }}
                  >
                    {/* Category Header */}
                    <div className="mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto" />
                    </div>

                    {/* Tech Nodes */}
                    <div className="flex flex-wrap justify-center gap-6">
                      {category.technologies.map((tech, techIndex) => (
                        <TechNode
                          key={tech.name}
                          tech={tech}
                          isVisible={isVisible}
                          delay={techIndex * 300}
                          categoryIndex={categoryIndex}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

        </div>

        {/* Career Boot Sequence */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="text-cyan-400">Career</span> Boot Sequence
          </h3>
          
          {/* Terminal Boot Screen */}
          <div className="cyber-glass rounded-xl p-8 font-mono text-sm">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400">CAREER_SYSTEM v3.0 - Boot Sequence</span>
              </div>
            </div>

            <div className="space-y-3 text-green-400">
              {[
                { delay: 0, text: 'Initializing career progression...', status: 'OK' },
                { delay: 500, text: 'Installing Core Programming Languages [2023]...', status: 'LOADED', details: 'C++, Python , Java , problem solving' },
                { delay: 1000, text: 'Configuring Web Development Stack [2024]...', status: 'SUCCESS', details: 'HTML, CSS, JavaScript, React, Next.js' },
                { delay: 1500, text: 'Integrating Backend & Databases [2024]...', status: 'COMPLETE', details: 'Node.js, MongoDB, SQL, Firebase' },
                { delay: 2000, text: 'Exploring Data Structures & Algorithms [2024]...', status: 'ACTIVE', details: 'Striver’s DSA Sheet, LeetCode practice' },
                { delay: 2500, text: 'Launching Projects & Open Source Contributions [2025]...', status: 'IN-PROGRESS', details: 'Portfolio, MediCard, RootVenture' },
                { delay: 3000, text: 'Preparing for Internships & Placements [2026]...', status: 'READY' }
              ]
              .map((item, index) => (
                <div 
                  key={index} 
                  className="animate-fadeInUp opacity-0"
                  style={{ animationDelay: `${item.delay}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{item.text}</span>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      item.status === 'OK' ? 'bg-blue-500/20 text-blue-400' :
                      item.status === 'LOADED' ? 'bg-yellow-500/20 text-yellow-400' :
                      item.status === 'SUCCESS' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'COMPLETE' ? 'bg-purple-500/20 text-purple-400' :
                      item.status === 'ACTIVE' ? 'bg-cyan-500/20 text-cyan-400 animate-pulse' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      [{item.status}]
                    </span>
                  </div>
                  {item.details && (
                    <div className="ml-4 text-gray-400 text-xs mt-1">
                      └─ {item.details}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Command Prompt */}
            <div className="mt-6 pt-4 border-t border-cyan-400/20">
              <div className="flex items-center">
                <span className="text-cyan-400">developer@portfolio:~$</span>
                <span className="ml-2 text-white">status --career</span>
                <span className="ml-2 text-white animate-pulse">|</span>
              </div>
              <div className="mt-2 text-green-400 animate-fadeInUp" style={{ animationDelay: '3500ms', animationFillMode: 'forwards', opacity: 0 }}>
                → System running optimally. Ready for new challenges.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}