'use client'

import { useState, useEffect, useRef } from 'react'
import { Github, ExternalLink, X, Code, Globe } from 'lucide-react'
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
  category: 'web' | 'mobile' | 'fullstack'
}

// Sample projects - you can replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with React, Node.js, and Stripe integration',
    longDescription: 'A full-featured e-commerce platform built with React and Next.js on the frontend, Node.js and Express on the backend. Features include user authentication, product management, shopping cart, payment processing with Stripe, order tracking, and admin dashboard.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://your-ecommerce-demo.vercel.app',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    longDescription: 'A comprehensive task management application featuring real-time collaboration, project boards, team management, deadline tracking, and progress analytics. Built with modern technologies for optimal performance.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Redux'],
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/taskmanager',
    liveUrl: 'https://your-taskmanager-demo.vercel.app',
    category: 'web'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts',
    longDescription: 'An elegant weather dashboard that provides detailed weather information including current conditions, hourly and weekly forecasts, weather maps, and location-based alerts. Features a clean, responsive design with beautiful animations.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS'],
    thumbnail: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-demo.vercel.app',
    category: 'web'
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Full-stack social media platform with real-time messaging',
    longDescription: 'A complete social media platform featuring user profiles, posts, comments, likes, real-time messaging, stories, and notification system. Includes advanced features like content moderation and analytics.',
    technologies: ['React Native', 'Node.js', 'GraphQL', 'MongoDB', 'AWS'],
    thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/social-media',
    category: 'mobile'
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with interactive charts',
    longDescription: 'A powerful analytics dashboard that transforms complex data into beautiful, interactive visualizations. Features real-time data updates, customizable charts, export functionality, and responsive design.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/analytics-dashboard',
    liveUrl: 'https://your-analytics-demo.vercel.app',
    category: 'fullstack'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with modern animations',
    longDescription: 'A stunning portfolio website built with modern web technologies featuring smooth animations, responsive design, dark mode toggle, and optimized performance. Showcases projects with detailed descriptions and interactive elements.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio.vercel.app',
    category: 'web'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleProjects(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.project-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [filteredProjects])

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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'web', 'mobile', 'fullstack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
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
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
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
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
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