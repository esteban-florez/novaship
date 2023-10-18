import { handleRequest } from '@/lib/auth/api'
import lucia from '@/lib/auth/lucia'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/login'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  // DRY 10
  try {
    const redirectToHome = NextResponse.redirect(url('home'))
    const authRequest = handleRequest(request)

    if (await authRequest.validate() !== null) {
      return redirectToHome
    }

    const data = await request.json()
    const { email, password } = schema.parse(data)

    const key = await lucia.useKey('email', email, password)

    const { company, institute } = await prisma.authUser.findUniqueOrThrow({
      where: { id: key.userId },
      include: {
        company: true,
        institute: true,
      },
    })

    if ((company !== null && company.verifiedAt === null) ||
    (institute !== null && institute.verifiedAt === null)) {
      return NextResponse.redirect(url('/auth/login?modal=unverified'))
    }

    const session = await lucia.createSession(key.userId)
    authRequest.setSession(session)

    return redirectToHome
  } catch (error) {
    console.error(error)
    return NextResponse.json(null, { status: 400 })
  }
}
