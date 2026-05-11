'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Radio } from 'lucide-react'
import Image from 'next/image'

// Cybersiglism pattern images - add your PNG files to /public/images/symbols/
const cybersigilImages = [
  { src: '/images/symbols/sigil-1.png', position: 'top-20 left-10', size: 300, rotate: 0, delay: 0 },
  { src: '/images/symbols/sigil-2.png', position: 'top-32 right-20', size: 250, rotate: 15, delay: 2 },
  { src: '/images/symbols/sigil-3.png', position: 'bottom-40 left-20', size: 350, rotate: -10, delay: 4 },
  { src: '/images/symbols/sigil-4.png', position: 'bottom-20 right-10', size: 280, rotate: 5, delay: 1 },
  { src: '/images/symbols/sigil-5.png', position: 'top-1/2 left-5', size: 200, rotate: -20, delay: 3 },
  { src: '/images/symbols/sigil-6.png', position: 'top-1/3 right-5', size: 220, rotate: 10, delay: 5 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cb-black">
      {/* BACKGROUND USING REAL CYBERSIGILISM IMAGES */}
      <div className="absolute inset-0">
        
        {/* Layer 1: Cybersiglism Image Patterns */}
        {cybersigilImages.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute ${img.position} pointer-events-none`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 2, delay: img.delay * 0.3 }}
            style={{
              width: img.size,
              height: img.size,
              transform: `rotate(${img.rotate}deg)`,
            }}
          >
            {/* Glow effect behind image */}
            <div 
              className="absolute inset-0 blur-3xl opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 70%)',
              }}
            />
            <Image
              src={img.src}
              alt=""
              fill
              className="object-contain opacity-60 drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]"
              style={{
                filter: 'hue-rotate(270deg) brightness(1.2) contrast(1.1)',
              }}
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>
        ))}

        {/* Layer 2: Ambient Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-cb-purple/20 via-cb-purple/5 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-cb-violet/15 via-cb-violet/5 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 left-2/3 w-[550px] h-[550px] bg-gradient-radial from-cb-magenta/10 via-cb-magenta/3 to-transparent rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '6s' }} />
        
        {/* Layer 3: Subtle organic lines overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,300 Q600,100 1200,400" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
          <path d="M0,600 Q600,500 1200,700" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
        </svg>
        
        {/* Vignette Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, #000000 90%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-cb-purple bg-cb-purple/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cb-purple/20 animate-pulse" />
            <Radio className="w-4 h-4 text-cb-purple-light animate-pulse relative z-10" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cb-purple-light relative z-10">
              HARD TECHNO BOOKING AGENCY
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-[family-name:var(--font-space)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
              <span className="block text-cb-white drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                CIRCUIT
              </span>
              <span className="block text-cb-purple glow-purple relative">
                BREAKER
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-cb-muted mb-12 tracking-wide"
          >
            Premier Hard Techno talent representation. 
            <span className="text-cb-off-white"> Connecting industrial electronic music artists </span>
            with promoters across Europe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/roster" className="btn-primary group flex items-center gap-3 text-base">
              <span>VIEW ROSTER</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-outline flex items-center gap-3 text-base">
              <Play className="w-5 h-5" />
              <span>BOOK AN ARTIST</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-cb-concrete pt-12"
          >
            <div className="text-center relative">
              <div className="text-4xl sm:text-5xl font-black text-cb-white glow-purple">5</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-cb-muted mt-2">ARTISTS</div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-px h-12 bg-cb-concrete hidden sm:block" />
            </div>
            <div className="text-center relative">
              <div className="text-4xl sm:text-5xl font-black text-cb-white glow-purple">50+</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-cb-muted mt-2">EVENTS</div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-px h-12 bg-cb-concrete hidden sm:block" />
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-cb-white glow-purple">EU</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-cb-muted mt-2">COVERAGE</div>
            </div>
          </motion.div>

          {/* Bottom Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-xs text-cb-dim uppercase tracking-[0.5em]"
          >
            // UNDERGROUND SOUNDS // WAREHOUSE ENERGY //
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cb-concrete flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cb-purple shadow-[0_0_10px_#9333ea]"
          />
        </div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-4 w-20 h-20 border-l-2 border-t-2 border-cb-purple/50 opacity-50" />
      <div className="absolute top-24 right-4 w-20 h-20 border-r-2 border-t-2 border-cb-purple/50 opacity-50" />
      <div className="absolute bottom-24 left-4 w-20 h-20 border-l-2 border-b-2 border-cb-purple/50 opacity-50" />
      <div className="absolute bottom-24 right-4 w-20 h-20 border-r-2 border-b-2 border-cb-purple/50 opacity-50" />
    </section>
  )
}
