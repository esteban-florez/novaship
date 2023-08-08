import lucia from '@/lib/lucia'
import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/signup'
import { handleRequest } from '@/lib/auth'
import prisma from '@/prisma/client'
import numbers from '@/lib/utils/number'
import { handleError } from '@/lib/errors/api'

export async function POST(request: NextRequest) {
  let data
  try {
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
    const authRequest = await handleRequest(request)
    authRequest.setSession(session)

    return NextResponse.redirect(new URL('/', request.url))
  } catch (error) {
    const { status, body } = handleError(error, data)
    return NextResponse.json(body, { status })
  }
}
