import { handleRequest } from '@/lib/auth'
import lucia from '@/lib/lucia'
import { NextResponse, type NextRequest } from 'next/server'

export async function DELETE(request: NextRequest) {
  try {
    const authRequest = await handleRequest()
    const session = await authRequest.validate()
    const redirectToLogin = NextResponse.redirect(new URL('/auth/login', request.url))

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
