'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let connections: Connection[] = []
    let mouse = { x: 0, y: 0 }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      trail: { x: number; y: number; opacity: number }[]
      canvasWidth: number
      canvasHeight: number
      ctx: CanvasRenderingContext2D

      constructor(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
        this.ctx = ctx
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = (Math.random() - 0.5) * 0.8
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.8 + 0.2
        this.color = Math.random() > 0.5 ? '#00ffff' : '#ff00ff'
        this.trail = []
      }

      update() {
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity })
        if (this.trail.length > 10) this.trail.shift()

        this.x += this.vx
        this.y += this.vy

        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          this.vx += (dx / distance) * force * 0.02
          this.vy += (dy / distance) * force * 0.02
          this.opacity = Math.min(1, this.opacity + force * 0.1)
          this.size = Math.min(4, this.size + force)
        } else {
          this.opacity = Math.max(0.2, this.opacity - 0.01)
          this.size = Math.max(1, this.size - 0.02)
        }

        if (this.x < 0) this.x = this.canvasWidth
        if (this.x > this.canvasWidth) this.x = 0
        if (this.y < 0) this.y = this.canvasHeight
        if (this.y > this.canvasHeight) this.y = 0

        this.vx += (Math.random() - 0.5) * 0.01
        this.vy += (Math.random() - 0.5) * 0.01

        const maxVel = 2
        this.vx = Math.max(-maxVel, Math.min(maxVel, this.vx))
        this.vy = Math.max(-maxVel, Math.min(maxVel, this.vy))
      }

      draw() {
        const ctx = this.ctx

        this.trail.forEach((point, index) => {
          const trailOpacity = (index / this.trail.length) * point.opacity * 0.3
          ctx.save()
          ctx.globalAlpha = trailOpacity
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(point.x, point.y, this.size * 0.5, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })

        ctx.save()
        ctx.globalAlpha = this.opacity

        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = this.color
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }
    }

    class Connection {
      p1: Particle
      p2: Particle
      opacity: number
      ctx: CanvasRenderingContext2D

      constructor(ctx: CanvasRenderingContext2D, p1: Particle, p2: Particle) {
        this.ctx = ctx
        this.p1 = p1
        this.p2 = p2
        this.opacity = 0
      }

      update() {
        const dx = this.p1.x - this.p2.x
        const dy = this.p1.y - this.p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        this.opacity = distance < 120 ? Math.min(0.6, (120 - distance) / 120 * 0.6) : Math.max(0, this.opacity - 0.02)
      }

      draw() {
        if (this.opacity > 0) {
          const ctx = this.ctx
          ctx.save()
          ctx.globalAlpha = this.opacity
          const gradient = ctx.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
          gradient.addColorStop(0, this.p1.color)
          gradient.addColorStop(1, this.p2.color)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1
          ctx.shadowBlur = 5
          ctx.shadowColor = this.p1.color
          ctx.beginPath()
          ctx.moveTo(this.p1.x, this.p1.y)
          ctx.lineTo(this.p2.x, this.p2.y)
          ctx.stroke()
          ctx.restore()
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = []
      connections = []

      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000))
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(ctx, canvas.width, canvas.height))
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connections.push(new Connection(ctx, particles[i], particles[j]))
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 15, 35, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      connections.forEach(c => { c.update(); c.draw() })
      particles.forEach(p => { p.update(); p.draw() })

      if (Math.random() > 0.98) {
        ctx.save()
        ctx.globalAlpha = 0.1
        ctx.fillStyle = Math.random() > 0.5 ? '#00ffff' : '#ff00ff'
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, 1)
        ctx.restore()
      }

      animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => init()
    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const handleMouseLeave = () => { mouse.x = -1000; mouse.y = -1000 }

    init()
    animate()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60"
      style={{ zIndex: -1 }}
    />
  )
}
