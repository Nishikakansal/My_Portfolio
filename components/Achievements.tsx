'use client'

import { useState, useEffect, useRef } from 'react'
import {
  GraduationCap,
  Trophy,
  Code,
  ShieldCheck,
  Sparkles,
  Award
} from 'lucide-react'

interface Milestone {
  id: number
  number: string
  title: string
  issuer: string
  badge: string
  color: string
  icon: 'academic' | 'trophy' | 'code' | 'shield'
}

const milestones: Milestone[] = [
  {
    id: 1,
    number: '01',
    title: '9.22 CGPA',
    issuer: 'Bennett University (B.Tech CSE)',
    badge: 'Academics',
    color: 'from-emerald-400 to-teal-500',
    icon: 'academic'
  },
  {
    id: 2,
    number: '02',
    title: 'Top 10 National Finalist',
    issuer: 'Productathon @ IIT Roorkee',
    badge: 'National Honor',
    color: 'from-amber-400 to-orange-500',
    icon: 'trophy'
  },
  {
    id: 3,
    number: '03',
    title: 'CodeChef Member',
    issuer: 'Design Team (1st Year)',
    badge: 'Design & Tech',
    color: 'from-cyan-400 to-blue-500',
    icon: 'code'
  },
  {
    id: 4,
    number: '04',
    title: 'Dean Career Cloud (DCC)',
    issuer: 'Senior Executive (Alumni & Relations)',
    badge: 'Leadership',
    color: 'from-purple-400 to-pink-500',
    icon: 'shield'
  }
]

export default function Achievements() {
  const [activeId, setActiveId] = useState<number>(1)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const renderIcon = (iconType: string, className: string = 'w-5 h-5') => {
    switch (iconType) {
      case 'academic':
        return <GraduationCap className={className} />
      case 'trophy':
        return <Trophy className={className} />
      case 'code':
        return <Code className={className} />
      case 'shield':
        return <ShieldCheck className={className} />
      default:
        return <Award className={className} />
    }
  }

  return (
    <section
      id="achievements"
      className="py-14 bg-gray-900 relative overflow-hidden mt-10"
      ref={sectionRef}
    >
      {/* Accent laser lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent animate-dataStream" />
      <div
        className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-dataStream"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Cyber Grid background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,191,0,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/3 -left-28 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-1/3 -right-28 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full cyber-glass text-amber-400 text-xs font-mono mb-3 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>HONORS // KEY_MILESTONES</span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl font-bold mb-2.5 transition-all duration-1000 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="gradient-text glitch" data-text="Achievements & Honors">
              Achievements &amp; Honors
            </span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 mx-auto mb-2 animate-pulse" />
        </div>

        {/* WAVY MOTION CONNECTOR LINE */}
        <div className="relative mb-5 hidden md:block px-8">
          <svg
            className="w-full h-16 overflow-visible"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="motion-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="33%" stopColor="#fbbf24" />
                <stop offset="66%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>

              <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Curvy Wavy Connecting Line */}
            <path
              d="M 50 30 Q 175 5, 300 30 T 550 30 T 800 30 T 950 30"
              fill="none"
              stroke="url(#motion-wave-gradient)"
              strokeWidth="3.5"
              filter="url(#wave-glow)"
              opacity="0.85"
            />

            {/* Floating Nodes along the curve */}
            {milestones.map((m, idx) => {
              const cx = 125 + idx * 250
              const cy = idx % 2 === 0 ? 18 : 42
              const isActive = m.id === activeId

              return (
                <g key={m.id} className="cursor-pointer" onClick={() => setActiveId(m.id)}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 14 : 9}
                    fill="none"
                    stroke={isActive ? '#fbbf24' : '#22d3ee'}
                    strokeWidth="2"
                    opacity={isActive ? '0.8' : '0.4'}
                    className={isActive ? 'animate-ping' : ''}
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 8 : 5}
                    fill={isActive ? '#fbbf24' : '#0f172a'}
                    stroke={isActive ? '#ffffff' : '#22d3ee'}
                    strokeWidth={isActive ? '3' : '2.5'}
                    className="transition-all duration-300 hover:r-8"
                  />
                </g>
              )
            })}
          </svg>
        </div>

        {/* MOTION FLOATING CAPSULES GRID (4 Minimal Nodes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {milestones.map((item, idx) => {
            const isActive = item.id === activeId
            const floatDelays = ['0s', '0.6s', '1.2s', '1.8s']

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`group cursor-pointer relative transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Floating Motion Container */}
                <div
                  className="animate-float"
                  style={{ animationDelay: floatDelays[idx % floatDelays.length], animationDuration: '4s' }}
                >
                  {/* Organic Minimal Capsule Card */}
                  <div
                    className={`relative cyber-glass rounded-3xl p-5 border transition-all duration-500 flex flex-col justify-between min-h-[175px] bg-gray-900/90 overflow-hidden ${
                      isActive
                        ? 'border-amber-400/80 shadow-[0_0_25px_rgba(255,191,0,0.25)] ring-1 ring-amber-400/50 scale-[1.02]'
                        : 'border-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_18px_rgba(0,255,255,0.15)]'
                    }`}
                  >
                    {/* Top Row: Index + Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-extrabold text-gray-500">
                        {item.number} //
                      </span>

                      <div className={`p-2 rounded-xl bg-gradient-to-r ${item.color} text-white shadow group-hover:scale-110 transition-transform duration-300`}>
                        {renderIcon(item.icon, 'w-4 h-4')}
                      </div>
                    </div>

                    {/* Middle: Title & Badge */}
                    <div className="my-auto">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-gradient-to-r ${item.color} text-white shadow mb-1.5`}>
                        {item.badge}
                      </span>

                      <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-[11px] text-cyan-400/90 font-mono mt-1 leading-relaxed">
                        {item.issuer}
                      </p>
                    </div>

                    {/* Glowing bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
