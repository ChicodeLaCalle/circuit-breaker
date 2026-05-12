import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If accessing admin routes (except login), check auth
  if (req.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to login page
    if (req.nextUrl.pathname === '/admin') {
      return res
    }

    // Protect other admin routes
    if (!session) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*']
}
