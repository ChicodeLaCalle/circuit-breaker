'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Radio } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cb-black">
      {/* CYBERSIGILISM BACKGROUND - ORGANIC BIOMECHANICAL PATTERNS */}
      <div className="absolute inset-0">
        
        {/* Layer 1: Organic Flowing Lines Background */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="organicGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="organicGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Large Organic Pattern 1 - Flowing Biomechanical */}
          <g transform="translate(150, 100) scale(1.5)" filter="url(#glow)">
            {/* Main flowing spine */}
            <path d="M0,50 Q30,20 60,50 T120,50 T180,40 T240,60" 
                  fill="none" stroke="url(#organicGrad1)" strokeWidth="3" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" from="0,500" to="500,0" dur="8s" repeatCount="indefinite"/>
            </path>
            {/* Branching tendrils */}
            <path d="M30,35 Q50,10 70,25 Q60,40 50,35" 
                  fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" opacity="0.8">
              <animate attributeName="d" 
                       values="M30,35 Q50,10 70,25 Q60,40 50,35;M30,35 Q45,15 65,20 Q55,45 50,35;M30,35 Q50,10 70,25 Q60,40 50,35" 
                       dur="6s" repeatCount="indefinite"/>
            </path>
            <path d="M90,45 Q110,20 130,35 Q120,50 110,45" 
                  fill="none" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" opacity="0.8">
              <animate attributeName="d" 
                       values="M90,45 Q110,20 130,35 Q120,50 110,45;M90,45 Q105,25 125,30 Q115,55 110,45;M90,45 Q110,20 130,35 Q120,50 110,45" 
                       dur="7s" repeatCount="indefinite"/>
            </path>
            <path d="M150,35 Q170,10 190,25 Q180,40 170,35" 
                  fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" opacity="0.8">
              <animate attributeName="d" 
                       values="M150,35 Q170,10 190,25 Q180,40 170,35;M150,35 Q165,15 185,20 Q175,45 170,35;M150,35 Q170,10 190,25 Q180,40 170,35" 
                       dur="5s" repeatCount="indefinite"/>
            </path>
            {/* Organic dots/sensors */}
            <circle cx="30" cy="35" r="4" fill="#9333ea">
              <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="90" cy="45" r="3" fill="#a855f7">
              <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="150" cy="35" r="4" fill="#c084fc">
              <animate attributeName="r" values="4;6;4" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="210" cy="50" r="3" fill="#9333ea">
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Large Organic Pattern 2 - Tribal Biomechanical */}
          <g transform="translate(800, 150) scale(1.8)" filter="url(#glow)">
            {/* Central spine with ribs */}
            <path d="M0,0 Q20,-30 40,0 Q60,30 80,0 Q100,-30 120,0" 
                  fill="none" stroke="url(#organicGrad2)" strokeWidth="4" strokeLinecap="round">
              <animate attributeName="d" 
                       values="M0,0 Q20,-30 40,0 Q60,30 80,0 Q100,-30 120,0;M0,0 Q25,-25 45,5 Q55,35 85,-5 Q95,-25 125,5;M0,0 Q20,-30 40,0 Q60,30 80,0 Q100,-30 120,0" 
                       dur="10s" repeatCount="indefinite"/>
            </path>
            {/* Tribal spikes */}
            <path d="M20,-15 L25,-35 L30,-15 M50,15 L55,40 L60,15 M90,-10 L95,-30 L100,-10" 
                  fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <animateTransform attributeName="transform" type="rotate" from="0 60 0" to="5 60 0" dur="8s" repeatCount="indefinite" additive="sum"/>
            </path>
            {/* Organic webbing */}
            <path d="M10,-10 Q30,-20 50,-10 Q40,10 20,0 Q30,-15 10,-10" 
                  fill="none" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
            <path d="M70,5 Q90,-5 110,5 Q100,25 80,15 Q90,0 70,5" 
                  fill="none" stroke="#c084fc" strokeWidth="1.5" opacity="0.7"/>
            {/* Small tendrils */}
            <path d="M40,-20 Q35,-40 45,-50 M80,20 Q85,45 75,55" 
                  fill="none" stroke="#9333ea" strokeWidth="1.5" strokeLinecap="round">
              <animate attributeName="d" 
                       values="M40,-20 Q35,-40 45,-50 M80,20 Q85,45 75,55;M40,-20 Q30,-35 50,-45 M80,20 Q90,40 70,60;M40,-20 Q35,-40 45,-50 M80,20 Q85,45 75,55" 
                       dur="6s" repeatCount="indefinite"/>
            </path>
          </g>

          {/* Large Organic Pattern 3 - Flowing Veins */}
          <g transform="translate(100, 500) scale(2)" filter="url(#glow)">
            {/* Main vein */}
            <path d="M0,0 C30,-20 60,-10 90,10 C120,30 150,20 180,0" 
                  fill="none" stroke="url(#organicGrad1)" strokeWidth="5" strokeLinecap="round">
              <animate attributeName="stroke-width" values="5;7;5" dur="4s" repeatCount="indefinite"/>
            </path>
            {/* Branching veins */}
            <path d="M30,-5 Q45,-25 60,-20 Q50,0 40,-5" 
                  fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M90,5 Q105,-15 120,-10 Q110,10 100,5" 
                  fill="none" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite"/>
            </path>
            <path d="M150,10 Q165,-10 180,-5 Q170,15 160,10" 
                  fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
            </path>
            {/* Capillary details */}
            <path d="M15,-5 L20,-15 M45,0 L50,-12 M75,5 L80,-8 M105,8 L110,-5 M135,5 L140,-10" 
                  fill="none" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            {/* Nodes */}
            <ellipse cx="30" cy="-5" rx="6" ry="4" fill="#9333ea" opacity="0.8">
              <animate attributeName="rx" values="6;8;6" dur="3s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="90" cy="5" rx="5" ry="3" fill="#a855f7" opacity="0.8">
              <animate attributeName="rx" values="5;7;5" dur="2.5s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="150" cy="10" rx="6" ry="4" fill="#c084fc" opacity="0.8">
              <animate attributeName="rx" values="6;8;6" dur="3.5s" repeatCount="indefinite"/>
            </ellipse>
          </g>

          {/* Pattern 4 - Intricate Tribal Web */}
          <g transform="translate(700, 450) scale(1.6) rotate(45)" filter="url(#glow)">
            {/* Web center */}
            <circle cx="0" cy="0" r="30" fill="none" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5">
              <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
            </circle>
            {/* Radiating lines */}
            <line x1="0" y1="-30" x2="0" y2="-80" stroke="#a855f7" strokeWidth="3" strokeLinecap="round">
              <animate attributeName="y2" values="-80;-90;-80" dur="4s" repeatCount="indefinite"/>
            </line>
            <line x1="21" y1="-21" x2="56" y2="-56" stroke="#9333ea" strokeWidth="3" strokeLinecap="round"/>
            <line x1="30" y1="0" x2="80" y2="0" stroke="#a855f7" strokeWidth="3" strokeLinecap="round"/>
            <line x1="21" y1="21" x2="56" y2="56" stroke="#9333ea" strokeWidth="3" strokeLinecap="round"/>
            <line x1="0" y1="30" x2="0" y2="80" stroke="#a855f7" strokeWidth="3" strokeLinecap="round"/>
            <line x1="-21" y1="21" x2="-56" y2="56" stroke="#9333ea" strokeWidth="3" strokeLinecap="round"/>
            <line x1="-30" y1="0" x2="-80" y2="0" stroke="#a855f7" strokeWidth="3" strokeLinecap="round"/>
            <line x1="-21" y1="-21" x2="-56" y2="-56" stroke="#9333ea" strokeWidth="3" strokeLinecap="round"/>
            {/* Decorative hooks */}
            <path d="M0,-50 Q-10,-60 0,-70 Q10,-60 0,-50 M56,-56 Q66,-66 56,-76 Q46,-66 56,-56" 
                  fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round">
              <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="5s" repeatCount="indefinite"/>
            </path>
            {/* Center core */}
            <circle cx="0" cy="0" r="8" fill="#9333ea">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Pattern 5 - Organic Mandala */}
          <g transform="translate(500, 350) scale(1.2)" filter="url(#glow)">
            <defs>
              <path id="petal" d="M0,-40 Q15,-20 0,0 Q-15,-20 0,-40" fill="none" stroke="#a855f7" strokeWidth="2"/>
            </defs>
            {[0,45,90,135,180,225,270,315].map((angle, i) => (
              <use key={i} href="#petal" transform={`rotate(${angle})`}>
                <animate attributeName="opacity" values="0.4;1;0.4" dur={`${3+i*0.2}s`} repeatCount="indefinite"/>
              </use>
            ))}
            <circle cx="0" cy="0" r="20" fill="none" stroke="#9333ea" strokeWidth="2" strokeDasharray="3,3">
              <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="15s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="0" r="10" fill="#c084fc">
              <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Pattern 6 - Biomechanical Spine */}
          <g transform="translate(1100, 100) scale(1.4) rotate(90)" filter="url(#glow)">
            {/* Vertebrae */}
            {[0, 40, 80, 120, 160].map((y, i) => (
              <g key={i} transform={`translate(0, ${y})`}>
                <ellipse cx="0" cy="0" rx="20" ry="12" fill="none" stroke="#9333ea" strokeWidth="2"/>
                <ellipse cx="0" cy="0" rx="12" ry="7" fill="#a855f7" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
                </ellipse>
                {/* Spikes */}
                <path d={`M-20,0 L-35,${-10 + i*2} L-20,-5 M20,0 L35,${-10 + i*2} L20,-5`} 
                      fill="none" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round"/>
              </g>
            ))}
            {/* Connecting tissue */}
            <path d="M0,12 Q-15,20 0,28 Q15,36 0,44" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.6"/>
            <path d="M0,52 Q-15,60 0,68 Q15,76 0,84" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.6"/>
            <path d="M0,92 Q-15,100 0,108 Q15,116 0,124" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.6"/>
            <path d="M0,132 Q-15,140 0,148 Q15,156 0,164" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.6"/>
          </g>
        </svg>

        {/* Layer 2: Connecting Energy Threads */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Flowing threads between patterns */}
          <path d="M200,200 Q400,150 600,250 T1000,200" 
                fill="none" stroke="url(#threadGrad)" strokeWidth="1" opacity="0.5">
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="10s" repeatCount="indefinite"/>
          </path>
          <path d="M150,600 Q350,500 550,600 T950,500" 
                fill="none" stroke="url(#threadGrad)" strokeWidth="1" opacity="0.5">
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="12s" repeatCount="indefinite"/>
          </path>
          <path d="M800,200 Q900,350 800,500 T900,700" 
                fill="none" stroke="url(#threadGrad)" strokeWidth="1" opacity="0.5">
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="8s" repeatCount="indefinite"/>
          </path>
        </svg>

        {/* Layer 3: Fine Detail Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          {/* Random organic strokes */}
          <path d="M50,100 Q80,80 100,100 T150,90" fill="none" stroke="#9333ea" strokeWidth="0.5"/>
          <path d="M300,400 Q330,380 360,400 T420,390" fill="none" stroke="#a855f7" strokeWidth="0.5"/>
          <path d="M900,300 Q930,280 960,300 T1020,290" fill="none" stroke="#9333ea" strokeWidth="0.5"/>
          <path d="M100,700 Q130,680 160,700 T220,690" fill="none" stroke="#a855f7" strokeWidth="0.5"/>
          
          {/* Small sigil marks */}
          <g opacity="0.6">
            <path d="M100,200 L110,185 L120,200 L110,215 Z" fill="none" stroke="#c084fc" strokeWidth="1"/>
            <path d="M400,150 L410,135 L420,150 L410,165 Z" fill="none" stroke="#c084fc" strokeWidth="1"/>
            <path d="M800,450 L810,435 L820,450 L810,465 Z" fill="none" stroke="#c084fc" strokeWidth="1"/>
          </g>
        </svg>

        {/* Layer 4: Ambient Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-cb-purple/25 via-cb-purple/10 to-transparent rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-cb-violet/20 via-cb-violet/8 to-transparent rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 left-2/3 w-[450px] h-[450px] bg-gradient-radial from-cb-magenta/15 via-cb-magenta/5 to-transparent rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '6s' }} />
        
        {/* Vignette Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, #000000 95%)'
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
