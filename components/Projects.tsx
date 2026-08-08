'use client'

import { useState, useEffect, useRef } from 'react'
import { Github, ExternalLink, X, Globe, Terminal, Layers, Cpu, Sparkles, Code2, ArrowUpRight, Star } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  thumbnail: string
  githubUrl: string
  liveUrl?: string
  category: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Chikitsak',
    description:
      'AI-powered emergency healthcare platform that predicts symptom severity and recommends suitable hospitals based on medical urgency and real-time resource availability.',
    longDescription:
      'Chikitsak is an AI-powered emergency healthcare platform that predicts symptom severity and recommends the most suitable hospital based on medical urgency and real-time resource availability. It features dedicated patient and doctor portals, integrating ML models, real-time ICU/bed/doctor data, and travel time for smarter emergency decisions.',
    technologies: ['React', 'TypeScript', 'Flask', 'Python', 'MongoDB', 'HuggingFace'],
    thumbnail:
      'https://images.pexels.com/photos/7088524/pexels-photo-7088524.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Chikitsak',
    liveUrl: 'https://chikitsakpatient.vercel.app/',
    category: 'AI / ML',
    featured: true,
  },
  {
    id: 2,
    title: 'JanConnect',
    description:
      'React Native app for citizens to report civic issues and contractors to bid, manage, and resolve them with real-time tracking.',
    longDescription:
      'JanConnect is a React Native mobile application that enables citizens to report civic issues with real-time location tracking, image uploads, and live status updates. It also provides contractors with a dedicated dashboard to bid on, manage, and resolve reported issues — making civic complaint resolution transparent and efficient.',
    technologies: ['React Native', 'Supabase', 'Cloudinary', 'Expo'],
    thumbnail:
      'https://images.pexels.com/photos/6074935/pexels-photo-6074935.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/JanConnect',
    category: 'Mobile',
    featured: true,
  },
  {
    id: 3,
    title: 'Breathline',
    description:
      'Full-stack medical records platform with role-based dashboards for patients, doctors, and emergencies.',
    longDescription:
      'Breathline is a full-stack medical records platform that enables patients to securely store health records while allowing authorized doctors to instantly access critical information during emergencies. It features role-based authentication, Cloudinary cloud storage, and dedicated dashboards for patients and healthcare professionals.',
    technologies: ['Next.js', 'MongoDB', 'Cloudinary', 'JavaScript'],
    thumbnail:
      'https://images.pexels.com/photos/6129684/pexels-photo-6129684.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Breathline-Project',
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 4,
    title: 'CNN Lung Disease Detector',
    description:
      'A CNN-based AI project that classifies different lung diseases from chest X-ray images using Deep Learning.',
    longDescription:
      'Built using DenseNet121 and transfer learning, this deep learning application classifies chest X-rays into Normal, COVID-19, Tuberculosis, Viral Pneumonia, and Bacterial Pneumonia. The project applies image preprocessing, optimized CNN architectures, and TensorFlow/Keras to assist in early and accurate disease diagnosis.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'DenseNet121', 'CNN'],
    thumbnail:
      'https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Lungs-Disease-Classifier-AI',
    category: 'AI / ML',
  },
  {
    id: 5,
    title: 'RootVenture',
    description:
      'Community-driven platform where users can share startup ideas, receive upvotes, and connect with innovators.',
    longDescription:
      'RootVenture is a community-driven platform where users can share startup ideas, receive upvotes and feedback, discover trending concepts, and connect with people interested in innovative ventures. It helps entrepreneurs showcase ideas, find collaborators, and build teams through a clean and responsive interface.',
    technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    thumbnail:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/RootVenture',
    liveUrl: 'https://root-venture.vercel.app/',
    category: 'Full Stack',
  },
  {
    id: 6,
    title: 'Productactathon',
    description:
      'A hackathon project focused on solving real-world problems through innovative technology.',
    longDescription:
      'Productactathon is a collaborative hackathon project built under strict time constraints. It demonstrates rapid product development, modern UI design, scalable architecture, and innovative problem-solving while integrating multiple technologies into a production-ready prototype.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    thumbnail:
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/IIT_ROORKEE_PRODUCTATHON',
    category: 'Full Stack',
  },
  {
    id: 7,
    title: 'Connectly',
    description:
      'A modern video conferencing platform supporting secure virtual meetings.',
    longDescription:
      'Connectly is a responsive video conferencing application built using React, Next.js, Clerk Authentication, and Stream Video SDK. It enables users to securely create, join, and manage video meetings with a professional user experience.',
    technologies: ['React', 'Next.js', 'Clerk', 'Stream SDK', 'Tailwind CSS'],
    thumbnail:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Connectly',
    liveUrl: 'https://connectly-pi.vercel.app/',
    category: 'Full Stack',
  },
  {
    id: 8,
    title: 'Faktify',
    description:
      'An AI-powered fake news detection and verification platform.',
    longDescription:
      'Faktify combines AI/ML models, Google Fact Check API, and community-driven reporting to analyze news articles and generate credibility scores with detailed explanations. It also includes real-time comparisons, quizzes, and community engagement features.',
    technologies: ['React', 'Flask', 'Node.js', 'MongoDB', 'BERT', 'LLaMA', 'Tailwind CSS'],
    thumbnail:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Faktify',
    category: 'AI / ML',
  },
  {
    id: 9,
    title: 'CYMBOT',
    description:
      'An AI chatbot that provides mental health support and wellness assistance.',
    longDescription:
      'CYMBOT is an intelligent mental health chatbot designed to provide emotional support through interactive conversations. It offers mood tracking, mental wellness guidance, and a user-friendly interface while promoting awareness and accessible healthcare.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MySQL'],
    thumbnail:
      'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/CYMBOT',
    category: 'AI / ML',
  },
  {
    id: 10,
    title: 'Java Social Media App',
    description:
      'A social networking application developed using Java Spring Boot and Firebase.',
    longDescription:
      'This social media application enables students to create profiles, share posts, interact with peers, and securely authenticate using Firebase. Built with Spring Boot, it demonstrates REST APIs, backend development, authentication, and database integration.',
    technologies: ['Java', 'Spring Boot', 'Firebase', 'REST API'],
    thumbnail:
      'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Java-Social-Media',
    category: 'Full Stack',
  },
  {
    id: 11,
    title: 'Google Clone',
    description:
      "A responsive clone of Google's homepage built using Tailwind CSS.",
    longDescription:
      'A pixel-perfect recreation of the Google Search homepage featuring responsive layouts, clean UI components, and Tailwind CSS best practices. This project demonstrates attention to detail, responsive web design, and frontend development skills.',
    technologies: ['HTML', 'CSS', 'Tailwind CSS'],
    thumbnail:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/GoogleClone_TailwindCSS',
    liveUrl: 'https://googleclone-tailwindcss.netlify.app/',
    category: 'Frontend',
  },
]

const categories = ['All', 'AI / ML', 'Full Stack', 'Mobile', 'Frontend']

const categoryColors: Record<string, string> = {
  'AI / ML': 'from-violet-400 to-purple-600',
  'Full Stack': 'from-cyan-400 to-blue-500',
  'Mobile': 'from-emerald-400 to-teal-500',
  'Frontend': 'from-fuchsia-400 to-pink-500',
}

const categoryIcons: Record<string, React.ReactNode> = {
  'AI / ML': <Cpu className="w-3 h-3" />,
  'Full Stack': <Layers className="w-3 h-3" />,
  'Mobile': <Globe className="w-3 h-3" />,
  'Frontend': <Code2 className="w-3 h-3" />,
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setVisibleCards([])
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0')
              setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]))
            }
          })
        },
        { threshold: 0.08 }
      )
      const cards = sectionRef.current?.querySelectorAll('.project-card')
      cards?.forEach((card) => observer.observe(card))
      return () => observer.disconnect()
    }, 50)
    return () => clearTimeout(timer)
  }, [activeCategory])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <section
      id="projects"
      className="py-16 bg-gray-900 relative overflow-hidden mt-2"
      ref={sectionRef}
    >
      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-dataStream" />
      <div
        className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-dataStream"
        style={{ animationDelay: '1.2s' }}
      />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-2/3 left-1/2 -translate-x-1/2 w-96 h-40 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full cyber-glass text-purple-400 text-xs font-mono mb-3 animate-pulse">
            <Terminal className="w-3 h-3" />
            <span>PROJECTS // BUILD_LOG</span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl font-bold mb-2.5 transition-all duration-1000 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="gradient-text glitch" data-text="Featured Projects">
              Featured Projects
            </span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mx-auto mb-3 animate-pulse" />

          <p
            className={`text-xs sm:text-sm text-gray-400 max-w-lg mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}
          >
            A showcase of my recent work — from AI systems to full-stack platforms.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="cyber-glass px-4 py-2 rounded-xl border border-purple-400/20 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-white font-bold font-mono text-xs">{projects.length}</span>
            <span className="text-gray-400 text-xs font-mono">Projects</span>
          </div>
          <div className="cyber-glass px-4 py-2 rounded-xl border border-cyan-400/20 flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-mono">{projects.filter(p => p.featured).length} Featured</span>
          </div>
          <div className="cyber-glass px-4 py-2 rounded-xl border border-fuchsia-400/20 flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-fuchsia-400" />
            <span className="text-gray-400 text-xs font-mono">{categories.length - 1} Categories</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold border transition-all duration-300 flex items-center gap-1.5 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.2)]'
                  : 'cyber-glass border-gray-600/40 text-gray-400 hover:border-cyan-400/40 hover:text-cyan-300'
              }`}
            >
              {cat !== 'All' && categoryIcons[cat]}
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, index) => {
            const color = categoryColors[project.category] || 'from-cyan-400 to-blue-500'
            const cardVisible = visibleCards.includes(index)

            return (
              <div
                key={`${project.id}-${activeCategory}`}
                data-index={index}
                className={`project-card group cursor-pointer transition-all duration-500 ${
                  cardVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${(index % 6) * 80}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative cyber-glass rounded-xl overflow-hidden border border-cyan-400/15 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] flex flex-col h-full bg-gray-900/80">

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-[9px] font-bold text-gray-950 font-mono flex items-center gap-0.5 shadow">
                      <Star className="w-2 h-2" />
                      FEATURED
                    </div>
                  )}

                  {/* Category badge */}
                  <div className={`absolute top-2 right-2 z-20 px-2 py-0.5 rounded-full text-[9px] font-bold bg-gradient-to-r ${color} text-white shadow font-mono flex items-center gap-1`}>
                    {categoryIcons[project.category]}
                    {project.category}
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-950">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-70" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-cyan-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-950/80 border border-cyan-400/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all text-[11px] font-mono font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/90 text-gray-950 hover:bg-cyan-400 transition-all text-[11px] font-mono font-bold shadow-[0_0_12px_rgba(0,255,255,0.4)]"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-1.5 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-mono leading-relaxed line-clamp-2 mb-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="pt-3 border-t border-cyan-400/10">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md cyber-glass border border-cyan-400/20 text-cyan-300/80 text-[9px] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md cyber-glass border border-gray-600/30 text-gray-500 text-[9px] font-mono">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom color bar */}
                  <div className={`h-0.5 w-full bg-gradient-to-r ${color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-mono text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-gray-900 border border-cyan-400/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-[0_0_60px_rgba(0,255,255,0.15)] flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="px-4 py-3 border-b border-cyan-400/20 flex items-center justify-between bg-gray-950 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg cyber-glass border border-cyan-400/30 text-cyan-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">{selectedProject.title}</h3>
                  <p className="text-[11px] text-gray-400 font-mono">{selectedProject.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg cyber-glass border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 font-bold text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  GitHub
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg cyber-glass border border-cyan-400/30 text-gray-400 hover:text-white hover:border-cyan-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="relative h-52 sm:h-64 bg-gray-950 shrink-0 overflow-hidden">
              <Image
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className={`absolute bottom-3 left-4 px-3 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${categoryColors[selectedProject.category] || 'from-cyan-400 to-blue-500'} text-white font-mono shadow flex items-center gap-1.5`}>
                {categoryIcons[selectedProject.category]}
                {selectedProject.category}
              </div>
            </div>

            {/* Modal body — scrollable */}
            <div className="overflow-y-auto flex-1">
              <div className="p-5">
                <p className="text-sm text-gray-300 font-mono leading-relaxed mb-5">
                  {selectedProject.longDescription}
                </p>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <h4 className="text-xs font-bold text-cyan-400 font-mono tracking-widest uppercase">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg cyber-glass border border-cyan-400/25 text-cyan-300 text-[11px] font-mono hover:border-cyan-400/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="px-5 py-3 border-t border-cyan-400/20 bg-gray-950/80 flex items-center justify-between shrink-0">
              <span className="text-[10px] text-gray-500 font-mono">Click outside or press ESC to close</span>
              <div className="flex gap-2">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cyber-glass border border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all text-[11px] font-mono"
                >
                  <Github className="w-3 h-3" />
                  View Code
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold transition-all text-[11px] font-mono"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
