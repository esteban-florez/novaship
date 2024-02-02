import { auth, handleRequest } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/reset'
import { type NextRequest, NextResponse } from 'next/server'
import { getReset } from '@/lib/data-fetching/resets'
import { notFound } from 'next/navigation'
import lucia from '@/lib/auth/lucia'
import { getResetEmail } from '@/lib/utils/tables'
import prisma from '@/prisma/client'
import logEvent from '@/lib/data-fetching/log'

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
    const { password } = schema.parse(data)
    const resetId = request.nextUrl.searchParams.get('resetId')

    if (resetId === null) {
      notFound()
    }

    const reset = await getReset(resetId)

    if (reset === null || reset.usedAt !== null) {
      notFound()
    }

    const email = getResetEmail(reset)

    await lucia.updateKeyPassword('email', email, password)

    const { authUserId } = await prisma.resets.update({
      where: { id: resetId },
      data: {
        usedAt: new Date(),
      },
    })

    await prisma.authUser.update({
      where: { id: authUserId },
      data: {
        failed: 0,
      },
    })

    const { name } = await auth.user(request)
    await logEvent({
      title: 'Recuperación de contraseña',
      description: `El usuario "${name}" ha recuperado su contraseña`,
      status: 'Success',
      authUserId,
    })

    return NextResponse.redirect(url('/auth/login?modal=changedpass'))
  } catch (error) {
    const { authUserId, name } = await auth.user(request)
    await logEvent({
      title: 'Recuperación de contraseña',
      description: `El usuario "${name}" no pudo recuperar su contraseña`,
      status: 'Error',
      authUserId,
    })
    return handleError(error, data)
  }
}
