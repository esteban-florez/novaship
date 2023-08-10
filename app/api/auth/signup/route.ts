import lucia from '@/lib/auth/lucia'
import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/signup'
import { handleRequest } from '@/lib/auth/api'
import prisma from '@/prisma/client'
import numbers from '@/lib/utils/number'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'

export async function POST(request: NextRequest) {
  let data
  try {
    const redirectToHome = NextResponse.redirect(url('home'))
    // DRY 10 -> Mismo codigo de /api/auth/login
    const authRequest = handleRequest(request)
    if (authRequest.validate() !== null) {
      return redirectToHome
    }

    data = await request.json()
    const { email, password } = schema.parse(data)

    const authUser = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password,
      },
      // DEV
      attributes: { type: 'PERSON' },
    })

    await prisma.person.create({
      data: {
        name: 'Esteban Florez',
        ci: numbers(1, 30_000_000).randomCI(),
        birth: new Date('2003-07-07'),
        email,
        authUserId: authUser.id,
      },
    })

    const session = await lucia.createSession(authUser.id)
    authRequest.setSession(session)

    return redirectToHome
  } catch (error) {
    const { status, body } = handleError(error, data)
    return NextResponse.json(body, { status })
  }
}
