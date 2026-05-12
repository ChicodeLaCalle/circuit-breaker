import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Calendar, MapPin, Users, Clock, Zap, Check, ArrowRight, Disc3, Star, ChevronRight } from 'lucide-react'
import { useState } from 'react'

// Artist data
const artists = [
  { id: 'voltage', name: 'VOLTAGE', genre: 'Hard Techno / Industrial', bpm: '145-160', price: '€€€', available: true },
  { id: 'neural', name: 'NEURAL', genre: 'Schranz / Hardgroove', bpm: '150-165', price: '€€€', available: true },
  { id: 'pulse', name: 'PULSE', genre: 'Hard Techno / Acid', bpm: '140-155', price: '€€', available: true },
  { id: 'kinetic', name: 'KINETIC', genre: 'Industrial / EBM', bpm: '138-152', price: '€€', available: false },
  { id: 'surge', name: 'SURGE', genre: 'Hard Techno / Raw', bpm: '147-162', price: '€€€', available: true },
]

// Booking steps
const steps = [
  { id: 1, name: 'Artist', icon: Disc3 },
  { id: 2, name: 'Event', icon: Calendar },
  { id: 3, name: 'Details', icon: MapPin },
  { id: 4, name: 'Confirm', icon: Check },
]

export default function BookNowPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    location: '',
    venue: '',
    capacity: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-cb-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cb-purple/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cb-violet/8 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-cb-purple text-xs uppercase tracking-[0.3em] mb-4">
              <Zap className="w-4 h-4" />
              <span>Quick Booking</span>
            </div>
            <h1 className="font-[family-name:var(--font-gothic)] text-5xl sm:text-6xl md:text-7xl leading-none mb-6">
              <span className="text-cb-white">Book </span>
              <span className="text-cb-purple glow-purple">Now</span>
            </h1>
            <p className="text-cb-muted max-w-2xl mx-auto text-lg">
              Secure your favorite artist for your next event. Fast response within 24 hours.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep >= step.id
                const isCurrent = currentStep === step.id
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300
                          ${isCurrent 
                            ? 'bg-cb-purple border-cb-purple text-cb-white shadow-[0_0_20px_#9333ea]' 
                            : isActive 
                              ? 'bg-cb-purple/20 border-cb-purple text-cb-purple' 
                              : 'bg-cb-abyss border-cb-concrete text-cb-dim'}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`mt-2 text-xs uppercase tracking-wider ${isActive ? 'text-cb-white' : 'text-cb-dim'}`}>
                        {step.name}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 sm:w-24 h-0.5 mx-2 sm:mx-4 transition-colors ${
                        currentStep > step.id ? 'bg-cb-purple' : 'bg-cb-concrete'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Booking Form Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-cb-abyss border border-cb-concrete p-8 md:p-12">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cb-purple" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cb-purple" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cb-purple" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cb-purple" />

              {/* Step 1: Select Artist */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="font-[family-name:var(--font-gothic)] text-2xl text-cb-white mb-2">
                      Select an Artist
                    </h2>
                    <p className="text-cb-muted text-sm">
                      Choose from our roster of hard techno artists
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {artists.map((artist) => (
                      <button
                        key={artist.id}
                        onClick={() => setSelectedArtist(artist.id)}
                        disabled={!artist.available}
                        className={`relative p-6 border text-left transition-all duration-300 group
                          ${selectedArtist === artist.id 
                            ? 'bg-cb-purple/20 border-cb-purple shadow-[0_0_30px_rgba(147,51,234,0.3)]' 
                            : artist.available
                              ? 'bg-cb-black border-cb-concrete hover:border-cb-purple/50'
                              : 'bg-cb-black/50 border-cb-concrete/50 opacity-50 cursor-not-allowed'}`}
                      >
                        {!artist.available && (
                          <div className="absolute top-2 right-2 px-2 py-1 bg-red-500/20 text-red-400 text-[10px] uppercase tracking-wider">
                            Booked
                          </div>
                        )}
                        {selectedArtist === artist.id && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-cb-purple rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div className="mb-4">
                          <Disc3 className={`w-8 h-8 ${selectedArtist === artist.id ? 'text-cb-purple' : 'text-cb-concrete'}`} />
                        </div>
                        <h3 className="font-[family-name:var(--font-gothic)] text-xl text-cb-white mb-1">
                          {artist.name}
                        </h3>
                        <p className="text-cb-muted text-xs mb-2">{artist.genre}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-cb-dim font-mono">{artist.bpm} BPM</span>
                          <span className="text-cb-purple">{artist.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="bg-cb-black/50 border border-cb-concrete p-4">
                    <p className="text-cb-muted text-sm">
                      <span className="text-cb-purple">Not sure?</span> Select "Let us recommend" and we'll suggest the best artist for your event based on your requirements.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Event Details */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="font-[family-name:var(--font-gothic)] text-2xl text-cb-white mb-2">
                      Event Details
                    </h2>
                    <p className="text-cb-muted text-sm">
                      Tell us about your event
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                        Event Name *
                      </label>
                      <input
                        type="text"
                        value={formData.eventName}
                        onChange={(e) => updateFormData('eventName', e.target.value)}
                        className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                 placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                        placeholder="e.g., Warehouse Rave Berlin"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                          Event Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
                          <input
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => updateFormData('eventDate', e.target.value)}
                            className="w-full bg-cb-black border border-cb-concrete pl-12 pr-4 py-3 text-cb-white
                                     focus:border-cb-purple focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                          Event Time *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
                          <input
                            type="time"
                            value={formData.eventTime}
                            onChange={(e) => updateFormData('eventTime', e.target.value)}
                            className="w-full bg-cb-black border border-cb-concrete pl-12 pr-4 py-3 text-cb-white
                                     focus:border-cb-purple focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                          Location / City *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => updateFormData('location', e.target.value)}
                            className="w-full bg-cb-black border border-cb-concrete pl-12 pr-4 py-3 text-cb-white
                                     placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                            placeholder="e.g., Berlin, Germany"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                          Venue Name
                        </label>
                        <input
                          type="text"
                          value={formData.venue}
                          onChange={(e) => updateFormData('venue', e.target.value)}
                          className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                   placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                          placeholder="e.g., Arena Club"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="font-[family-name:var(--font-gothic)] text-2xl text-cb-white mb-2">
                      Additional Details
                    </h2>
                    <p className="text-cb-muted text-sm">
                      Help us understand your needs better
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                          Expected Capacity *
                        </label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
                          <select
                            value={formData.capacity}
                            onChange={(e) => updateFormData('capacity', e.target.value)}
                            className="w-full bg-cb-black border border-cb-concrete pl-12 pr-4 py-3 text-cb-white
                                     focus:border-cb-purple focus:outline-none transition-colors appearance-none cursor-pointer"
                          >
                            <option value="">Select capacity...</option>
                            <option value="100-250">100 - 250 people</option>
                            <option value="250-500">250 - 500 people</option>
                            <option value="500-1000">500 - 1,000 people</option>
                            <option value="1000-3000">1,000 - 3,000 people</option>
                            <option value="3000+">3,000+ people</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                          Budget Range *
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => updateFormData('budget', e.target.value)}
                          className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                   focus:border-cb-purple focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select budget...</option>
                          <option value="1000-2000">€1,000 - €2,000</option>
                          <option value="2000-3500">€2,000 - €3,500</option>
                          <option value="3500-5000">€3,500 - €5,000</option>
                          <option value="5000+">€5,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="border-t border-cb-concrete pt-6">
                      <h3 className="text-cb-white font-bold mb-4">Your Contact Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                            className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                     placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                     placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                   placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                          placeholder="+49 123 456 7890"
                        />
                      </div>

                      <div className="mt-6">
                        <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                          Additional Information
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => updateFormData('message', e.target.value)}
                          rows={4}
                          className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                   placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors resize-none"
                          placeholder="Any special requirements, lineup details, or questions..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-cb-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_#9333ea]">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-[family-name:var(--font-gothic)] text-2xl text-cb-white mb-2">
                      Ready to Submit
                    </h2>
                    <p className="text-cb-muted text-sm">
                      Review your booking request
                    </p>
                  </div>

                  <div className="bg-cb-black/50 border border-cb-concrete p-6 space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-cb-concrete">
                      <span className="text-cb-muted">Selected Artist</span>
                      <span className="text-cb-white font-bold">
                        {artists.find(a => a.id === selectedArtist)?.name || 'Not selected'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-cb-concrete">
                      <span className="text-cb-muted">Event</span>
                      <span className="text-cb-white">{formData.eventName || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-cb-concrete">
                      <span className="text-cb-muted">Date & Time</span>
                      <span className="text-cb-white">{formData.eventDate} {formData.eventTime && `at ${formData.eventTime}`}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-cb-concrete">
                      <span className="text-cb-muted">Location</span>
                      <span className="text-cb-white">{formData.location}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-cb-concrete">
                      <span className="text-cb-muted">Capacity</span>
                      <span className="text-cb-white">{formData.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cb-muted">Contact</span>
                      <span className="text-cb-white">{formData.name} ({formData.email})</span>
                    </div>
                  </div>

                  <div className="bg-cb-purple/10 border border-cb-purple/30 p-4">
                    <p className="text-cb-white text-sm">
                      <Star className="w-4 h-4 text-cb-purple inline mr-2" />
                      We'll respond within 24 hours with availability and a detailed quote.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-8 border-t border-cb-concrete">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                
                {currentStep < 4 ? (
                  <button
                    onClick={handleNext}
                    className="btn-primary flex items-center gap-2 group"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={() => alert('Booking request submitted!')}
                    className="btn-primary flex items-center gap-2 group bg-green-600 hover:bg-green-700 border-green-600"
                  >
                    Submit Booking Request
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            {[
              { label: 'Response Time', value: '< 24h' },
              { label: 'Artists', value: '5+' },
              { label: 'Countries', value: '15+' },
              { label: 'Events', value: '200+' },
            ].map((stat) => (
              <div key={stat.label} className="px-6">
                <div className="text-2xl font-black text-cb-purple">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-cb-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
