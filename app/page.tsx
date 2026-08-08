'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <ParticleBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Certifications />
          <Achievements />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}