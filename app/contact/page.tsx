import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Mail, MapPin, Phone, Send, Clock, MessageSquare, ArrowRight } from 'lucide-react'

export default function ContactPage() {
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
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="font-[family-name:var(--font-gothic)] text-5xl sm:text-6xl md:text-7xl leading-none mb-6">
              <span className="text-cb-white">Contact </span>
              <span className="text-cb-purple glow-purple">Us</span>
            </h1>
            <p className="text-cb-muted max-w-2xl mx-auto text-lg">
              Ready to book an artist or have questions? We're here to help you create unforgettable events.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact Cards */}
              <div className="space-y-4">
                <div className="group bg-cb-abyss border border-cb-concrete p-6 hover:border-cb-purple transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cb-purple/10 border border-cb-purple/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-cb-purple" />
                    </div>
                    <div>
                      <h3 className="text-cb-white font-bold mb-1">Email</h3>
                      <p className="text-cb-muted text-sm mb-2">For bookings & general inquiries</p>
                      <a href="mailto:bookings@circuitbreaker.eu" className="text-cb-purple hover:text-cb-white transition-colors text-sm">
                        bookings@circuitbreaker.eu
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-cb-abyss border border-cb-concrete p-6 hover:border-cb-purple transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cb-purple/10 border border-cb-purple/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-cb-purple" />
                    </div>
                    <div>
                      <h3 className="text-cb-white font-bold mb-1">Phone</h3>
                      <p className="text-cb-muted text-sm mb-2">Urgent matters only</p>
                      <a href="tel:+491234567890" className="text-cb-purple hover:text-cb-white transition-colors text-sm">
                        +49 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-cb-abyss border border-cb-concrete p-6 hover:border-cb-purple transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cb-purple/10 border border-cb-purple/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-cb-purple" />
                    </div>
                    <div>
                      <h3 className="text-cb-white font-bold mb-1">Location</h3>
                      <p className="text-cb-muted text-sm mb-2">Main office</p>
                      <p className="text-cb-white text-sm">
                        Berlin, Germany<br />
                        <span className="text-cb-dim">EU coverage</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-cb-abyss border border-cb-concrete p-6 hover:border-cb-purple transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cb-purple/10 border border-cb-purple/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-cb-purple" />
                    </div>
                    <div>
                      <h3 className="text-cb-white font-bold mb-1">Response Time</h3>
                      <p className="text-cb-muted text-sm mb-2">We typically reply within</p>
                      <p className="text-cb-white text-sm">24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-cb-abyss border border-cb-concrete p-6">
                <h3 className="text-cb-white font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['Instagram', 'SoundCloud', 'YouTube', 'Spotify'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-cb-black border border-cb-concrete flex items-center justify-center
                               hover:border-cb-purple hover:text-cb-purple transition-all duration-300"
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="relative bg-cb-abyss border border-cb-concrete p-8 md:p-12">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cb-purple" />
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cb-purple" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cb-purple" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cb-purple" />

                <div className="mb-8">
                  <h2 className="font-[family-name:var(--font-gothic)] text-2xl text-cb-white mb-2">
                    Send a Message
                  </h2>
                  <p className="text-cb-muted text-sm">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                 placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                 placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                               focus:border-cb-purple focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject...</option>
                      <option value="booking">Artist Booking</option>
                      <option value="general">General Inquiry</option>
                      <option value="press">Press / Media</option>
                      <option value="demo">Demo Submission</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  {/* Event Details (conditional, shown for booking) */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                 focus:border-cb-purple focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                        Event Location
                      </label>
                      <input
                        type="text"
                        className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                                 placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  {/* Artist Preference (for booking) */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                      Preferred Artist
                    </label>
                    <select
                      className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                               focus:border-cb-purple focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">No preference / Flexible</option>
                      <option value="voltage">VOLTAGE</option>
                      <option value="neural">NEURAL</option>
                      <option value="pulse">PULSE</option>
                      <option value="kinetic">KINETIC</option>
                      <option value="surge">SURGE</option>
                      <option value="multiple">Multiple Artists</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                               placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your event, requirements, or questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-cb-dim text-xs text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-cb-purple text-xs uppercase tracking-[0.3em] mb-4">
                <span>Common Questions</span>
              </div>
              <h2 className="font-[family-name:var(--font-gothic)] text-3xl sm:text-4xl mb-4">
                <span className="text-cb-white">Frequently Asked </span>
                <span className="text-cb-purple glow-purple">Questions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "How far in advance should I book?",
                  a: "We recommend booking 2-3 months in advance for optimal artist availability. Last-minute bookings may be possible depending on the artist's schedule."
                },
                {
                  q: "What information do you need for a booking?",
                  a: "Event date, location, expected attendance, venue details, and your budget range help us provide the best recommendations."
                },
                {
                  q: "Do you handle international bookings?",
                  a: "Yes, we work across Europe and can arrange international travel for our artists. Additional logistics fees may apply."
                },
                {
                  q: "Can I book multiple artists?",
                  a: "Absolutely. We can curate lineups and back-to-back sets featuring multiple Circuit Breaker artists."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-cb-abyss border border-cb-concrete p-6 hover:border-cb-purple/50 transition-colors"
                >
                  <h3 className="text-cb-white font-bold mb-3 flex items-start gap-3">
                    <span className="text-cb-purple">0{i + 1}</span>
                    {faq.q}
                  </h3>
                  <p className="text-cb-muted text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
