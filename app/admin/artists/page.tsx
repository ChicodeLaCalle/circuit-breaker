'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import { Users, Plus, Search, Edit2, Trash2, MapPin, Disc3 } from 'lucide-react'

export default function AdminArtistsPage() {
  const [artists, setArtists] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const { data, error } = await supabase
          .from('artists')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setArtists(data || [])
      } catch (error) {
        console.error('Error fetching artists:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArtists()
  }, [supabase])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500/10 text-green-400'
      case 'on-tour': return 'bg-orange-500/10 text-orange-400'
      case 'limited': return 'bg-yellow-500/10 text-yellow-400'
      case 'booked': return 'bg-red-500/10 text-red-400'
      default: return 'bg-gray-500/10 text-gray-400'
    }
  }

  if (isLoading) {
    return <div className="text-cb-muted">Loading...</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-gothic)] text-3xl text-cb-white mb-2">
            Artists
          </h1>
          <p className="text-cb-muted">Manage your artist roster</p>
        </div>
        <a href="/admin/artists/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Artist
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
          <input
            type="text"
            placeholder="Search artists..."
            className="w-full bg-cb-black border border-cb-concrete pl-12 pr-4 py-2 text-cb-white
                     placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
          />
        </div>
        <select className="bg-cb-black border border-cb-concrete px-4 py-2 text-cb-white focus:border-cb-purple focus:outline-none">
          <option value="">All Status</option>
          <option value="available">Available</option>
          <option value="on-tour">On Tour</option>
          <option value="limited">Limited</option>
          <option value="booked">Booked</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.length === 0 ? (
          <div className="sm:col-span-2 lg:col-span-3 bg-cb-abyss border border-cb-concrete p-12 text-center">
            <Disc3 className="w-12 h-12 text-cb-concrete mx-auto mb-4" />
            <h3 className="text-cb-white font-medium mb-2">No artists yet</h3>
            <p className="text-cb-muted text-sm mb-4">Add your first artist to the roster</p>
            <a href="/admin/artists/new" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Artist
            </a>
          </div>
        ) : (
          artists.map((artist) => (
            <div key={artist.id} className="bg-cb-abyss border border-cb-concrete overflow-hidden group hover:border-cb-purple/50 transition-all">
              <div className="aspect-[4/3] bg-gradient-to-br from-cb-gray to-cb-black flex items-center justify-center">
                <Disc3 className="w-16 h-16 text-cb-concrete/30" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-cb-white font-bold text-lg">{artist.name}</h3>
                  <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider ${getStatusColor(artist.status)}`}>
                    {artist.status}
                  </span>
                </div>
                <p className="text-cb-muted text-sm mb-2">{artist.genre}</p>
                <div className="flex items-center gap-4 text-xs text-cb-dim mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {artist.location}
                  </span>
                  <span className="font-mono">{artist.bpm} BPM</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex-1 btn-outline text-xs py-2">Edit</button>
                  <button className="p-2 text-cb-muted hover:text-red-400 transition-colors border border-cb-concrete hover:border-red-400/50">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
