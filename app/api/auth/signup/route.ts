import { auth } from '@/lib/lucia'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()

  const invalidData = Object.values(data).some(value => typeof value !== 'string')

  if (invalidData) {
    return NextResponse.json(
      { error: 'Invalid input' },
      { status: 400 },
    )
  }

  const { name, surname, email, password } = data

  try {
    const user = await auth.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password,
      },
      attributes: {
        name,
        surname,
        email,
      },
    })

    const session = await auth.createSession(user.userId)
    // @ts-expect-error Lucia cookies
    const authRequest = auth.handleRequest({ request, cookies })
    authRequest.setSession(session)

    // eslint-disable-next-line no-new
    new Response(null, {
      status: 302,
      headers: {
        location: '/',
      },
    })
  } catch (error) {
    return NextResponse.json(null, {
      status: 400,
    })
  }
}
