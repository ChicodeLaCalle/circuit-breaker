'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ROSTER', href: '/roster' },
  { label: 'ARTISTS', href: '/artists' },
  { label: 'NEWS', href: '/news' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cb-black/95 backdrop-blur-sm border-b border-cb-concrete">
      {/* Electric Purple Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-cb-purple to-transparent shadow-[0_0_10px_#6b21a8]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - PURPLE */}
          <Link href="/" className="flex items-center gap-2 group">
            <Zap className="w-7 h-7 text-cb-purple group-hover:animate-pulse drop-shadow-[0_0_10px_rgba(107,33,168,0.8)]" />
            <span className="font-[family-name:var(--font-space)] text-xl font-bold tracking-tighter uppercase">
              <span className="text-cb-white">CIRCUIT</span>
              <span className="text-cb-purple glow-purple">BREAKER</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-xs font-bold text-cb-muted hover:text-cb-white transition-all duration-200 uppercase tracking-widest
                         hover:bg-cb-concrete/30 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-cb-purple group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#6b21a8]" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 btn-primary text-xs py-3"
            >
              BOOK NOW
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cb-muted hover:text-cb-purple transition-colors border border-cb-concrete hover:border-cb-purple"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cb-black border-t border-cb-concrete"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-4 px-4 text-sm font-bold text-cb-muted hover:text-cb-white hover:bg-cb-gray transition-all uppercase tracking-widest
                             border-l-2 border-transparent hover:border-cb-purple flex items-center gap-3"
                  >
                    <span className="text-cb-purple text-xs">//</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center block"
                >
                  BOOK NOW
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
