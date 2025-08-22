'use client'

import { useState, useEffect, useRef } from 'react'
import { Github, ExternalLink, X, Globe } from 'lucide-react'
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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Connectly',
    description: 'Video conferencing Application with React, Node.js, and Stream integration',
    longDescription:
      'Connectly is a modern video conferencing app built with React, Next.js, and Tailwind CSS, secured by Clerk authentication. It enables users to create and join meetings with a clean, responsive, and reliable interface for smooth virtual collaboration.',
    technologies: ['React', 'Next.js', 'Node.js', 'clerk auth', 'Stream', 'Tailwind CSS'],
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Connectly',
    liveUrl: 'https://your-ecommerce-demo.vercel.app',
  },
  {
    id: 2,
    title: 'Faktify',
    description: 'A fake news detection platform that analyzes news content, compares it with trusted sources',
    longDescription:
      'Faktify is a full-stack web platform built with React, Node.js, and Flask to combat misinformation by detecting and verifying fake news in real time. The platform integrates AI/ML models along with the Google Fact Check API to generate credibility scores with reasoning, helping users quickly assess the trustworthiness of news articles.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Redux'],
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/taskmanager',
    liveUrl: 'https://your-taskmanager-demo.vercel.app',
  },
  {
    id: 3,
    title: 'RootVenture',
    description: 'A starup idea sharing platform',
    longDescription:
      'An elegant weather dashboard that provides detailed weather information including current conditions, hourly and weekly forecasts, weather maps, and location-based alerts. Features a clean, responsive design with beautiful animations.',
    technologies: ['next.js', 'react.js', 'Tailwind', 'Mongodb'],
    thumbnail: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/RootVenture',
    liveUrl: 'https://your-weather-demo.vercel.app',
  },
    {
    id: 5,
    title: 'Google Clone',
    description: 'A simple Google search page clone built with Tailwind CSS.',
    longDescription:
      'Developed a responsive Google homepage clone using Tailwind CSS. The project replicates the clean UI of Google’s search engine with attention to design details, responsiveness, and user-friendly layout. Hosted on Netlify for easy access.',
    technologies: ['HTML', 'CSS', 'Tailwind CSS'],
    thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/GoogleClone_TailwindCSS',
    liveUrl: 'https://googleclone-tailwindcss.netlify.app/',
  },

  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with modern animations',
    longDescription:
      'A stunning portfolio website built with modern web technologies featuring smooth animations, responsive design, dark mode toggle, and optimized performance. Showcases projects with detailed descriptions and interactive elements.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/My_Portfolio',
    liveUrl: 'https://my-portfolio-nishika-kansal.vercel.app/',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleProjects((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.project-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            A showcase of my recent work, from web applications to mobile solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index)

            return (
              <div
                key={project.id}
                data-index={index}
                className={`project-card group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.githubUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
