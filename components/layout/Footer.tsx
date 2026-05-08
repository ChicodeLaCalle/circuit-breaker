import Link from 'next/link'
import { Zap, Instagram, Youtube, Mail, Radio } from 'lucide-react'

const footerLinks = {
  navigation: [
    { label: 'HOME', href: '/' },
    { label: 'ROSTER', href: '/roster' },
    { label: 'ARTISTS', href: '/artists' },
    { label: 'NEWS', href: '/news' },
    { label: 'CONTACT', href: '/contact' },
  ],
  services: [
    { label: 'ARTIST BOOKING', href: '/contact' },
    { label: 'EVENT MANAGEMENT', href: '/contact' },
    { label: 'TOUR PLANNING', href: '/contact' },
    { label: 'PRESS & PR', href: '/contact' },
  ],
  social: [
    { label: 'INSTAGRAM', href: '#', icon: Instagram },
    { label: 'YOUTUBE', href: '#', icon: Youtube },
    { label: 'EMAIL', href: 'mailto:booking@circuitbreaker.agency', icon: Mail },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-cb-black border-t border-cb-concrete relative overflow-hidden">
      {/* Top Electric Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cb-red to-transparent shadow-[0_0_10px_#ff0033]" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand - DARKER */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-cb-red drop-shadow-[0_0_10px_rgba(255,0,51,0.8)]" />
              <span className="font-[family-name:var(--font-space)] text-xl font-bold tracking-tighter uppercase">
                <span className="text-cb-white">CIRCUIT</span>
                <span className="text-cb-red glow-text">BREAKER</span>
              </span>
            </Link>
            <p className="text-cb-muted text-sm mb-8 leading-relaxed">
              Premier Hard Techno booking agency. Representing the finest industrial electronic music talent across Europe.
            </p>
            {/* Social Links - DARKER */}
            <div className="flex gap-3">
              {footerLinks.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 flex items-center justify-center bg-cb-gray border border-cb-concrete text-cb-muted hover:border-cb-red hover:text-cb-red hover:bg-cb-red/5 transition-all duration-200"
                  title={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - SHARPER */}
          <div>
            <h3 className="text-cb-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cb-red" />
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cb-muted hover:text-cb-white transition-colors text-sm uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="text-cb-dim group-hover:text-cb-red transition-colors">//</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - SHARPER */}
          <div>
            <h3 className="text-cb-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cb-red" />
              SERVICES
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cb-muted hover:text-cb-white transition-colors text-sm uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="text-cb-dim group-hover:text-cb-red transition-colors">//</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - DARKER */}
          <div>
            <h3 className="text-cb-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <Radio className="w-4 h-4 text-cb-red" />
              TRANSMISSIONS
            </h3>
            <p className="text-cb-muted text-sm mb-4">
              Subscribe for artist announcements and underground intel.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                className="px-4 py-3 bg-cb-gray border border-cb-concrete text-cb-white placeholder:text-cb-dim focus:outline-none focus:border-cb-red transition-colors text-sm uppercase tracking-wider"
              />
              <button type="submit" className="btn-primary text-sm py-3">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar - SHARPER */}
        <div className="mt-16 pt-8 border-t border-cb-concrete flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cb-dim text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} CIRCUIT BREAKER // ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-cb-dim hover:text-cb-red transition-colors text-xs uppercase tracking-widest">
              PRIVACY
            </Link>
            <Link href="/terms" className="text-cb-dim hover:text-cb-red transition-colors text-xs uppercase tracking-widest">
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
