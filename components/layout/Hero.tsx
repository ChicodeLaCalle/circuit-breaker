'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Radio } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cb-black">
      {/* CYBERSIGILISM BACKGROUND EFFECTS */}
      <div className="absolute inset-0">
        {/* Morphing Purple Blobs */}
        <div className="morph-blob w-[600px] h-[600px] top-1/4 left-1/4 -translate-x-1/2" />
        <div className="morph-blob w-[500px] h-[500px] bottom-1/4 right-1/4 translate-x-1/2" style={{ animationDelay: '-5s' }} />
        <div className="morph-blob w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-10s', opacity: '0.3' }} />
        
        {/* Cybersigil Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 5 L50 25 L70 30 L55 40 L60 60 L40 50 L20 60 L25 40 L10 30 L30 25 Z' fill='none' stroke='%236b21a8' stroke-width='0.5'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='%234c1d95' stroke-width='0.3'/%3E%3Cpath d='M5 40 Q20 25 40 40 T75 40' fill='none' stroke='%238b5cf6' stroke-width='0.3'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Circuit/Tentacle Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b21a8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Organic circuit lines */}
          <path 
            d="M0,300 Q200,200 400,350 T800,300 T1200,400" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="1"
            className="animate-pulse"
          />
          <path 
            d="M0,500 Q300,400 600,550 T1200,500" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="0.5"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M200,0 Q250,200 200,400 T250,800" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="0.5"
            style={{ animationDelay: '2s' }}
          />
          <path 
            d="M1000,0 Q950,300 1000,600 T950,1000" 
            fill="none" 
            stroke="url(#purpleGrad)" 
            strokeWidth="0.5"
            style={{ animationDelay: '3s' }}
          />
        </svg>
        
        {/* Organic radial gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cb-purple/10 rounded-full blur-[150px] animate-pulse-purple" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cb-violet/8 rounded-full blur-[150px] animate-pulse-purple" style={{ animationDelay: '2s' }} />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, #000000 80%)'
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
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-cb-purple bg-cb-purple/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cb-purple/10 animate-pulse" />
            <Radio className="w-4 h-4 text-cb-purple animate-pulse relative z-10" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cb-purple relative z-10">
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
            className="w-1 h-2 bg-cb-purple shadow-[0_0_10px_#6b21a8]"
          />
        </div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-4 w-20 h-20 border-l-2 border-t-2 border-cb-concrete opacity-50" />
      <div className="absolute top-24 right-4 w-20 h-20 border-r-2 border-t-2 border-cb-concrete opacity-50" />
      <div className="absolute bottom-24 left-4 w-20 h-20 border-l-2 border-b-2 border-cb-concrete opacity-50" />
      <div className="absolute bottom-24 right-4 w-20 h-20 border-r-2 border-b-2 border-cb-concrete opacity-50" />
    </section>
  )
}
