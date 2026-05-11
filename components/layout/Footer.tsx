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
      {/* Top Purple Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cb-purple to-transparent shadow-[0_0_10px_#6b21a8]" />
      
      {/* Cybersigil Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 30 L80 35 L65 50 L70 70 L50 60 L30 70 L35 50 L20 35 L40 30 Z' fill='none' stroke='%236b21a8' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%234c1d95' stroke-width='0.3'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-cb-purple drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
              <span className="font-[family-name:var(--font-gothic)] text-xl leading-none">
                <span className="text-cb-white">Circuit</span>
                <span className="text-cb-purple glow-purple">Breaker</span>
              </span>
            </Link>
            <p className="text-cb-muted text-sm mb-8 leading-relaxed">
              Premier Hard Techno booking agency. Representing the finest industrial electronic music talent across Europe.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 flex items-center justify-center bg-cb-gray border border-cb-concrete text-cb-muted hover:border-cb-purple hover:text-cb-purple hover:bg-cb-purple/5 transition-all duration-200"
                  title={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-cb-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cb-purple" />
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cb-muted hover:text-cb-white transition-colors text-sm uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="text-cb-dim group-hover:text-cb-purple transition-colors">//</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-cb-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cb-purple" />
              SERVICES
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cb-muted hover:text-cb-white transition-colors text-sm uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="text-cb-dim group-hover:text-cb-purple transition-colors">//</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-cb-white font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <Radio className="w-4 h-4 text-cb-purple" />
              TRANSMISSIONS
            </h3>
            <p className="text-cb-muted text-sm mb-4">
              Subscribe for artist announcements and underground intel.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                className="px-4 py-3 bg-cb-gray border border-cb-concrete text-cb-white placeholder:text-cb-dim focus:outline-none focus:border-cb-purple transition-colors text-sm uppercase tracking-wider"
              />
              <button type="submit" className="btn-primary text-sm py-3">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cb-concrete flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cb-dim text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} CIRCUIT BREAKER // ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-cb-dim hover:text-cb-purple transition-colors text-xs uppercase tracking-widest">
              PRIVACY
            </Link>
            <Link href="/terms" className="text-cb-dim hover:text-cb-purple transition-colors text-xs uppercase tracking-widest">
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
