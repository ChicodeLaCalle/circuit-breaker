'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Radio } from 'lucide-react'
import Image from 'next/image'

// Cybersiglism pattern images - add your PNG files to /public/images/symbols/
// Images will automatically blend with dark background (removes white)
// BIGGER and BETTER SPREAD across the page
const cybersigilImages = [
  // Top area
  { src: '/images/symbols/sigil-1.png', position: '-top-10 -left-20', size: 500, rotate: -15, delay: 0 },
  { src: '/images/symbols/sigil-2.png', position: '-top-5 -right-32', size: 550, rotate: 25, delay: 1 },
  
  // Upper middle - spread wide
  { src: '/images/symbols/sigil-3.png', position: 'top-20 -left-10', size: 450, rotate: 10, delay: 2 },
  { src: '/images/symbols/sigil-4.png', position: 'top-32 -right-10', size: 480, rotate: -20, delay: 3 },
  
  // Middle area
  { src: '/images/symbols/sigil-5.png', position: 'top-1/2 -left-24', size: 420, rotate: -30, delay: 4 },
  { src: '/images/symbols/sigil-6.png', position: 'top-1/2 -right-24', size: 440, rotate: 35, delay: 5 },
  
  // Lower middle
  { src: '/images/symbols/sigil-1.png', position: 'top-2/3 -left-16', size: 460, rotate: 15, delay: 6 },
  { src: '/images/symbols/sigil-2.png', position: 'top-2/3 -right-16', size: 470, rotate: -10, delay: 7 },
  
  // Bottom area
  { src: '/images/symbols/sigil-3.png', position: 'bottom-20 -left-20', size: 520, rotate: 20, delay: 8 },
  { src: '/images/symbols/sigil-4.png', position: 'bottom-10 -right-24', size: 500, rotate: -25, delay: 9 },
  
  // Far corners for edge coverage
  { src: '/images/symbols/sigil-5.png', position: 'bottom-0 left-20', size: 400, rotate: 45, delay: 10 },
  { src: '/images/symbols/sigil-6.png', position: 'bottom-0 right-20', size: 400, rotate: -45, delay: 11 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cb-black">
      {/* CYBERSIGILISM BACKGROUND WITH WHITE BACKGROUND REMOVAL */}
      <div className="absolute inset-0">
        
        {/* Layer 1: Cybersiglism Image Patterns with CSS Blend Mode */}
        {cybersigilImages.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute ${img.position} pointer-events-none overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: img.delay * 0.3 }}
            style={{
              width: img.size,
              height: img.size,
              transform: `rotate(${img.rotate}deg)`,
            }}
          >
            {/* Purple glow behind image */}
            <div 
              className="absolute inset-0 blur-3xl opacity-60"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)',
              }}
            />
            
            {/* Image container with blend modes to remove white */}
            <div 
              className="relative w-full h-full"
              style={{
                // Blend modes that remove white backgrounds
                mixBlendMode: 'screen', // This makes white transparent
              }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(147,51,234,0.8)]"
                style={{
                  // Multiple filters to ensure white removal and purple tint
                  filter: 'invert(1) hue-rotate(260deg) brightness(1.5) saturate(1.5) contrast(1.2)',
                  mixBlendMode: 'screen',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Alternative: Using CSS mask to remove white (if blend mode doesn't work) */}
        <style jsx>{`
          .cybersigil-mask {
            mask-image: linear-gradient(to bottom, black, black);
            -webkit-mask-image: linear-gradient(to bottom, black, black);
          }
        `}</style>

        {/* Layer 2: Ambient Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-cb-purple/25 via-cb-purple/5 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-cb-violet/15 via-cb-violet/5 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 left-2/3 w-[550px] h-[550px] bg-gradient-radial from-cb-magenta/10 via-cb-magenta/3 to-transparent rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '6s' }} />
        
        {/* Layer 3: Organic SVG Lines (Fallback when no images) */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q600,100 1200,400 T2400,300" fill="none" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.5" />
          <path d="M0,600 Q600,500 1200,700 T2400,600" fill="none" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.5" />
        </svg>
        
        {/* Vignette Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, #000000 92%)'
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

          {/* Main Headline - GOTHIC BLACKLETTER FONT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-[family-name:var(--font-gothic)] text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none tracking-normal">
              <span className="block text-cb-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Circuit
              </span>
              <span className="block text-cb-purple glow-purple relative -mt-4 sm:-mt-8">
                Breaker
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
