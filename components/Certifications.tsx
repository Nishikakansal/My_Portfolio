'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Sparkles,
  Shield,
  FileText,
  Maximize2,
  X
} from 'lucide-react'

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  link: string
  color: string
  badge: string
  description?: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Certified',
    image: '/certifications/aws_certified_cloud_practitioner_certificate.png',
    link: '/certifications/AWS Certified Cloud Practitioner certificate.pdf',
    color: 'from-amber-400 to-orange-500',
    badge: 'Cloud',
    description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.'
  },
  {
    id: 2,
    title: 'Smart India Hackathon',
    issuer: 'Ministry of Education, India',
    date: 'National Participant',
    image: '/certifications/sih_nishika.png',
    link: '/certifications/SIH_Nishika.pdf',
    color: 'from-cyan-400 to-blue-500',
    badge: 'Hackathon',
    description: 'Selected participant in India\'s premier nationwide tech hackathon solving real-world government challenges.'
  },
  {
    id: 3,
    title: 'LNMHACKS 7.0',
    issuer: 'LNMIIT Jaipur',
    date: 'Participant',
    image: '/certifications/lnmhacks_7_0_certificate.png',
    link: '/certifications/LNMHACKS_7.0_Certificate.pdf',
    color: 'from-purple-400 to-pink-500',
    badge: 'Hackathon',
    description: 'Built innovative software solution within 36-hour intense hackathon competition.'
  },
  {
    id: 4,
    title: 'TechArena Competition',
    issuer: 'TechArena',
    date: 'Excellence Certificate',
    image: '/certifications/techarena_certificate-207.png',
    link: '/certifications/techarena_certificate-207.pdf',
    color: 'from-emerald-400 to-teal-500',
    badge: 'Competition',
    description: 'Recognized for technical excellence in competitive coding and technology problem-solving.'
  },
  {
    id: 5,
    title: 'Women Who Master',
    issuer: 'Tech Community Program',
    date: 'Recognition',
    image: '/certifications/women_who_master_certificate.png',
    link: '/certifications/women who master certificate.pdf',
    color: 'from-rose-400 to-pink-600',
    badge: 'Recognition',
    description: 'Recognized for leadership, technical initiative, and excellence in technology community.'
  },
  {
    id: 6,
    title: 'Data Forge',
    issuer: 'Data Forge Hackathon',
    date: 'Achievement',
    image: '/certifications/data_forge.png',
    link: '/certifications/DATA FORGE.pdf',
    color: 'from-indigo-400 to-cyan-500',
    badge: 'Data & AI',
    description: 'Demonstrated mastery in data analysis, data engineering, and predictive modeling.'
  },
  {
    id: 7,
    title: 'Mind The Product',
    issuer: 'Mind The Product',
    date: 'Product Strategy',
    image: '/certifications/mind_the_product.png',
    link: '/certifications/MIND THE PRODUCT.pdf',
    color: 'from-blue-400 to-indigo-600',
    badge: 'Product',
    description: 'Product management, user-centric product design, and agile development frameworks.'
  },
  {
    id: 8,
    title: 'Machine Learning',
    issuer: 'DeepLearning.AI / Coursera',
    date: 'Specialization',
    image: '/certifications/machine_learning.png',
    link: '/certifications/Machine_Learning.pdf',
    color: 'from-violet-400 to-purple-600',
    badge: 'ML / AI',
    description: 'Supervised learning, deep neural networks, model optimization, and deployment.'
  },
  {
    id: 9,
    title: 'OpenAI Generative AI',
    issuer: 'OpenAI',
    date: 'Generative AI Cert',
    image: '/certifications/openai_generative_certification.png',
    link: '/certifications/OpenAI Generative_Certification.pdf',
    color: 'from-emerald-400 to-lime-500',
    badge: 'Gen AI',
    description: 'Building generative AI systems, LLM fine-tuning, embeddings, and API integration.'
  },
  {
    id: 10,
    title: 'Prompt Engineering',
    issuer: 'AI Research Program',
    date: 'Advanced Certification',
    image: '/certifications/prompt_engineering_certification.png',
    link: '/certifications/Prompt Engineering_Certification.pdf',
    color: 'from-fuchsia-400 to-rose-500',
    badge: 'Prompt Eng',
    description: 'Advanced prompt techniques, Few-Shot, Chain-of-Thought, and LLM optimization.'
  },
  {
    id: 11,
    title: 'IMS Certification',
    issuer: 'IMS Institute',
    date: 'Certified',
    image: '/certifications/ims_certification.png',
    link: '/certifications/IMS_Certification.pdf',
    color: 'from-sky-400 to-blue-600',
    badge: 'Management',
    description: 'Certified in integrated management systems, quality assurance, and organizational excellence.'
  },
  {
    id: 12,
    title: 'NLP Skill Badge',
    issuer: 'Google Cloud',
    date: 'Skill Badge',
    image: '/certifications/nlp_skill_badge.png',
    link: '/certifications/AnalyzeSentimentwithNaturalLanguageAPISkillBadge.pdf',
    color: 'from-green-400 to-teal-600',
    badge: 'Google Cloud',
    description: 'Analyzed sentiment with Google Cloud Natural Language API — entity, syntax, and sentiment analysis at scale.'
  }
]

// Seamless infinite marquee loop
const allCerts = [...certifications, ...certifications]

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

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
      className="py-16 bg-gray-900 relative overflow-hidden mt-12"
      ref={sectionRef}
    >
      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-dataStream" />
      <div
        className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-dataStream"
        style={{ animationDelay: '1s' }}
      />

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
      <div className="absolute top-1/3 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-1/3 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* ─── Header ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full cyber-glass text-cyan-400 text-xs font-mono mb-3 animate-pulse">
            <Sparkles className="w-3 h-3" />
            <span>CREDENTIALS // VERIFIED_SKILLS</span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl font-bold mb-2.5 transition-all duration-1000 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="gradient-text glitch" data-text="Certifications & Honors">
              Certifications &amp; Honors
            </span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mx-auto mb-3 animate-pulse" />

          <p
            className={`text-xs sm:text-sm text-gray-400 max-w-lg mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}
          >
            Hover to pause · Click any card to preview certificate image
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="cyber-glass px-4 py-2 rounded-xl border border-cyan-400/20 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white font-bold font-mono text-xs">{certifications.length}</span>
            <span className="text-gray-400 text-xs font-mono">Certificates</span>
          </div>
          <div className="cyber-glass px-4 py-2 rounded-xl border border-purple-400/20 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
            <span className="text-green-400 text-xs font-mono">100% Verified</span>
          </div>
          <div className="cyber-glass px-4 py-2 rounded-xl border border-yellow-400/20 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span className="text-gray-400 text-xs font-mono">Hackathons &amp; Programs</span>
          </div>
        </div>
      </div>

      {/* ─── Marquee / Ticker Slider ─────────────────────────────── */}
      {/* Fade masks on edges */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-900 to-transparent" />

        {/* Ticker track — outer clip */}
        <div className="overflow-hidden">
          {/* Inner moving track */}
          <div
            ref={trackRef}
            className={`flex gap-4 py-3 animate-marquee ${isPaused ? '[animation-play-state:paused]' : ''}`}
            style={{
              width: 'max-content',
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allCerts.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="shrink-0 w-[230px] sm:w-[260px] cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div
                  className={`group relative cyber-glass rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] flex flex-col bg-gray-900/90 h-full ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index % 5) * 80}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[3/2] bg-gray-950 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="260px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      priority={false}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-cyan-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="p-2 rounded-full bg-cyan-500 text-gray-950 flex items-center gap-1 shadow-[0_0_16px_rgba(0,255,255,0.7)] scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4" />
                        <span className="text-[10px] font-bold font-mono pr-1">Preview</span>
                      </div>
                    </div>
                    {/* Badge */}
                    <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold bg-gradient-to-r ${cert.color} text-white shadow z-10 font-mono tracking-wide`}>
                      {cert.badge}
                    </div>
                    {/* Verified pill */}
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-full cyber-glass border border-cyan-400/30 flex items-center gap-0.5 text-[9px] text-cyan-300 font-mono z-10">
                      <Shield className="w-2.5 h-2.5 text-cyan-400" />
                      <span>VERIFIED</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-1 line-clamp-1">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-mono mb-0.5">
                        <Shield className="w-2.5 h-2.5 text-purple-400 shrink-0" />
                        <span className="truncate">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 font-mono">
                        <Calendar className="w-2.5 h-2.5 text-cyan-400/70 shrink-0" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-2 mt-2 border-t border-cyan-400/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-0.5">
                        <Maximize2 className="w-2.5 h-2.5" />
                        Preview
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-1 rounded-md cyber-glass border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all text-[10px] font-mono flex items-center gap-1"
                      >
                        <FileText className="w-2.5 h-2.5" />
                        PDF
                        <ExternalLink className="w-2 h-2" />
                      </a>
                    </div>
                  </div>

                  {/* Bottom color bar */}
                  <div className={`h-0.5 w-full bg-gradient-to-r ${cert.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Lightbox Modal ──────────────────────────────────────── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-gray-900 border border-cyan-400/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.2)] flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="px-4 py-3 border-b border-cyan-400/20 flex items-center justify-between bg-gray-950">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg cyber-glass border border-cyan-400/30 text-cyan-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">{selectedCert.title}</h3>
                  <p className="text-[11px] text-gray-400 font-mono">{selectedCert.issuer} · {selectedCert.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3 h-3" />
                  Open PDF
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg cyber-glass border border-cyan-400/30 text-gray-400 hover:text-white hover:border-cyan-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Certificate image */}
            <div className="relative flex-1 bg-gray-950 p-4 flex items-center justify-center min-h-[280px] sm:min-h-[420px]">
              <div className="relative w-full h-[260px] sm:h-[420px]">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal footer */}
            {selectedCert.description && (
              <div className="px-4 py-3 border-t border-cyan-400/20 bg-gray-900/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <p className="text-[11px] text-gray-300 max-w-2xl font-mono">{selectedCert.description}</p>
                <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${selectedCert.color} text-white font-mono shrink-0`}>
                  {selectedCert.badge}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
