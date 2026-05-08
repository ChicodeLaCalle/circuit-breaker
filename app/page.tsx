import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/layout/Hero'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Featured Artists Preview */}
      <section className="py-24 bg-cb-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-space)] text-3xl sm:text-4xl font-bold uppercase tracking-tighter mb-4">
              Featured <span className="text-cb-red">Artists</span>
            </h2>
            <p className="text-cb-muted max-w-2xl mx-auto">
              Discover our roster of Hard Techno artists. From established names to rising talent, we represent the best in industrial electronic music.
            </p>
          </div>

          {/* Artist Cards Grid - Placeholder for now */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative aspect-[3/4] bg-cb-gray border border-cb-concrete overflow-hidden hover:border-cb-red transition-colors duration-300"
              >
                {/* Placeholder for artist image */}
                <div className="absolute inset-0 bg-gradient-to-t from-cb-black via-cb-gray to-cb-dark" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-[family-name:var(--font-space)] text-2xl font-bold uppercase tracking-tighter text-cb-white mb-1">
                      Artist {i}
                    </h3>
                    <p className="text-cb-muted text-sm mb-4">Hard Techno / Industrial</p>
                    <button className="btn-outline text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      View Profile
                    </button>
                  </div>
                </div>

                {/* Red Accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-cb-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/roster" className="btn-outline inline-flex items-center gap-2">
              View Full Roster
            </a>
          </div>
        </div>
      </section>

      {/* EPK Download CTA */}
      <section className="py-24 bg-cb-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,0,0,0.1) 10px,
                rgba(255,0,0,0.1) 20px
              )`
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-space)] text-3xl sm:text-4xl font-bold uppercase tracking-tighter mb-6">
            Press & <span className="text-cb-red">Promoters</span>
          </h2>
          <p className="text-cb-muted max-w-2xl mx-auto mb-8">
            Download high-resolution photos, bios, and technical riders instantly. Our EPKs contain everything you need for booking and promotion.
          </p>
          <a href="/roster" className="btn-primary inline-flex items-center gap-2">
            Access EPKs
          </a>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-24 bg-cb-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-[family-name:var(--font-space)] text-3xl font-bold uppercase tracking-tighter">
              Latest <span className="text-cb-red">News</span>
            </h2>
            <a href="/news" className="text-cb-muted hover:text-cb-red transition-colors text-sm uppercase tracking-wider">
              View All →
            </a>
          </div>

          {/* News Grid - Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="group bg-cb-gray border border-cb-concrete hover:border-cb-muted transition-colors duration-300"
              >
                <div className="aspect-video bg-cb-dark" />
                <div className="p-6">
                  <div className="text-cb-red text-xs uppercase tracking-wider mb-2">
                    {i === 1 ? 'New Signing' : i === 2 ? 'Tour Update' : 'Festival'}
                  </div>
                  <h3 className="font-[family-name:var(--font-space)] text-lg font-bold uppercase tracking-tight text-cb-white group-hover:text-cb-red transition-colors mb-2">
                    News Title {i}
                  </h3>
                  <p className="text-cb-muted text-sm mb-4">
                    Brief description of the news item goes here...
                  </p>
                  <span className="text-cb-muted text-xs">Dec {10 + i}, 2024</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-b from-cb-dark to-cb-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-space)] text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-6">
            Ready to <span className="text-cb-red">Book?</span>
          </h2>
          <p className="text-cb-muted text-lg mb-8 max-w-2xl mx-auto">
            Get in touch to discuss availability, pricing, and logistics. We handle everything from booking to tour management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="mailto:booking@circuitbreaker.agency" className="text-cb-muted hover:text-cb-white transition-colors">
              booking@circuitbreaker.agency
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
