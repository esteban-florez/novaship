import { handleRequest } from '@/lib/auth'
import lucia from '@/lib/lucia'
import { schema } from '@/lib/validation/schemas/login'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { email, password } = schema.parse(data)

    const key = await lucia.useKey('email', email, password)
    const session = await lucia.createSession(key.userId)

    const authRequest = await handleRequest(request)
    authRequest.setSession(session)

    return NextResponse.redirect(new URL('/', request.url))
  } catch (error) {
    console.error(error)
    return NextResponse.json(null, { status: 400 })
  }
}
