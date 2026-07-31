'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Sparkles,
  Shield,
  FileText
} from 'lucide-react'

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  credentialId?: string
  image?: string
  link?: string
  color: string
  badge: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Certified',
    link: '/certifications/AWS Certified Cloud Practitioner certificate.pdf',
    color: 'from-amber-400 to-orange-500',
    badge: 'Cloud'
  },
  {
    id: 2,
    title: 'Smart India Hackathon (SIH)',
    issuer: 'Ministry of Education, Govt. of India',
    date: 'Participant',
    link: '/certifications/SIH_Nishika.pdf',
    color: 'from-cyan-400 to-blue-500',
    badge: 'National Hackathon'
  },
  {
    id: 3,
    title: 'LNMHACKS 7.0 Hackathon',
    issuer: 'LNMIIT',
    date: 'Participant',
    link: '/certifications/LNMHACKS_7.0_Certificate.pdf',
    color: 'from-purple-400 to-pink-500',
    badge: 'Hackathon'
  },
  {
    id: 4,
    title: 'TechArena Competition',
    issuer: 'TechArena',
    date: 'Certificate of Excellence',
    link: '/certifications/techarena_certificate-207.pdf',
    color: 'from-emerald-400 to-teal-500',
    badge: 'Competition'
  },
  {
    id: 5,
    title: 'Women Who Master',
    issuer: 'Tech Community Program',
    date: 'Certificate of Recognition',
    link: '/certifications/women who master certificate.pdf',
    color: 'from-rose-400 to-pink-600',
    badge: 'Recognition'
  }
]

function CertCard({ cert, index, isVisible }: { cert: Certification; index: number; isVisible: boolean }) {
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative cyber-glass rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] flex flex-col justify-between ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative Graphic Header */}
      <div className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden flex items-center justify-center p-6 text-center">
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-15 group-hover:opacity-30 transition-opacity duration-500`} />
        
        {/* Glow graphic */}
        <div className="w-14 h-14 rounded-2xl cyber-glass border border-cyan-400/30 flex items-center justify-center mb-2 z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Award className="w-7 h-7 text-cyan-400" />
        </div>
        
        <span className="text-xs font-bold text-white z-10 font-mono tracking-wide line-clamp-2">
          {cert.title}
        </span>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${cert.color} text-white shadow-lg z-10`}>
          {cert.badge}
        </div>

        {/* Open Link Icon */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full cyber-glass border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-all z-10">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
              {cert.title}
            </h3>
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-mono mb-1">
            <Shield className="w-3 h-3 text-purple-400" />
            <span>{cert.issuer}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-mono mb-3">
            <Calendar className="w-3 h-3 text-cyan-400/70" />
            <span>{cert.date}</span>
          </div>
        </div>

        {/* View Document Button Indicator */}
        <div className="pt-2 border-t border-cyan-400/10 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
          <span className="flex items-center gap-1.5 text-[11px]">
            <FileText className="w-3.5 h-3.5" /> View Certificate PDF
          </span>
          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Bottom gradient accent line */}
      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </a>
  )
}

export default function Certifications() {
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

  return (
    <section
      id="skills"
      className="py-20 bg-gray-800 relative overflow-hidden mt-16"
      ref={sectionRef}
    >
      {/* Animated top/bottom accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-dataStream" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-dataStream" style={{ animationDelay: '1s' }} />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full cyber-glass text-cyan-400 text-xs font-mono mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREDENTIALS // SKILL_VERIFICATION</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold mb-3 transition-all duration-1000 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="gradient-text glitch" data-text="Certifications">
              Certifications
            </span>
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mx-auto mb-4 animate-pulse" />

          <p
            className={`text-sm sm:text-base text-gray-300 max-w-xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}
          >
            Verified credentials and hackathon/competition achievements.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="cyber-glass px-5 py-3 rounded-xl border border-cyan-400/20 flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-bold font-mono text-sm">{certifications.length}</span>
            <span className="text-gray-400 text-xs font-mono">Certificates</span>
          </div>
          <div className="cyber-glass px-5 py-3 rounded-xl border border-purple-400/20 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-xs font-mono">Verified Credentials</span>
          </div>
          <div className="cyber-glass px-5 py-3 rounded-xl border border-yellow-400/20 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-gray-400 text-xs font-mono">Hackathons & Programs</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} isVisible={isVisible} />
          ))}
        </div>

      </div>
    </section>
  )
}
