import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    const accessToken = req.cookies.get('sb-access-token')?.value

    if (!accessToken) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      )
    }

    // Verify session with Supabase
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(accessToken)

    if (error || !user) {
      return NextResponse.json(
        { message: 'Invalid session' },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { message: 'Authenticated', user },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Authentication check failed' },
      { status: 401 }
    )
  }
}
