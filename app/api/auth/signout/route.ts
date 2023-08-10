import { handleRequest } from '@/lib/auth/api'
import lucia from '@/lib/auth/lucia'
import { url } from '@/lib/utils/url'
import { NextResponse, type NextRequest } from 'next/server'

export async function DELETE(request: NextRequest) {
  try {
    const authRequest = handleRequest(request)
    const session = await authRequest.validate()
    const redirectToLogin = NextResponse.redirect(url('auth/login'))

    if (session === null) {
      return redirectToLogin
    }

    void lucia.invalidateSession(session.sessionId)
    authRequest.setSession(null)

    return redirectToLogin
  } catch (error) {
    console.log(error)
    return NextResponse.json(null, {
      status: 400,
    })
  }
}
