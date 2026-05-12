import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Newspaper, Calendar, ArrowRight, Tag, Clock } from 'lucide-react'
import Image from 'next/image'

// News data - this would come from a database/CMS
const newsItems = [
  {
    id: 1,
    title: 'VOLTAGE Announces European Warehouse Tour',
    excerpt: 'The industrial powerhouse is taking their raw energy to warehouses across Berlin, Amsterdam, and London this fall.',
    category: 'Tour',
    date: '2026-05-10',
    readTime: '3 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'NEURAL Drops New EP "Mechanical Soul"',
    excerpt: 'Hypnotic schranz meets emotional depth in this 4-track release out now on all platforms.',
    category: 'Release',
    date: '2026-05-08',
    readTime: '2 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Circuit Breaker Expands to Paris',
    excerpt: 'We\'re excited to announce our expansion into the French market with new partnerships and events.',
    category: 'Label',
    date: '2026-05-05',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'PULSE Live at Awakenings Festival',
    excerpt: 'Acid-infused set recorded live at the legendary Dutch techno festival. Watch the full performance.',
    category: 'Live',
    date: '2026-05-01',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'KINETIC Joins the Roster',
    excerpt: 'Dark EBM influences meet hard techno energy. Welcome our newest artist to the Circuit Breaker family.',
    category: 'Artist',
    date: '2026-04-28',
    readTime: '2 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Behind the Decks: Studio Session with SURGE',
    excerpt: 'An exclusive look into the production process behind SURGE\'s latest warehouse weapons.',
    category: 'Behind the Scenes',
    date: '2026-04-25',
    readTime: '6 min read',
    featured: false,
  },
]

const categories = ['All', 'Tour', 'Release', 'Label', 'Live', 'Artist', 'Behind the Scenes']

export default function NewsPage() {
  const featuredNews = newsItems.find(item => item.featured)
  const regularNews = newsItems.filter(item => !item.featured)

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
              <Newspaper className="w-4 h-4" />
              <span>Latest Updates</span>
            </div>
            <h1 className="font-[family-name:var(--font-gothic)] text-5xl sm:text-6xl md:text-7xl leading-none mb-6">
              <span className="text-cb-white">Circuit </span>
              <span className="text-cb-purple glow-purple">News</span>
            </h1>
            <p className="text-cb-muted max-w-2xl mx-auto text-lg">
              Stay updated with the latest releases, tours, and behind-the-scenes content from our artists.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 text-xs uppercase tracking-wider border transition-all duration-300
                  ${index === 0 
                    ? 'bg-cb-purple border-cb-purple text-cb-white' 
                    : 'border-cb-concrete text-cb-muted hover:border-cb-purple hover:text-cb-white'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {featuredNews && (
            <div className="mb-16">
              <div className="group relative bg-cb-abyss border border-cb-concrete overflow-hidden
                           hover:border-cb-purple transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] md:aspect-auto relative overflow-hidden bg-gradient-to-br from-cb-gray to-cb-black">
                    <div className="absolute inset-0 bg-gradient-to-r from-cb-black/50 to-transparent z-10" />
                    
                    {/* Placeholder Pattern */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-cb-concrete">
                        <Newspaper className="w-32 h-32 opacity-10" />
                      </div>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-cb-purple text-cb-white text-xs uppercase tracking-wider font-bold z-20">
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-cb-muted mb-4">
                      <span className="flex items-center gap-1 text-cb-purple">
                        <Tag className="w-3 h-3" />
                        {featuredNews.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {featuredNews.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featuredNews.readTime}
                      </span>
                    </div>

                    <h2 className="font-[family-name:var(--font-gothic)] text-3xl md:text-4xl text-cb-white mb-4 
                                 group-hover:text-cb-purple transition-colors">
                      {featuredNews.title}
                    </h2>
                    
                    <p className="text-cb-muted text-lg mb-6">
                      {featuredNews.excerpt}
                    </p>

                    <button className="btn-outline text-xs py-3 w-fit group/btn">
                      <span className="flex items-center gap-2">
                        READ FULL STORY
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Accent Lines */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cb-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cb-purple opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news, index) => (
              <article
                key={news.id}
                className="group relative bg-cb-abyss border border-cb-concrete overflow-hidden
                         hover:border-cb-purple transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-b from-cb-gray to-cb-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-cb-black via-transparent to-transparent z-10" />
                  
                  {/* Placeholder Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-cb-concrete">
                      <Newspaper className="w-16 h-16 opacity-10" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cb-concrete/50 text-cb-white text-xs uppercase tracking-wider font-bold z-20">
                    {news.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cb-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-cb-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-4 text-xs text-cb-dim mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.readTime}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-gothic)] text-xl text-cb-white mb-3 
                               group-hover:text-cb-purple transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-cb-muted text-sm mb-6 line-clamp-2">
                    {news.excerpt}
                  </p>

                  <button className="w-full btn-outline text-xs py-3 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      READ MORE
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cb-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 
                              shadow-[0_0_20px_#9333ea]" />
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="btn-outline inline-flex items-center gap-2">
              Load More News
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 relative">
            <div className="border border-cb-concrete bg-cb-abyss/50 p-8 md:p-12">
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-cb-purple" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-cb-purple" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-cb-purple" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-cb-purple" />
              
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-[family-name:var(--font-gothic)] text-3xl sm:text-4xl mb-4">
                  <span className="text-cb-white">Stay in the </span>
                  <span className="text-cb-purple glow-purple">Loop</span>
                </h2>
                <p className="text-cb-muted mb-8">
                  Subscribe to our newsletter for exclusive news, early access to tickets, and behind-the-scenes content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                             placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
