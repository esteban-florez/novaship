import { handleRequest } from '@/lib/auth'
import { auth } from '@/lib/lucia'
import { login } from '@/lib/validation/schemas'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { email, password } = login.parse(data)

    const key = await auth.useKey('email', email, password)
    const session = await auth.createSession(key.userId)

    const authRequest = await handleRequest(request)
    authRequest.setSession(session)

    return NextResponse.redirect(new URL('/', request.url))
  } catch (error) {
    console.error(error)
    return NextResponse.json(null, { status: 400 })
  }
}
