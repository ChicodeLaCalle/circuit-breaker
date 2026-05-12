import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    // Sign out from Supabase
    await supabaseAdmin.auth.signOut()

    const response = NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    )

    // Clear the cookies
    response.cookies.delete('sb-access-token')
    response.cookies.delete('sb-refresh-token')

    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { message: 'Logout failed' },
      { status: 500 }
    )
  }
}
