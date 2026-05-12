'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { 
  LayoutDashboard, 
  Newspaper, 
  Users, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  Disc3
} from 'lucide-react'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/news', label: 'News', icon: Newspaper },
  { href: '/admin/artists', label: 'Artists', icon: Users },
  { href: '/admin/bookings', label: 'Bookings', icon: Calendar },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          setIsAuthenticated(true)
        } else {
          if (pathname !== '/admin') {
            router.push('/admin')
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false)
        router.push('/')
      } else if (session) {
        setIsAuthenticated(true)
      }
    })

    return () => subscription.unsubscribe()
  }, [pathname, router, supabase])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      await supabase.auth.signOut()
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cb-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-cb-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-cb-muted">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated && pathname === '/admin') {
    return children
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-cb-black flex">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-cb-abyss border-r border-cb-concrete
        transform transition-transform duration-300 lg:transform-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-16 flex items-center px-6 border-b border-cb-concrete">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <Disc3 className="w-6 h-6 text-cb-purple flex-shrink-0" />
            <span className="font-[family-name:var(--font-gothic)] text-lg sm:text-xl text-cb-white truncate">
              CIRCUIT<span className="text-cb-purple">BREAKER</span>
            </span>
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded transition-all duration-200
                  ${isActive 
                    ? 'bg-cb-purple/20 text-cb-purple border-l-2 border-cb-purple' 
                    : 'text-cb-muted hover:bg-cb-black hover:text-cb-white'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-cb-concrete">
          <Link 
            href="/" 
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 text-cb-muted hover:text-cb-white transition-colors mb-2"
          >
            <span className="text-sm">View Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-cb-muted hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden h-16 bg-cb-abyss border-b border-cb-concrete flex items-center justify-between px-4">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-cb-muted hover:text-cb-white -ml-2"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="ml-3 font-[family-name:var(--font-gothic)] text-lg text-cb-white">
              Admin
            </span>
          </div>
          <Link href="/" className="text-cb-muted hover:text-cb-white text-sm">
            View Site
          </Link>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
