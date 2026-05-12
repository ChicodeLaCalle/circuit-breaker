import connectDB from '@/lib/mongodb'
import { News, Artist, Booking } from '@/lib/models'
import { 
  LayoutDashboard, 
  Newspaper, 
  Users, 
  Calendar,
  TrendingUp,
  Clock
} from 'lucide-react'

async function getStats() {
  await connectDB()
  
  const [totalNews, totalArtists, totalBookings, pendingBookings] = await Promise.all([
    News.countDocuments(),
    Artist.countDocuments(),
    Booking.countDocuments(),
    Booking.countDocuments({ status: 'pending' }),
  ])

  return {
    totalNews,
    totalArtists,
    totalBookings,
    pendingBookings,
  }
}

export default async function AdminDashboardPage() {
  const stats = await getStats()

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
      {/* Header */}
      <div>
        <h1 className="font-[family-name:var(--font-gothic)] text-3xl text-cb-white mb-2">
          Dashboard
        </h1>
        <p className="text-cb-muted">
          Welcome back to the Circuit Breaker admin panel.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <a
              key={stat.label}
              href={stat.href}
              className="bg-cb-abyss border border-cb-concrete p-6 hover:border-cb-purple/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} border border-${stat.color}/30 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-4 h-4 text-cb-dim group-hover:text-cb-purple transition-colors" />
              </div>
              <div className="text-3xl font-black text-cb-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-cb-muted">{stat.label}</div>
            </a>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-cb-abyss border border-cb-concrete p-6">
        <h2 className="text-lg font-bold text-cb-white mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Add News Article', href: '/admin/news/new', color: 'bg-blue-600' },
            { label: 'Add Artist', href: '/admin/artists/new', color: 'bg-purple-600' },
            { label: 'View Bookings', href: '/admin/bookings', color: 'bg-green-600' },
            { label: 'Site Settings', href: '/admin/settings', color: 'bg-gray-600' },
          ].map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`${action.color} hover:opacity-90 text-white px-4 py-3 text-sm font-medium text-center transition-opacity`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-cb-abyss border border-cb-concrete p-6">
        <h2 className="text-lg font-bold text-cb-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-cb-black/50 border border-cb-concrete">
            <div className="w-2 h-2 bg-cb-purple rounded-full" />
            <div className="flex-1">
              <p className="text-cb-white text-sm">Welcome to the admin panel</p>
              <p className="text-cb-dim text-xs">System initialized</p>
            </div>
            <span className="text-cb-dim text-xs">Just now</span>
          </div>
        </div>
      </div>

      {/* Setup Notice */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 p-4">
        <div className="flex items-start gap-3">
          <LayoutDashboard className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-yellow-400 font-medium mb-1">Database Setup Required</h3>
            <p className="text-cb-muted text-sm">
              Make sure to set your <code className="bg-cb-black px-1 py-0.5 rounded text-cb-purple">MONGODB_URI</code> environment variable. 
              Create a .env.local file with your MongoDB connection string.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
