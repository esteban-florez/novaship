import sendMail from '@/lib/emails'
import { handleRequest } from '@/lib/auth/api'
import lucia from '@/lib/auth/lucia'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/forgot'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'
import { render } from '@react-email/render'
import PasswordRecovery from '@/lib/emails/PasswordRecovery'

export async function POST(request: NextRequest) {
  let data
  try {
    // DRY 10
    const redirectToHome = NextResponse.redirect(url('home'))
    const authRequest = handleRequest(request)

    if (await authRequest.validate() !== null) {
      return redirectToHome
    }

    data = await request.json()
    const { email } = schema.parse(data)

    const key = await lucia.getKey('email', email)

    const { person, company, admin, institute } = await prisma.authUser.findUniqueOrThrow({
      where: { id: key.userId },
      include: {
        person: true,
        company: true,
        institute: true,
        admin: true,
      },
    })

    const username = person?.name ?? company?.name ?? admin?.name ?? institute?.name ?? 'estimado usuario'

    const { id: resetId } = await prisma.resets.create({
      data: {
        authUserId: key.userId,
      },
    })

    const emailComponent = PasswordRecovery({
      resetId,
      username,
      createdAt: new Date(),
    })

    await sendMail({
      to: email,
      from: 'team@novaship.dev',
      subject: 'Recuperación de contraseña - Novaship',
      html: render(emailComponent),
    })

    return NextResponse.redirect(url('/auth/login?modal=forgot'))
  } catch (error) {
    const { message } = error as { message: string }
    if (message === 'AUTH_INVALID_KEY_ID') {
      return NextResponse.redirect(url('/auth/forgot-password?modal=notvalid'))
    }
    return handleError(error, data)
  }
}
