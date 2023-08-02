import lucia from '@/lib/lucia'
import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/signup'
import { handleRequest } from '@/lib/auth'
import prisma from '@/prisma/client'
import { random } from '@/lib/utils/number'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
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
        ci: random(1, 30_000_000).toString(),
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
    // TODO -> error handling
    console.error(error)
    return NextResponse.json(null, {
      status: 400,
    })
  }
}
