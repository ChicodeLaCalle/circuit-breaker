import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Disc3, Radio, ArrowRight, MapPin, Music } from 'lucide-react'
import Image from 'next/image'

// Artist data - this would come from a database/API
const artists = [
  {
    id: 1,
    name: 'VOLTAGE',
    genre: 'Hard Techno / Industrial',
    bpm: '145-160',
    location: 'Berlin, DE',
    status: 'available',
    description: 'Industrial powerhouse delivering raw warehouse energy.',
  },
  {
    id: 2,
    name: 'NEURAL',
    genre: 'Schranz / Hardgroove',
    bpm: '150-165',
    location: 'Amsterdam, NL',
    status: 'on-tour',
    description: 'Hypnotic rhythms with mechanical precision.',
  },
  {
    id: 3,
    name: 'PULSE',
    genre: 'Hard Techno / Acid',
    bpm: '140-155',
    location: 'London, UK',
    status: 'available',
    description: 'Acid-infused hard techno for the underground.',
  },
  {
    id: 4,
    name: 'KINETIC',
    genre: 'Industrial / EBM',
    bpm: '138-152',
    location: 'Paris, FR',
    status: 'limited',
    description: 'Dark EBM influences meet hard techno energy.',
  },
  {
    id: 5,
    name: 'SURGE',
    genre: 'Hard Techno / Raw',
    bpm: '147-162',
    location: 'Milan, IT',
    status: 'available',
    description: 'Raw, unfiltered warehouse power.',
  },
]

export default function RosterPage() {
  return (
    <main className="min-h-screen bg-cb-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cb-purple/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cb-violet/8 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-cb-purple text-xs uppercase tracking-[0.3em] mb-4">
              <Disc3 className="w-4 h-4" />
              <span>Our Artists</span>
            </div>
            <h1 className="font-[family-name:var(--font-gothic)] text-5xl sm:text-6xl md:text-7xl leading-none mb-6">
              <span className="text-cb-white">The </span>
              <span className="text-cb-purple glow-purple">Roster</span>
            </h1>
            <p className="text-cb-muted max-w-2xl mx-auto text-lg">
              Premier Hard Techno artists representing the darkest corners of industrial electronic music.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex justify-center gap-12 mb-16 border-y border-cb-concrete py-6">
            <div className="text-center">
              <div className="text-3xl font-black text-cb-white">{artists.length}</div>
              <div className="text-xs uppercase tracking-widest text-cb-muted">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-cb-white">
                {artists.filter(a => a.status === 'available').length}
              </div>
              <div className="text-xs uppercase tracking-widest text-cb-muted">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-cb-white">EU</div>
              <div className="text-xs uppercase tracking-widest text-cb-muted">Coverage</div>
            </div>
          </div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div
                key={artist.id}
                className="group relative bg-cb-abyss border border-cb-concrete overflow-hidden
                         hover:border-cb-purple transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-b from-cb-gray to-cb-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-cb-black via-transparent to-transparent z-10" />
                  
                  {/* Placeholder Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-cb-concrete">
                      <Disc3 className="w-20 h-20 opacity-20" />
                    </div>
                  </div>

                  {/* ID Number */}
                  <div className="absolute top-4 right-4 text-cb-dim text-xs font-mono z-20">
                    0{artist.id}
                  </div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-bold z-20
                    ${artist.status === 'available' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 
                      artist.status === 'on-tour' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'}`}>
                    {artist.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cb-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-cb-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h2 className="font-[family-name:var(--font-gothic)] text-3xl text-cb-white mb-2 
                               group-hover:text-cb-purple transition-colors">
                    {artist.name}
                  </h2>
                  
                  <div className="flex items-center gap-4 text-sm text-cb-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Music className="w-3 h-3" />
                      {artist.genre}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-cb-dim mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {artist.location}
                    </span>
                    <span className="font-mono">{artist.bpm} BPM</span>
                  </div>
                  
                  <p className="text-cb-muted text-sm mb-6 line-clamp-2">
                    {artist.description}
                  </p>

                  <button className="w-full btn-outline text-xs py-3 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      VIEW PROFILE
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cb-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 
                              shadow-[0_0_20px_#9333ea]" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 text-cb-purple text-xs uppercase tracking-[0.3em] mb-4">
              <Radio className="w-4 h-4" />
              <span>Can't find what you're looking for?</span>
            </div>
            <h2 className="font-[family-name:var(--font-gothic)] text-3xl sm:text-4xl mb-6">
              <span className="text-cb-white">Get in </span>
              <span className="text-cb-purple glow-purple">Touch</span>
            </h2>
            <p className="text-cb-muted mb-8 max-w-xl mx-auto">
              We work with a network of artists across Europe. If you don't see what you need, 
              contact us and we'll find the perfect match for your event.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
