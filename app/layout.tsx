import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Circuit Breaker | Hard Techno Booking Agency',
  description: 'Premier Hard Techno DJ Booking Agency. Representing the finest industrial electronic music talent across Europe.',
  keywords: ['hard techno', 'booking agency', 'DJ', 'electronic music', 'techno', 'industrial'],
  openGraph: {
    title: 'Circuit Breaker | Hard Techno Booking Agency',
    description: 'Premier Hard Techno DJ Booking Agency. Representing the finest industrial electronic music talent across Europe.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
