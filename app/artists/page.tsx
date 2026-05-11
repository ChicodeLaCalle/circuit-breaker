import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Disc3, Radio, MapPin, Music, Calendar, Download, Mail, Play, ExternalLink } from 'lucide-react'
import Image from 'next/image'

// This would normally come from a database/API
const artist = {
  name: 'VOLTAGE',
  location: 'Berlin, Germany',
  genre: ['Hard Techno', 'Industrial', 'Schranz'],
  bpmRange: '145-160',
  yearsActive: 5,
  status: 'available',
  
  bio: {
    short: 'Industrial powerhouse delivering raw warehouse energy across Europe.',
    full: `VOLTAGE has established himself as one of the most relentless forces in the Hard Techno scene. With releases on Lobster Theremin and R-Label Group, his sound combines pounding industrial rhythms with hypnotic warehouse atmospheres.

His DJ sets are known for their unwavering intensity, seamlessly blending classic schranz elements with modern hard techno production. Having played at legendary venues including Berghain, Tresor, and Radion, VOLTAGE brings authentic underground energy to every performance.

Beyond DJing, he's an accomplished producer with releases on some of the most respected labels in the genre. His tracks have been supported by the likes of Amelie Lens, 999999999, and I Hate Models.`
  },
  
  images: {
    hero: '/images/artists/voltage-hero.jpg',
    gallery: [
      '/images/artists/voltage-1.jpg',
      '/images/artists/voltage-2.jpg',
      '/images/artists/voltage-3.jpg',
    ]
  },
  
  social: {
    soundcloud: 'https://soundcloud.com/voltage',
    instagram: 'https://instagram.com/voltage',
    residentAdvisor: 'https://ra.co/dj/voltage',
  },
  
  soundcloudSets: [
    { title: 'Warehouse Podcast 047', url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789', duration: '1:32:00' },
    { title: 'Berghain Closing Set', url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987654321', duration: '2:15:00' },
    { title: 'Industrial Mix Series', url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/456789123', duration: '1:45:00' },
  ],
  
  videos: [
    { title: 'Tresor Live - June 2024', thumbnail: '/images/artists/video-1.jpg' },
    { title: 'Radion Amsterdam Closing', thumbnail: '/images/artists/video-2.jpg' },
    { title: 'Festival Set 2024', thumbnail: '/images/artists/video-3.jpg' },
  ],
  
  upcomingDates: [
    { date: '2024-06-15', venue: 'Tresor', city: 'Berlin', country: 'DE', tickets: '#' },
    { date: '2024-07-22', venue: 'Radion', city: 'Amsterdam', country: 'NL', tickets: '#' },
    { date: '2024-08-10', venue: 'Fabric', city: 'London', country: 'UK', tickets: '#' },
  ],
  
  epk: {
    photos: '/epk/voltage-photos.zip',
    rider: '/epk/voltage-rider.pdf',
    techSpecs: '/epk/voltage-tech.pdf',
    bio: '/epk/voltage-bio.pdf',
  }
}

export default function ArtistPage() {
  return (
    <main className="min-h-screen bg-cb-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cb-purple/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cb-violet/8 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-cb-muted text-sm mb-8">
            <a href="/roster" className="hover:text-cb-purple transition-colors">ROSTER</a>
            <span>/</span>
            <span className="text-cb-white">{artist.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image & Quick Info */}
            <div>
              {/* Hero Image Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-b from-cb-gray to-cb-black border border-cb-concrete relative overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Disc3 className="w-32 h-32 text-cb-concrete opacity-20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cb-black via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className={`absolute top-6 left-6 px-4 py-2 text-xs uppercase tracking-wider font-bold
                  ${artist.status === 'available' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 
                    artist.status === 'on-tour' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'}`}>
                  {artist.status}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 border border-cb-concrete p-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-cb-white">{artist.yearsActive}+</div>
                  <div className="text-xs uppercase tracking-wider text-cb-muted">Years</div>
                </div>
                <div className="text-center border-x border-cb-concrete">
                  <div className="text-2xl font-black text-cb-white">{artist.bpmRange}</div>
                  <div className="text-xs uppercase tracking-wider text-cb-muted">BPM</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-cb-white">EU</div>
                  <div className="text-xs uppercase tracking-wider text-cb-muted">Based</div>
                </div>
              </div>
            </div>
            
            {/* Right: Info */}
            <div>
              <div className="flex items-center gap-2 text-cb-purple text-xs uppercase tracking-[0.3em] mb-4">
                <Radio className="w-4 h-4" />
                <span>Artist Profile</span>
              </div>
              
              <h1 className="font-[family-name:var(--font-gothic)] text-6xl sm:text-7xl leading-none mb-4">
                <span className="text-cb-white">{artist.name}</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-cb-muted mb-6">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {artist.location}
                </span>
                <span className="flex items-center gap-1">
                  <Music className="w-4 h-4" />
                  {artist.genre.join(' / ')}
                </span>
              </div>
              
              <p className="text-cb-off-white text-lg mb-8 leading-relaxed">
                {artist.bio.short}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#booking" className="btn-primary flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Book Artist
                </a>
                <a href="#epk" className="btn-outline flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download EPK
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {artist.social.soundcloud && (
                  <a href={artist.social.soundcloud} target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 flex items-center justify-center border border-cb-concrete text-cb-muted hover:border-cb-purple hover:text-cb-purple transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {artist.social.instagram && (
                  <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 flex items-center justify-center border border-cb-concrete text-cb-muted hover:border-cb-purple hover:text-cb-purple transition-all">
                    <span className="text-xs font-bold">IG</span>
                  </a>
                )}
                {artist.social.residentAdvisor && (
                  <a href={artist.social.residentAdvisor} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 flex items-center justify-center border border-cb-concrete text-cb-muted hover:border-cb-purple hover:text-cb-purple transition-all">
                    <span className="text-xs font-bold">RA</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-20 border-t border-cb-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-gothic)] text-3xl mb-8">
            <span className="text-cb-white">Biography</span>
          </h2>
          <div className="max-w-3xl">
            <p className="text-cb-muted leading-relaxed whitespace-pre-line">
              {artist.bio.full}
            </p>
          </div>
        </div>
      </section>
      
      {/* SoundCloud Sets Section */}
      <section className="py-20 border-t border-cb-concrete bg-cb-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-gothic)] text-3xl mb-2">
            <span className="text-cb-white">SoundCloud </span>
            <span className="text-cb-purple glow-purple">Sets</span>
          </h2>
          <p className="text-cb-muted mb-8">Latest mixes and podcasts</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artist.soundcloudSets.map((set, index) => (
              <div key={index} className="bg-cb-black border border-cb-concrete p-4">
                <div className="aspect-video bg-cb-gray mb-4 flex items-center justify-center">
                  <Play className="w-12 h-12 text-cb-purple opacity-50" />
                </div>
                <h3 className="text-cb-white font-semibold mb-1">{set.title}</h3>
                <p className="text-cb-dim text-sm mb-3">{set.duration}</p>
                <button className="text-cb-purple text-sm uppercase tracking-wider hover:text-cb-purple-light transition-colors flex items-center gap-1">
                  Listen <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Live Videos Section */}
      <section className="py-20 border-t border-cb-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-gothic)] text-3xl mb-2">
            <span className="text-cb-white">Live </span>
            <span className="text-cb-purple glow-purple">Sets</span>
          </h2>
          <p className="text-cb-muted mb-8">Performance videos</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artist.videos.map((video, index) => (
              <div key={index} className="group relative aspect-video bg-cb-gray border border-cb-concrete overflow-hidden cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-cb-purple opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cb-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-cb-white font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tour Dates Section */}
      <section className="py-20 border-t border-cb-concrete bg-cb-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-gothic)] text-3xl mb-2">
            <span className="text-cb-white">Tour </span>
            <span className="text-cb-purple glow-purple">Dates</span>
          </h2>
          <p className="text-cb-muted mb-8">Upcoming performances</p>
          
          <div className="space-y-4">
            {artist.upcomingDates.map((date, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-cb-concrete bg-cb-black hover:border-cb-purple transition-colors group">
                <div className="flex items-center gap-6 mb-4 sm:mb-0">
                  <div className="text-center min-w-[80px]">
                    <div className="text-2xl font-black text-cb-purple">{new Date(date.date).getDate()}</div>
                    <div className="text-xs uppercase tracking-wider text-cb-muted">
                      {new Date(date.date).toLocaleString('default', { month: 'short' })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-cb-white font-semibold text-lg">{date.venue}</h3>
                    <p className="text-cb-muted">{date.city}, {date.country}</p>
                  </div>
                </div>
                <a href={date.tickets} className="btn-outline text-xs py-2 px-4">
                  Tickets
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* EPK Section */}
      <section id="epk" className="py-20 border-t border-cb-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-cb-purple text-xs uppercase tracking-[0.3em] mb-4">
              <Download className="w-4 h-4" />
              <span>Press Kit</span>
            </div>
            <h2 className="font-[family-name:var(--font-gothic)] text-4xl mb-4">
              <span className="text-cb-white">Download </span>
              <span className="text-cb-purple glow-purple">EPK</span>
            </h2>
            <p className="text-cb-muted max-w-2xl mx-auto">
              Everything you need for promotion and booking. High-res photos, technical riders, and bio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href={artist.epk.photos} className="group p-6 border border-cb-concrete bg-cb-abyss hover:border-cb-purple transition-all text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-cb-concrete group-hover:border-cb-purple transition-colors">
                <Download className="w-5 h-5 text-cb-purple" />
              </div>
              <h3 className="text-cb-white font-semibold mb-1">Photos</h3>
              <p className="text-cb-dim text-sm">High-res images</p>
            </a>
            
            <a href={artist.epk.rider} className="group p-6 border border-cb-concrete bg-cb-abyss hover:border-cb-purple transition-all text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-cb-concrete group-hover:border-cb-purple transition-colors">
                <Download className="w-5 h-5 text-cb-purple" />
              </div>
              <h3 className="text-cb-white font-semibold mb-1">Tech Rider</h3>
              <p className="text-cb-dim text-sm">Stage setup & equipment</p>
            </a>
            
            <a href={artist.epk.techSpecs} className="group p-6 border border-cb-concrete bg-cb-abyss hover:border-cb-purple transition-all text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-cb-concrete group-hover:border-cb-purple transition-colors">
                <Download className="w-5 h-5 text-cb-purple" />
              </div>
              <h3 className="text-cb-white font-semibold mb-1">Tech Specs</h3>
              <p className="text-cb-dim text-sm">Detailed requirements</p>
            </a>
            
            <a href={artist.epk.bio} className="group p-6 border border-cb-concrete bg-cb-abyss hover:border-cb-purple transition-all text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-cb-concrete group-hover:border-cb-purple transition-colors">
                <Download className="w-5 h-5 text-cb-purple" />
              </div>
              <h3 className="text-cb-white font-semibold mb-1">Biography</h3>
              <p className="text-cb-dim text-sm">Short & long versions</p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section id="booking" className="py-20 border-t border-cb-concrete bg-cb-void">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-gothic)] text-4xl mb-4">
            <span className="text-cb-white">Book </span>
            <span className="text-cb-purple glow-purple">{artist.name}</span>
          </h2>
          <p className="text-cb-muted mb-8">
            Ready to bring the underground energy to your event? Get in touch to discuss availability and pricing.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-base">
            <Mail className="w-5 h-5" />
            Contact for Booking
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
