import lucia from '@/lib/lucia'
import { NextResponse, type NextRequest } from 'next/server'
import { signup } from '@/lib/validation/schemas'
import { handleRequest } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, surname, email, password } = signup.parse(data)
    console.log(name, surname)

    const authUser = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password,
      },
      // DEV
      attributes: { type: 'PERSON' },
    })

    const session = await lucia.createSession(authUser.id)
    const authRequest = await handleRequest(request)
    authRequest.setSession(session)

    return NextResponse.redirect(new URL('/', request.url))
  } catch (error) {
    // TODO -> error handling
    console.error(error)
    return NextResponse.json(null, {
      status: 400,
    })
  }
}
