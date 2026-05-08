import Link from 'next/link'
import { Zap, Instagram, Youtube, Mail } from 'lucide-react'

const footerLinks = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Roster', href: '/roster' },
    { label: 'Artists', href: '/artists' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Artist Booking', href: '/contact' },
    { label: 'Event Management', href: '/contact' },
    { label: 'Tour Planning', href: '/contact' },
    { label: 'Press & PR', href: '/contact' },
  ],
  social: [
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'YouTube', href: '#', icon: Youtube },
    { label: 'Email', href: 'mailto:booking@circuitbreaker.agency', icon: Mail },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-cb-dark border-t border-cb-concrete">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-cb-red" />
              <span className="font-[family-name:var(--font-space)] text-xl font-bold tracking-tighter uppercase">
                Circuit<span className="text-cb-red">Breaker</span>
              </span>
            </Link>
            <p className="text-cb-muted text-sm mb-6">
              Premier Hard Techno booking agency. Representing the finest industrial electronic music talent across Europe.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 flex items-center justify-center border border-cb-concrete text-cb-muted hover:border-cb-red hover:text-cb-red transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-cb-white font-semibold uppercase tracking-wider text-sm mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cb-muted hover:text-cb-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-cb-white font-semibold uppercase tracking-wider text-sm mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cb-muted hover:text-cb-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-cb-white font-semibold uppercase tracking-wider text-sm mb-4">
              Newsletter
            </h3>
            <p className="text-cb-muted text-sm mb-4">
              Subscribe for artist announcements and tour dates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-cb-gray border border-cb-concrete text-cb-white placeholder:text-cb-muted focus:outline-none focus:border-cb-red transition-colors text-sm"
              />
              <button type="submit" className="btn-primary text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cb-concrete flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cb-muted text-xs">
            © {new Date().getFullYear()} Circuit Breaker. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-cb-muted hover:text-cb-red transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-cb-muted hover:text-cb-red transition-colors text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
