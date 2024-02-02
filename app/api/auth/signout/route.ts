import { auth, handleRequest } from '@/lib/auth/api'
import lucia from '@/lib/auth/lucia'
import logEvent from '@/lib/data-fetching/log'
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

    const { authUserId, name } = await auth.user(request)
    await logEvent({
      title: 'Cierre de sesión',
      description: `El usuario "${name}" ha cerrado sesión`,
      status: 'Success',
      authUserId,
    })

    void lucia.invalidateSession(session.sessionId)
    authRequest.setSession(null)

    return redirectToLogin
  } catch (error) {
    console.log(error)
    const { authUserId, name } = await auth.user(request)
    await logEvent({
      title: 'Cierre de sesión',
      description: `El usuario "${name}" no pudo cerrar sesión`,
      status: 'Error',
      authUserId,
    })
    return NextResponse.json(null, {
      status: 400,
    })
  }
}
