import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function GET(req: NextRequest) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          // Read-only in GET request
        },
        remove(name: string, options: CookieOptions) {
          // Read-only in GET request
        },
      },
    }
  )

  try {
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { message: 'Authenticated', user: session.user },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Authentication check failed' },
      { status: 401 }
    )
  }
}
