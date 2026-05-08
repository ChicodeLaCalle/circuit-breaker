import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/layout/Hero'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Disc3, Radio, FileText } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-cb-black">
      <Navigation />
      <Hero />
      
      {/* Featured Artists Preview - DARKER */}
      <section className="py-24 bg-cb-void relative">
        {/* Section Divider Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cb-red to-transparent shadow-[0_0_10px_#ff0033]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-cb-red text-xs uppercase tracking-[0.3em] mb-4">
              <Disc3 className="w-4 h-4" />
              <span>ROSTER</span>
            </div>
            <h2 className="font-[family-name:var(--font-space)] text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4">
              FEATURED <span className="text-cb-red glow-text">ARTISTS</span>
            </h2>
            <p className="text-cb-muted max-w-2xl mx-auto">
              Discover our roster of Hard Techno artists. From established names to rising talent, 
              we represent the best in industrial electronic music.
            </p>
          </div>

          {/* Artist Cards Grid - DARKER STYLE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative aspect-[3/4] bg-cb-black border border-cb-concrete overflow-hidden 
                         hover:border-cb-red transition-all duration-300"
                style={{
                  boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)'
                }}
              >
                {/* Placeholder for artist image */}
                <div className="absolute inset-0 bg-gradient-to-t from-cb-black via-cb-abyss to-cb-gray" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cb-concrete group-hover:border-cb-red transition-colors" />
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cb-concrete group-hover:border-cb-red transition-colors" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cb-concrete group-hover:border-cb-red transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cb-concrete group-hover:border-cb-red transition-colors" />
                
                {/* ID Number */}
                <div className="absolute top-4 right-4 text-cb-dim text-xs font-mono">
                  0{i}
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-cb-red text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      // HARD TECHNO
                    </div>
                    <h3 className="font-[family-name:var(--font-space)] text-2xl font-black uppercase tracking-tighter text-cb-white mb-1 
                                 group-hover:glow-text transition-all">
                      ARTIST {i}
                    </h3>
                    <p className="text-cb-muted text-sm mb-4 font-mono">145-160 BPM</p>
                    <button className="text-xs text-cb-red uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all 
                                     flex items-center gap-2 hover:gap-3">
                      VIEW PROFILE <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Red Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-cb-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
                              shadow-[0_0_20px_#ff0033]" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/roster" className="btn-outline inline-flex items-center gap-3">
              <span>VIEW FULL ROSTER</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* EPK Download CTA - DARKER INDUSTRIAL */}
      <section className="py-24 bg-cb-black relative overflow-hidden">
        {/* Industrial Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,0,51,0.1) 10px,
                rgba(255,0,51,0.1) 20px
              )`
            }}
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-cb-void via-transparent to-cb-void" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-cb-red text-xs uppercase tracking-[0.3em] mb-4">
              <FileText className="w-4 h-4" />
              <span>PRESS KIT</span>
            </div>
            <h2 className="font-[family-name:var(--font-space)] text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-6">
              PRESS & <span className="text-cb-red glow-text">PROMOTERS</span>
            </h2>
            <p className="text-cb-muted mb-8 leading-relaxed">
              Download high-resolution photos, bios, and technical riders instantly. 
              Our EPKs contain everything you need for booking and promotion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/roster" className="btn-primary">
                ACCESS EPKs
              </a>
              <span className="text-cb-dim text-sm font-mono">
                INSTANT DOWNLOAD // NO SIGNUP REQUIRED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview - DARKER */}
      <section className="py-24 bg-cb-void relative">
        {/* Section Divider Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cb-concrete to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-cb-red text-xs uppercase tracking-[0.3em] mb-2">
                <Radio className="w-4 h-4" />
                <span>TRANSMISSIONS</span>
              </div>
              <h2 className="font-[family-name:var(--font-space)] text-3xl font-black uppercase tracking-tighter">
                LATEST <span className="text-cb-red glow-text">NEWS</span>
              </h2>
            </div>
            <a href="/news" className="text-cb-muted hover:text-cb-red transition-colors text-sm uppercase tracking-widest hidden sm:block">
              VIEW ALL //
            </a>
          </div>

          {/* News Grid - DARKER CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="group bg-cb-black border border-cb-concrete hover:border-cb-red transition-all duration-300"
                style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)' }}
              >
                <div className="aspect-video bg-cb-gray relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-cb-black to-transparent" />
                  {/* Placeholder for news image */}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-cb-red text-xs font-bold uppercase tracking-wider">
                      {i === 1 ? 'NEW SIGNING' : i === 2 ? 'TOUR UPDATE' : 'FESTIVAL'}
                    </span>
                    <span className="text-cb-dim text-xs">|</span>
                    <span className="text-cb-dim text-xs font-mono">DEC {10 + i}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-space)] text-lg font-bold uppercase tracking-tight text-cb-white 
                               group-hover:text-cb-red transition-colors mb-2">
                    NEWS TITLE {i}
                  </h3>
                  <p className="text-cb-muted text-sm mb-4 line-clamp-2">
                    Brief description of the news item goes here with some details...
                  </p>
                  <span className="text-cb-red text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity 
                                 flex items-center gap-1">
                    READ MORE <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - DARKER */}
      <section className="py-24 bg-cb-black relative">
        {/* Electric Line Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cb-red to-transparent shadow-[0_0_10px_#ff0033]" />
        
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-cb-gray/20 via-cb-black to-cb-black" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-cb-red text-xs uppercase tracking-[0.3em] mb-4">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>BOOKING INQUIRIES</span>
          </div>
          <h2 className="font-[family-name:var(--font-space)] text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-6">
            READY TO <span className="text-cb-red glow-text">BOOK?</span>
          </h2>
          <p className="text-cb-muted text-lg mb-8 max-w-2xl mx-auto">
            Get in touch to discuss availability, pricing, and logistics. 
            We handle everything from booking to tour management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/contact" className="btn-primary text-base">
              CONTACT US
            </a>
            <a href="mailto:booking@circuitbreaker.agency" className="text-cb-muted hover:text-cb-white transition-colors font-mono text-sm">
              booking@circuitbreaker.agency
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
