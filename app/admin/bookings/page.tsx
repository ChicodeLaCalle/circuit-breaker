import connectDB from '@/lib/mongodb'
import { Booking } from '@/lib/models'
import { Calendar, Search, Check, X, Clock, ExternalLink } from 'lucide-react'

async function getBookings() {
  await connectDB()
  const bookings = await Booking.find()
    .populate('artistId', 'name')
    .sort({ createdAt: -1 })
    .limit(50)
  return JSON.parse(JSON.stringify(bookings))
}

export default async function AdminBookingsPage() {
  const bookings = await getBookings()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500/10 text-green-400 border-green-500/30'
      case 'pending': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
      case 'declined': return 'bg-red-500/10 text-red-400 border-red-500/30'
      case 'completed': return 'bg-blue-500/10 text-blue-400 border-blue-500/30'
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-[family-name:var(--font-gothic)] text-3xl text-cb-white mb-2">
          Booking Requests
        </h1>
        <p className="text-cb-muted">
          Manage and respond to booking inquiries
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        {[
          { label: 'Pending', value: bookings.filter((b: any) => b.status === 'pending').length, color: 'text-yellow-400' },
          { label: 'Confirmed', value: bookings.filter((b: any) => b.status === 'confirmed').length, color: 'text-green-400' },
          { label: 'Completed', value: bookings.filter((b: any) => b.status === 'completed').length, color: 'text-blue-400' },
          { label: 'Declined', value: bookings.filter((b: any) => b.status === 'declined').length, color: 'text-red-400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-cb-abyss border border-cb-concrete p-4 text-center">
            <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
            <div className="text-xs uppercase tracking-wider text-cb-muted">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full bg-cb-black border border-cb-concrete pl-12 pr-4 py-2 text-cb-white
                     placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
          />
        </div>
        <select className="bg-cb-black border border-cb-concrete px-4 py-2 text-cb-white focus:border-cb-purple focus:outline-none">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="declined">Declined</option>
        </select>
      </div>

      {/* Bookings Table */}
      <div className="bg-cb-abyss border border-cb-concrete overflow-hidden">
        {bookings.length === 0 ? (
          <div className="p-12 text-center">
            <Calendar className="w-12 h-12 text-cb-concrete mx-auto mb-4" />
            <h3 className="text-cb-white font-medium mb-2">No bookings yet</h3>
            <p className="text-cb-muted text-sm">
              Booking requests will appear here when customers submit them
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-cb-black/50 border-b border-cb-concrete">
              <tr>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Event
                </th>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Artist
                </th>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Date
                </th>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Contact
                </th>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Status
                </th>
                <th className="text-right text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cb-concrete">
              {bookings.map((booking: any) => (
                <tr key={booking._id} className="hover:bg-cb-black/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-cb-white font-medium">{booking.eventName}</p>
                      <p className="text-cb-dim text-sm">{booking.location}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-cb-purple">
                      {booking.artistId?.name || 'Unknown'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-cb-muted text-sm">
                    {new Date(booking.eventDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-cb-white text-sm">{booking.contactName}</p>
                      <p className="text-cb-dim text-xs">{booking.contactEmail}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs uppercase tracking-wider border ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-cb-muted hover:text-green-400 transition-colors" title="Confirm">
                        <Check className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-cb-muted hover:text-red-400 transition-colors" title="Decline">
                        <X className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-cb-muted hover:text-cb-purple transition-colors" title="View Details">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
