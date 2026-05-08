export interface Artist {
  id: string
  name: string
  slug: string
  genre: string[]
  bio: {
    short: string
    full: string
  }
  image: {
    hero: string
    gallery: string[]
  }
  social: {
    soundcloud?: string
    mixcloud?: string
    instagram?: string
    youtube?: string
    spotify?: string
    residentAdvisor?: string
  }
  stats: {
    bpmRange: string
    monthlyListeners?: number
    yearsActive: number
  }
  touring: {
    upcoming: Event[]
    past: Event[]
  }
  media: {
    soundcloudSets: SoundCloudSet[]
    videos: Video[]
  }
  epk: {
    photos: PhotoAsset[]
    rider: string // URL to PDF
    techSpecs: string // URL to PDF
  }
  availability: 'available' | 'on-tour' | 'limited'
}

export interface Event {
  id: string
  date: string
  venue: string
  city: string
  country: string
  ticketsUrl?: string
  status: 'upcoming' | 'past'
}

export interface SoundCloudSet {
  id: string
  title: string
  url: string
  duration: string
  plays?: number
}

export interface Video {
  id: string
  title: string
  platform: 'youtube' | 'vimeo'
  url: string
  thumbnail: string
}

export interface PhotoAsset {
  id: string
  url: string
  type: 'portrait' | 'live' | 'studio' | 'press'
  resolution: string
}

// Sample Artists Data
export const artists: Artist[] = [
  {
    id: '1',
    name: 'VOLTAGE',
    slug: 'voltage',
    genre: ['Hard Techno', 'Industrial', 'Schranz'],
    bio: {
      short: 'Industrial techno powerhouse delivering raw energy across Europe.',
      full: 'VOLTAGE has established himself as one of the most relentless forces in the Hard Techno scene. With releases on Lobster Theremin and R-Label Group, his sound combines pounding industrial rhythms with hypnotic warehouse atmospheres.',
    },
    image: {
      hero: '/images/artists/voltage-hero.jpg',
      gallery: [],
    },
    social: {
      soundcloud: 'https://soundcloud.com/voltage',
      instagram: 'https://instagram.com/voltage',
      residentAdvisor: 'https://ra.co/dj/voltage',
    },
    stats: {
      bpmRange: '145-160',
      yearsActive: 5,
    },
    touring: {
      upcoming: [],
      past: [],
    },
    media: {
      soundcloudSets: [],
      videos: [],
    },
    epk: {
      photos: [],
      rider: '/epk/voltage-rider.pdf',
      techSpecs: '/epk/voltage-tech.pdf',
    },
    availability: 'available',
  },
]

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find(artist => artist.slug === slug)
}

export function getAllArtists(): Artist[] {
  return artists
}
