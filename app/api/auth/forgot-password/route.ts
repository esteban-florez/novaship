import { auth, handleRequest } from '@/lib/auth/api'
import lucia from '@/lib/auth/lucia'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/forgot'
import { type NextRequest, NextResponse } from 'next/server'
import createPasswordReset from '@/lib/auth/createPasswordReset'
import sendRecoveryEmail from '@/lib/emails/sendRecoveryEmail'
import logEvent from '@/lib/data-fetching/log'
import { logs } from '@/lib/log'

export async function POST(request: NextRequest) {
  let data
  try {
    // DRY 10
    const redirectToHome = NextResponse.redirect(url('/home'))
    const authRequest = handleRequest(request)

    if (await authRequest.validate() !== null) {
      return redirectToHome
    }

    data = await request.json()
    const { email } = schema.parse(data)

    const key = await lucia.getKey('email', email)

    const { resetId, username } = await createPasswordReset(key.userId)

    await sendRecoveryEmail(email, resetId, username)

    const { authUserId } = await auth.user(request)
    const { forget_password: { message, model, status } } = logs
    await logEvent({
      action: message,
      model,
      status,
      authUserId,
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
