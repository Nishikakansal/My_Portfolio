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
    title: 'Chikitsak',
    description:
      'CHIKITSAK is an AI-powered emergency hospital recommendation system that helps users find the most suitable hospital based on their medical condition.',
    longDescription:
      'CHIKITSAK is a smart healthcare application designed to assist patients during medical emergencies. It uses AI to predict the severity of symptoms and recommends the most appropriate hospital instead of just the nearest one by considering real-time factors like ICU, beds, doctors, and travel time etc.',
    technologies: ['Next.js', 'React', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    thumbnail:
      'https://images.pexels.com/photos/7088524/pexels-photo-7088524.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Chikitsak',
    liveUrl: 'https://your-chikitsak-demo.vercel.app',
  },

  {
    id: 2,
    title: 'JanConnect',
    description:
      'A civic issue reporting platform connecting citizens with municipal authorities.',
    longDescription:
      'JanConnect enables citizens to report civic issues using real-time location tracking, image uploads, and live status updates. The application also provides a contractor dashboard for managing tenders and assigned issues, making the complaint resolution process transparent and efficient.',
    technologies: ['React Native', 'Supabase', 'Cloudinary', 'Expo'],
    thumbnail:
      'https://images.pexels.com/photos/6074935/pexels-photo-6074935.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/JanConnect',
    liveUrl: 'https://janconnect-demo.vercel.app',
  },

  {
    id: 3,
    title: 'Breathline',
    description:
      'A centralized healthcare platform for secure medical record management and emergency access.',
    longDescription:
      'Breathline enables patients to securely store medical records while allowing authorized doctors to instantly access critical information during emergencies. It features role-based authentication, cloud storage, and dashboards for patients and healthcare professionals.',
    technologies: ['Next.js', 'MongoDB', 'Cloudinary', 'Tailwind CSS'],
    thumbnail:
      'https://images.pexels.com/photos/6129684/pexels-photo-6129684.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Breathline',
    liveUrl: 'https://breathline-project-showcase.vercel.app/',
  },

  {
    id: 4,
    title: 'CNN-based Lung Disease Detector',
    description:
      'An AI-powered application that detects lung diseases from chest X-ray images.',
    longDescription:
      'Built using DenseNet121, this deep learning application classifies chest X-rays into Normal, COVID-19, Tuberculosis, Viral Pneumonia, and Bacterial Pneumonia. The project applies image preprocessing, transfer learning, and optimized CNN architectures to assist in early disease diagnosis.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'DenseNet121', 'CNN'],
    thumbnail:
      'https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Lung-Disease-Detector',
    liveUrl: 'https://your-lung-detector-demo.vercel.app',
  },

  {
    id: 5,
    title: 'RootVenture',
    description:
      'A startup collaboration platform for sharing innovative business ideas and finding team members.',
    longDescription:
      'RootVenture helps entrepreneurs showcase startup ideas, discover collaborators, and build teams. Users can publish ideas, browse innovations, connect with like-minded developers, and collaborate on projects through a clean and responsive interface.',
    technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS'],
    thumbnail:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/RootVenture',
    liveUrl: 'https://your-rootventure-demo.vercel.app',
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
    liveUrl: 'https://your-productactathon-demo.vercel.app',
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
  },

  {
    id: 8,
    title: 'Faktify',
    description:
      'An AI-powered fake news detection and verification platform.',
    longDescription:
      'Faktify combines AI/ML models, Google Fact Check API, and community-driven reporting to analyze news articles and generate credibility scores with detailed explanations. It also includes real-time comparisons, quizzes, and community engagement features.',
    technologies: [
      'React',
      'Flask',
      'Node.js',
      'MongoDB',
      'BERT',
      'LLaMA',
      'Tailwind CSS',
    ],
    thumbnail:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Faktify',
    liveUrl: 'https://your-faktify-demo.vercel.app',
  },

  {
    id: 9,
    title: 'CYMBOT (Mental Health Chatbot)',
    description:
      'An AI chatbot that provides mental health support and wellness assistance.',
    longDescription:
      'CYMBOT is an intelligent mental health chatbot designed to provide emotional support through interactive conversations. It offers mood tracking, mental wellness guidance, and a user-friendly interface while promoting awareness and accessible healthcare.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MySQL'],
    thumbnail:
      'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/CYMBOT',
    liveUrl: 'https://your-cymbot-demo.vercel.app',
  },

  {
    id: 10,
    title: 'Java Social Media Application',
    description:
      'A social networking application developed using Java Spring Boot and Firebase.',
    longDescription:
      'This social media application enables students to create profiles, share posts, interact with peers, and securely authenticate using Firebase. Built with Spring Boot, it demonstrates REST APIs, backend development, authentication, and database integration.',
    technologies: ['Java', 'Spring Boot', 'Firebase', 'REST API'],
    thumbnail:
      'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/Nishikakansal/Java-Social-Media',
    liveUrl: 'https://your-java-social-demo.vercel.app',
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
                className={`project-card group cursor-pointer transition-all duration-500 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
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
