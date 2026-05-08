'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Radio } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cb-black">
      {/* VISIBLE BIOMECHANICAL BACKGROUND EFFECTS */}
      <div className="absolute inset-0">
        
        {/* VISIBLE Morphing Purple Blobs */}
        <div className="morph-blob w-[700px] h-[700px] top-1/4 left-1/4 -translate-x-1/2 opacity-60" 
             style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(168, 85, 247, 0.3))' }} />
        <div className="morph-blob w-[600px] h-[600px] bottom-1/4 right-1/4 translate-x-1/2 opacity-50" 
             style={{ animationDelay: '-5s', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(139, 92, 246, 0.25))' }} />
        <div className="morph-blob w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" 
             style={{ animationDelay: '-10s', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(147, 51, 234, 0.2))' }} />
        
        {/* VISIBLE Cybersigil Pattern - HIGHER OPACITY */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 30 L80 35 L65 50 L70 70 L50 60 L30 70 L35 50 L20 35 L40 30 Z' fill='none' stroke='%23a855f7' stroke-width='1.5'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%239333ea' stroke-width='1'/%3E%3Cpath d='M50 30 L50 70 M30 50 L70 50' stroke='%23c084fc' stroke-width='0.8'/%3E%3Ccircle cx='50' cy='30' r='4' fill='%23a855f7'/%3E%3Ccircle cx='70' cy='50' r='4' fill='%23a855f7'/%3E%3Ccircle cx='50' cy='70' r='4' fill='%23a855f7'/%3E%3Ccircle cx='30' cy='50' r='4' fill='%23a855f7'/%3E%3C/svg%3E")`,
          }}
        />

        {/* VISIBLE Circuit/Tentacle Lines - BRIGHTER */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Main organic circuit lines */}
          <path 
            d="M0,200 Q150,100 300,250 T600,200 T900,300 T1200,250" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="2"
            className="animate-pulse"
          />
          <path 
            d="M0,400 Q200,300 400,450 T800,400 T1200,450" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="1.5"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M0,600 Q250,500 500,650 T1000,600 T1200,650" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="1"
            style={{ animationDelay: '2s' }}
          />
          {/* Vertical organic lines */}
          <path 
            d="M200,0 Q250,200 200,400 T250,800" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="1.5"
            style={{ animationDelay: '0.5s' }}
          />
          <path 
            d="M600,0 Q550,250 600,500 T550,1000" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="1.5"
            style={{ animationDelay: '1.5s' }}
          />
          <path 
            d="M1000,0 Q1050,200 1000,400 T1050,800" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="1.5"
            style={{ animationDelay: '2.5s' }}
          />
          {/* Biomechanical nodes */}
          <circle cx="300" cy="250" r="6" fill="#9333ea" className="animate-pulse" />
          <circle cx="600" cy="200" r="5" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="900" cy="300" r="7" fill="#c084fc" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="400" cy="450" r="5" fill="#9333ea" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="200" cy="400" r="6" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="600" cy="500" r="5" fill="#c084fc" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        </svg>

        {/* VISIBLE Neural Network */}
        <div className="neural-lines" />
        
        {/* VISIBLE Vein Network */}
        <div className="vein-network" />
        
        {/* VISIBLE Organic radial gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-cb-purple/20 via-cb-purple/10 to-transparent rounded-full blur-[100px] animate-pulse-purple" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-cb-violet/15 via-cb-violet/8 to-transparent rounded-full blur-[100px] animate-pulse-purple" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cb-magenta/10 via-cb-magenta/5 to-transparent rounded-full blur-[120px] animate-pulse-purple" style={{ animationDelay: '4s' }} />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, #000000 85%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge - PURPLE */}
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

          {/* Main Headline - PURPLE GLOW */}
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

          {/* CTA Buttons - PURPLE */}
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

          {/* Stats - PURPLE */}
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

      {/* Scroll Indicator - PURPLE */}
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
