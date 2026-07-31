'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Terminal,
  Code2,
  Database,
  Cpu,
  Layout,
  Server,
  Sparkles,
  Search,
  CheckCircle2,
  BookOpen
} from 'lucide-react'

interface SkillItem {
  name: string
  category: 'frontend' | 'backend' | 'languages' | 'aiml' | 'tools' | 'core'
  level: number
  badge: 'Mastery' | 'Advanced' | 'Proficient' | 'Exploring'
  icon: string
  color: string
  tags: string[]
}

const skills: SkillItem[] = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    level: 90,
    badge: 'Advanced',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500',
    tags: ['Hooks', 'Context API', 'Vite', 'State Mgmt']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 85,
    badge: 'Proficient',
    icon: '▲',
    color: 'from-purple-400 to-indigo-500',
    tags: ['App Router', 'SSR/SSG', 'SEO', 'Performance']
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 95,
    badge: 'Mastery',
    icon: '🎨',
    color: 'from-orange-400 to-pink-500',
    tags: ['Tailwind CSS', 'Flex/Grid', 'Responsive', 'Animations']
  },

  // Backend
  {
    name: 'Node.js & Express',
    category: 'backend',
    level: 85,
    badge: 'Proficient',
    icon: '🟢',
    color: 'from-green-400 to-emerald-600',
    tags: ['REST API', 'Express', 'JWT', 'Async/Await']
  },
  {
    name: 'MongoDB',
    category: 'backend',
    level: 80,
    badge: 'Proficient',
    icon: '🍃',
    color: 'from-emerald-400 to-teal-600',
    tags: ['NoSQL', 'Mongoose', 'Atlas', 'Schemas']
  },
  {
    name: 'SQL Databases',
    category: 'backend',
    level: 75,
    badge: 'Proficient',
    icon: '🗄️',
    color: 'from-blue-400 to-cyan-600',
    tags: ['Relational', 'Queries', 'Joins', 'Normalization']
  },
  {
    name: 'Firebase',
    category: 'backend',
    level: 80,
    badge: 'Proficient',
    icon: '🔥',
    color: 'from-amber-400 to-orange-500',
    tags: ['Firestore', 'Auth', 'Hosting', 'Realtime']
  },

  // Languages
  {
    name: 'C++',
    category: 'languages',
    level: 88,
    badge: 'Advanced',
    icon: '⚡',
    color: 'from-blue-500 to-indigo-600',
    tags: ['STL', 'OOP', 'Pointers', 'DSA']
  },
  {
    name: 'Python',
    category: 'languages',
    level: 90,
    badge: 'Advanced',
    icon: '🐍',
    color: 'from-yellow-400 to-emerald-500',
    tags: ['Scripting', 'Flask', 'Data Analysis', 'AI/ML']
  },
  {
    name: 'Java',
    category: 'languages',
    level: 75,
    badge: 'Proficient',
    icon: '☕',
    color: 'from-red-400 to-amber-600',
    tags: ['OOP', 'Collections', 'JVM', 'Classes']
  },
  {
    name: 'JavaScript / TS',
    category: 'languages',
    level: 88,
    badge: 'Advanced',
    icon: '🟨',
    color: 'from-yellow-300 to-amber-500',
    tags: ['ES6+', 'Promises', 'TypeScript', 'Event Loop']
  },

  // AI / ML
  {
    name: 'Machine Learning',
    category: 'aiml',
    level: 80,
    badge: 'Exploring',
    icon: '🤖',
    color: 'from-purple-400 to-pink-600',
    tags: ['Scikit-Learn', 'Pandas', 'Regression', 'Classification']
  },
  {
    name: 'AI & LLM Integration',
    category: 'aiml',
    level: 82,
    badge: 'Proficient',
    icon: '🧠',
    color: 'from-cyan-400 to-purple-500',
    tags: ['LLM APIs', 'Prompt Eng', 'OpenAI', 'Smart Agents']
  },

  // Tools & DSA
  {
    name: 'DSA',
    category: 'tools',
    level: 88,
    badge: 'Advanced',
    icon: '🧩',
    color: 'from-teal-400 to-cyan-500',
    tags: ['Trees/Graphs', 'DP', 'Complexity', 'LeetCode']
  },
  {
    name: 'Git & Dev Tools',
    category: 'tools',
    level: 88,
    badge: 'Advanced',
    icon: '🛠️',
    color: 'from-orange-400 to-red-500',
    tags: ['Git/GitHub', 'Postman', 'Vercel', 'DevTools']
  },

  // Core Subjects
  {
    name: 'Operating Systems',
    category: 'core',
    level: 82,
    badge: 'Proficient',
    icon: '🖥️',
    color: 'from-slate-400 to-gray-600',
    tags: ['Processes', 'Memory Mgmt', 'Scheduling', 'Deadlocks']
  },
  {
    name: 'Computer Networks',
    category: 'core',
    level: 78,
    badge: 'Proficient',
    icon: '🌐',
    color: 'from-sky-400 to-blue-600',
    tags: ['TCP/IP', 'OSI Model', 'HTTP/HTTPS', 'DNS']
  },
  {
    name: 'DBMS',
    category: 'core',
    level: 80,
    badge: 'Proficient',
    icon: '📊',
    color: 'from-violet-400 to-purple-600',
    tags: ['Normalization', 'Transactions', 'ACID', 'ER Model']
  },
  {
    name: 'OOP Concepts',
    category: 'core',
    level: 90,
    badge: 'Advanced',
    icon: '🔷',
    color: 'from-indigo-400 to-cyan-500',
    tags: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction']
  }
]

const categories = [
  { id: 'frontend',  label: 'Frontend',       icon: Layout    },
  { id: 'backend',   label: 'Backend',         icon: Server    },
  { id: 'languages', label: 'Languages',       icon: Code2     },
  { id: 'aiml',      label: 'AI / ML',         icon: Cpu       },
  { id: 'tools',     label: 'Tools & DSA',     icon: Terminal  },
  { id: 'core',      label: 'Core Subjects',   icon: BookOpen  }
]

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = skill.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const avgProficiency = Math.round(
    skills.reduce((acc, s) => acc + s.level, 0) / skills.length
  )

  return (
    <section
      id="about"
      className="py-20 bg-gray-900 relative overflow-hidden mt-16"
      ref={sectionRef}
    >
      {/* Animated background grid */}
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
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full cyber-glass text-cyan-400 text-xs font-mono mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SYSTEM_DIAGNOSTICS // SKILLS MATRIX</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold mb-3 transition-all duration-1000 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="gradient-text glitch" data-text="System Analysis & Skills">
              System Analysis & Skills
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mx-auto mb-6 animate-pulse" />
        </div>

        {/* Developer Profile Terminal */}
        <div className="mb-10 cyber-glass rounded-xl p-5 border border-cyan-400/20 font-mono text-xs sm:text-sm max-w-3xl mx-auto">
          <div className="flex items-center justify-between border-b border-cyan-400/20 pb-3 mb-4">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            </div>
            <span className="text-gray-400 text-[10px]">developer@portfolio:~/about-profile.sys</span>
          </div>
          <div className="text-green-400 leading-relaxed space-y-2">
            <div><span className="text-cyan-400">$</span> cat summary.info</div>
            <div className="text-gray-300">
              <span className="text-yellow-400">[About Me]:</span> 2nd-year B.Tech CSE student at Bennett University. Passionate about software engineering, full-stack web development, intelligent AI/ML systems, and algorithmic problem solving.
            </div>
          </div>
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 bg-gray-800/80 p-1.5 rounded-xl border border-cyan-400/20">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setSearchQuery('') }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,255,255,0.2)]'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-56">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-gray-800/90 border border-cyan-400/20 rounded-xl text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
            />
          </div>
        </div>

        {/* Skills Grid — compact cards, no description */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="cyber-glass rounded-xl p-4 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col gap-3"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              {/* Header: icon + name + badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg cyber-glass flex items-center justify-center text-xl border border-cyan-400/20 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${
                    skill.badge === 'Mastery'
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      : skill.badge === 'Advanced'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                      : skill.badge === 'Proficient'
                      ? 'bg-green-500/20 text-green-300 border-green-500/40'
                      : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
                  }`}
                >
                  {skill.badge}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {skill.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded text-[10px] bg-gray-800/80 text-cyan-300/80 border border-cyan-400/10 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                  <span className="text-gray-500 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" /> Level
                  </span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden border border-cyan-400/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 cyber-glass rounded-xl border border-cyan-400/20">
            <Search className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-pulse" />
            <h3 className="text-base font-bold text-white mb-1">No matching skills</h3>
            <p className="text-gray-400 text-xs">Try a different keyword.</p>
          </div>
        )}



      </div>
    </section>
  )
}