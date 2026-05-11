'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Radio } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cb-black">
      {/* CYBERSIGILISM BACKGROUND - OCCULT SYMBOLS */}
      <div className="absolute inset-0">
        
        {/* Layer 1: Sacred Geometry Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 40%, rgba(147, 51, 234, 0.1) 40%, rgba(147, 51, 234, 0.1) 41%, transparent 41%),
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, rgba(168, 85, 247, 0.15) 30%, rgba(168, 85, 247, 0.15) 31%, transparent 31%),
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 20%, rgba(139, 92, 246, 0.2) 20%, rgba(139, 92, 246, 0.2) 21%, transparent 21%)
            `,
            backgroundSize: '400px 400px',
          }}
        />

        {/* Layer 2: Mystical Sigil Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sigilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Sigil 1: The All-Seeing Eye Cyber Variant */}
          <g transform="translate(200, 150)" className="animate-pulse">
            <path d="M0,0 L30,-20 L60,0 L30,20 Z" fill="none" stroke="url(#sigilGrad)" strokeWidth="2" />
            <circle cx="30" cy="0" r="15" fill="none" stroke="#9333ea" strokeWidth="1.5" />
            <circle cx="30" cy="0" r="5" fill="#9333ea" />
            <path d="M0,0 Q30,-40 60,0 Q30,40 0,0" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
          </g>

          {/* Sigil 2: Binding Circle */}
          <g transform="translate(900, 200)" className="animate-pulse" style={{ animationDelay: '1s' }}>
            <circle cx="0" cy="0" r="60" fill="none" stroke="#9333ea" strokeWidth="2" />
            <circle cx="0" cy="0" r="45" fill="none" stroke="#a855f7" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="#c084fc" strokeWidth="1" />
            <path d="M-60,0 L60,0 M0,-60 L0,60 M-42,-42 L42,42 M-42,42 L42,-42" stroke="#9333ea" strokeWidth="1" />
            <circle cx="0" cy="-60" r="4" fill="#a855f7" />
            <circle cx="60" cy="0" r="4" fill="#a855f7" />
            <circle cx="0" cy="60" r="4" fill="#a855f7" />
            <circle cx="-60" cy="0" r="4" fill="#a855f7" />
          </g>

          {/* Sigil 3: The Gateway */}
          <g transform="translate(150, 600)" className="animate-pulse" style={{ animationDelay: '2s' }}>
            <path d="M0,-50 L43,-25 L43,25 L0,50 L-43,25 L-43,-25 Z" fill="none" stroke="#9333ea" strokeWidth="2" />
            <path d="M0,-35 L30,-17.5 L30,17.5 L0,35 L-30,17.5 L-30,-17.5 Z" fill="none" stroke="#a855f7" strokeWidth="1.5" />
            <path d="M0,-20 L17,-10 L17,10 L0,20 L-17,10 L-17,-10 Z" fill="none" stroke="#c084fc" strokeWidth="1" />
            <circle cx="0" cy="0" r="8" fill="#9333ea" />
          </g>

          {/* Sigil 4: Runic Web */}
          <g transform="translate(1000, 550)" className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            <path d="M0,0 L0,-80 M0,0 L69,-40 M0,0 L69,40 M0,0 L0,80 M0,0 L-69,40 M0,0 L-69,-40" 
                  stroke="#9333ea" strokeWidth="2" />
            <circle cx="0" cy="-80" r="6" fill="#a855f7" />
            <circle cx="69" cy="-40" r="6" fill="#a855f7" />
            <circle cx="69" cy="40" r="6" fill="#a855f7" />
            <circle cx="0" cy="80" r="6" fill="#a855f7" />
            <circle cx="-69" cy="40" r="6" fill="#a855f7" />
            <circle cx="-69" cy="-40" r="6" fill="#a855f7" />
            <circle cx="0" cy="0" r="15" fill="none" stroke="#c084fc" strokeWidth="2" />
          </g>

          {/* Sigil 5: The Trinity Knot */}
          <g transform="translate(600, 100)" className="animate-pulse" style={{ animationDelay: '1.5s' }}>
            <path d="M0,-40 C20,-40 35,-25 35,-5 C35,15 20,30 0,30" fill="none" stroke="#9333ea" strokeWidth="2" />
            <path d="M0,-40 C-20,-40 -35,-25 -35,-5 C-35,15 -20,30 0,30" fill="none" stroke="#9333ea" strokeWidth="2" />
            <path d="M-30,25 C-15,40 15,40 30,25" fill="none" stroke="#9333ea" strokeWidth="2" />
            <circle cx="0" cy="-40" r="5" fill="#a855f7" />
            <circle cx="-30" cy="25" r="5" fill="#a855f7" />
            <circle cx="30" cy="25" r="5" fill="#a855f7" />
            <circle cx="0" cy="0" r="8" fill="#c084fc" />
          </g>

          {/* Sigil 6: Digital Runes */}
          <g transform="translate(1100, 400)" className="animate-pulse" style={{ animationDelay: '2.5s' }}>
            <path d="M-20,-40 L-20,40 M-20,-20 L10,-40 L10,0 M-20,0 L10,20 L10,40" 
                  stroke="#9333ea" strokeWidth="2.5" fill="none" />
            <rect x="-25" y="-45" width="50" height="95" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
          </g>

          {/* Sigil 7: The Ouroboros Circuit */}
          <g transform="translate(400, 750)" className="animate-pulse" style={{ animationDelay: '0.8s' }}>
            <path d="M0,0 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" 
                  fill="none" stroke="#9333ea" strokeWidth="2" />
            <path d="M0,0 m-35,0 a35,35 0 1,0 70,0 a35,35 0 1,0 -70,0" 
                  fill="none" stroke="#a855f7" strokeWidth="1.5" />
            <path d="M50,0 L60,-10 L70,0 L60,10 Z" fill="#c084fc" />
            <circle cx="0" cy="0" r="10" fill="#9333ea" />
          </g>

          {/* Connecting Lines - The Web */}
          <path d="M200,150 Q550,125 900,200" fill="none" stroke="#9333ea" strokeWidth="0.5" opacity="0.3" />
          <path d="M900,200 Q800,375 1000,550" fill="none" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
          <path d="M1000,550 Q500,550 400,750" fill="none" stroke="#9333ea" strokeWidth="0.5" opacity="0.3" />
          <path d="M400,750 Q300,400 150,600" fill="none" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
          <path d="M600,100 Q400,400 200,150" fill="none" stroke="#c084fc" strokeWidth="0.5" opacity="0.3" />
        </svg>

        {/* Layer 3: Runic Alphabet Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(147, 51, 234, 0.1) 100px, rgba(147, 51, 234, 0.1) 101px),
              repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(147, 51, 234, 0.1) 100px, rgba(147, 51, 234, 0.1) 101px)
            `,
          }}
        />

        {/* Layer 4: Occult Symbols Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          {/* Pentagram Variants */}
          <g transform="translate(300, 300)">
            <path d="M0,-30 L9,-9 L30,-9 L14,6 L19,27 L0,15 L-19,27 L-14,6 L-30,-9 L-9,-9 Z" 
                  fill="none" stroke="#9333ea" strokeWidth="1" />
            <circle cx="0" cy="0" r="20" fill="none" stroke="#a855f7" strokeWidth="0.5" />
          </g>
          
          <g transform="translate(800, 600)">
            <path d="M0,-40 L12,-12 L40,-12 L19,8 L25,36 L0,20 L-25,36 L-19,8 L-40,-12 L-12,-12 Z" 
                  fill="none" stroke="#9333ea" strokeWidth="1" />
            <circle cx="0" cy="0" r="25" fill="none" stroke="#a855f7" strokeWidth="0.5" />
          </g>

          {/* Cross Variants */}
          <g transform="translate(500, 450)">
            <path d="M0,-30 L0,30 M-20,0 L20,0 M-15,-15 L15,15 M-15,15 L15,-15" 
                  stroke="#a855f7" strokeWidth="1" />
            <circle cx="0" cy="0" r="35" fill="none" stroke="#9333ea" strokeWidth="0.5" />
          </g>

          {/* Eye of Providence */}
          <g transform="translate(700, 300)">
            <path d="M0,-15 Q20,0 0,15 Q-20,0 0,-15" fill="none" stroke="#c084fc" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="5" fill="#9333ea" />
            <path d="M-25,-20 L25,-20 L0,-35 Z" fill="none" stroke="#a855f7" strokeWidth="0.5" />
          </g>

          {/* Alchemical Symbols */}
          <g transform="translate(100, 400)">
            <path d="M-20,-20 L20,20 M20,-20 L-20,20 M0,-25 L0,25" stroke="#9333ea" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="18" fill="none" stroke="#a855f7" strokeWidth="0.5" />
          </g>
        </svg>

        {/* Layer 5: Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cb-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cb-violet/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cb-magenta/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Vignette */}
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
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-cb-muted mt-2">
                ARTISTS
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-px h-12 bg-cb-concrete hidden sm:block" />
            </div>
            <div className="text-center relative">
              <div className="text-4xl sm:text-5xl font-black text-cb-white glow-purple">50+</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-cb-muted mt-2">
                EVENTS
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-px h-12 bg-cb-concrete hidden sm:block" />
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-cb-white glow-purple">EU</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-cb-muted mt-2">
                COVERAGE
              </div>
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
