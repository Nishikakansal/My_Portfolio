'use client'

import { useEffect, useRef, useState } from 'react'
import { Terminal, Cpu, Zap, Shield, Brain, Rocket } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('story')
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const tabs = [
    { id: 'story', label: 'Origin Story', icon: Terminal },
    { id: 'mission', label: 'Mission', icon: Rocket },
    { id: 'values', label: 'Core Values', icon: Shield }
  ]

  const achievements = [
    { icon: Cpu, title: 'System Architecture', desc: 'Designed scalable microservices handling 1M+ requests/day' },
    { icon: Brain, title: 'AI Integration', desc: 'Implemented ML models improving user experience by 40%' },
    { icon: Zap, title: 'Performance Optimization', desc: 'Reduced load times by 60% through advanced caching strategies' },
    { icon: Shield, title: 'Security Expert', desc: 'Implemented zero-trust security architecture for enterprise clients' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden mt-20" ref={sectionRef}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-7 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            <span className="gradient-text glitch" data-text="System Analysis">System Analysis</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 animate-pulse" />
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            Decoding the digital matrix, one algorithm at a time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Terminal */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="cyber-glass rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-900 px-4 py-3 flex items-center border-b border-cyan-400/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-mono">developer@portfolio:~$</span>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="bg-gray-800 px-4 py-2 flex space-x-1 border-b border-cyan-400/20">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-3 py-2 rounded text-sm font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <div className="p-6 font-mono text-sm">
                {activeTab === 'story' && (
                  <div className="space-y-4 animate-fadeInUp">
                    <div className="text-green-400">
                      <span className="text-cyan-400">$</span> cat origin_story.txt
                    </div>
                    <div className="text-gray-300 leading-relaxed">
                      <p className="mb-4">
                        <span className="text-yellow-400">Initializing developer profile...</span>
                      </p>
                      <p className="mb-4">
                        Started my journey in tech with curiosity for how ideas transform into digital experiences. 
                        From my first line of code to designing intuitive UIs and experimenting with AI models, 
                        every project has been a step forward in blending creativity with technology.  
                      </p>
                      <p>I love working with modern frameworks like Next.js and React.js to bring ideas to life, 
                      building fast, responsive, and scalable web applications.  </p>

                      <p className="mb-4 mt-4">
                        <span className="text-cyan-400">Specialization:</span>  Frontend Development, UI/UX design, and AI/ML integration.
                      </p>
                      <p className="text-green-400">
                        <span className="text-cyan-400">Status:</span> Currently building user-centric web apps while exploring advanced machine learning models.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'mission' && (
                  <div className="space-y-4 animate-fadeInUp">
                    <div className="text-green-400">
                      <span className="text-cyan-400">$</span> execute mission_statement.py
                    </div>
                    <div className="text-gray-300 leading-relaxed">
                      <p className="mb-4">
                        <span className="text-yellow-400">Mission Protocol Activated...</span>
                      </p>
                      <p className="mb-4">
                        To craft meaningful digital experiences by combining clean frontend development, creative UI/UX design, and smart AI/ML integration.
                        I believe technology should not just function, but inspire and empower users.
                      </p>
                      <p className="mb-4">
                        <span className="text-cyan-400">Primary Objectives:</span>
                      </p>
                      <ul className="list-none space-y-2 ml-4">
                        <li><span className="text-green-400">✓</span> Build responsive and engaging web applications with React.js & Next.js</li>
                        <li><span className="text-green-400">✓</span>Design user-friendly and accessible interfaces with a focus on UI/UX</li>
                        <li><span className="text-green-400">✓</span> Explore AI/ML to integrate features into real-world applications</li>
                        <li><span className="text-green-400">✓</span> Continuously learn and share knowledge with the developer community</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div className="space-y-4 animate-fadeInUp">
                    <div className="text-green-400">
                      <span className="text-cyan-400">$</span> grep -r "core_values" ./personality/
                    </div>
                    <div className="text-gray-300 leading-relaxed">
                      <p className="mb-4">
                        <span className="text-yellow-400">Scanning value system...</span>
                      </p>
                      <div className="space-y-3">
                        <div>
                          <span className="text-cyan-400">Innovation:</span> Always seeking new ways 
                          to solve old problems
                        </div>
                        <div>
                          <span className="text-purple-400">Quality:</span> Code is poetry; every 
                          line should have purpose
                        </div>
                        <div>
                          <span className="text-green-400">Collaboration:</span> The best solutions 
                          emerge from diverse minds
                        </div>
                        <div>
                          <span className="text-yellow-400">Continuous Learning:</span> In tech, 
                          standing still means falling behind
                        </div>
                        <div>
                          <span className="text-red-400">User-Centric:</span> Technology serves 
                          people, not the other way around
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="text-cyan-400">System</span> Capabilities
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={index}
                    className="cyber-glass rounded-lg p-6 hover:scale-105 transition-all duration-300 group holographic"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:animate-circuitPulse">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}