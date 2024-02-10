import { auth, handleRequest } from '@/lib/auth/api'
import lucia from '@/lib/auth/lucia'
import sendRecoveryEmail from '@/lib/emails/sendRecoveryEmail'
import { handleError } from '@/lib/errors/api'
import createPasswordReset from '@/lib/auth/createPasswordReset'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/login'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import logEvent from '@/lib/data-fetching/log'
import { logs } from '@/lib/log'

export async function POST(request: NextRequest) {
  // DRY 10
  let emailFailed = ''
  try {
    const redirectToHome = NextResponse.redirect(url('home'))
    const authRequest = handleRequest(request)

    if (await authRequest.validate() !== null) {
      return redirectToHome
    }

    const data = await request.json()
    const { email, password } = schema.parse(data)
    emailFailed = email

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

    const { authUserId } = await auth.user(request)
    const { login: { message, model, status } } = logs
    await logEvent({
      action: message,
      model,
      status,
      authUserId,
    })

    return redirectToHome
  } catch (error) {
    const { message } = error as { message: string }
    if (message === 'AUTH_INVALID_KEY_ID') {
      return NextResponse.redirect(url('/auth/login?alert=bad_creds'))
    }

    if (message === 'AUTH_INVALID_PASSWORD') {
      const { userId } = await lucia.getKey('email', emailFailed)
      const { failed } = await prisma.authUser.update({
        where: { id: userId },
        data: {
          failed: {
            increment: 1,
          },
        },
      })

      if (failed === 3) {
        const { resetId, username } = await createPasswordReset(userId)
        await sendRecoveryEmail(emailFailed, resetId, username)
      }

      if (failed >= 3) {
        return NextResponse.redirect(url('/auth/login?modal=blocked'))
      }

      return NextResponse.redirect(url('/auth/login?alert=bad_creds'))
    }

    return handleError(error)
  }
}
