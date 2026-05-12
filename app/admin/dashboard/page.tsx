'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { 
  LayoutDashboard, 
  Newspaper, 
  Users, 
  Calendar,
  TrendingUp,
  Clock
} from 'lucide-react'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalNews: 0,
    totalArtists: 0,
    totalBookings: 0,
    pendingBookings: 0,
  })
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
          { count: newsCount },
          { count: artistsCount },
          { count: bookingsCount },
          { count: pendingCount }
        ] = await Promise.all([
          supabase.from('news').select('*', { count: 'exact', head: true }),
          supabase.from('artists').select('*', { count: 'exact', head: true }),
          supabase.from('bookings').select('*', { count: 'exact', head: true }),
          supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
        ])

        setStats({
          totalNews: newsCount || 0,
          totalArtists: artistsCount || 0,
          totalBookings: bookingsCount || 0,
          pendingBookings: pendingCount || 0,
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [supabase])

  const statCards = [
    { 
      label: 'Total News', 
      value: stats.totalNews, 
      icon: Newspaper,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      href: '/admin/news'
    },
    { 
      label: 'Artists', 
      value: stats.totalArtists, 
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      href: '/admin/artists'
    },
    { 
      label: 'Total Bookings', 
      value: stats.totalBookings, 
      icon: Calendar,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      href: '/admin/bookings'
    },
    { 
      label: 'Pending Bookings', 
      value: stats.pendingBookings, 
      icon: Clock,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      href: '/admin/bookings'
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[family-name:var(--font-gothic)] text-2xl sm:text-3xl text-cb-white mb-1 sm:mb-2">
          Dashboard
        </h1>
        <p className="text-cb-muted text-sm sm:text-base">
          Welcome back to the Circuit Breaker admin panel.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <a
              key={stat.label}
              href={stat.href}
              className="bg-cb-abyss border border-cb-concrete p-4 sm:p-6 hover:border-cb-purple/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-2 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.bgColor} border border-${stat.color}/30 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-4 h-4 text-cb-dim group-hover:text-cb-purple transition-colors hidden sm:block" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-cb-white mb-1">
                {isLoading ? '-' : stat.value}
              </div>
              <div className="text-xs sm:text-sm text-cb-muted">{stat.label}</div>
            </a>
          )
        })}
      </div>

      <div className="bg-cb-abyss border border-cb-concrete p-6">
        <h2 className="text-lg font-bold text-cb-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: 'Add News Article', href: '/admin/news/new', color: 'bg-blue-600' },
            { label: 'Add Artist', href: '/admin/artists/new', color: 'bg-purple-600' },
            { label: 'View Bookings', href: '/admin/bookings', color: 'bg-green-600' },
            { label: 'Site Settings', href: '/admin/settings', color: 'bg-gray-600' },
          ].map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`${action.color} hover:opacity-90 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-center transition-opacity rounded-sm`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/30 p-4">
        <div className="flex items-start gap-3">
          <LayoutDashboard className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-yellow-400 font-medium mb-1">Supabase Connected</h3>
            <p className="text-cb-muted text-sm">
              Make sure to run the schema.sql file in your Supabase SQL Editor to create the necessary tables.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
