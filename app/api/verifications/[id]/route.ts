import { auth } from '@/lib/auth/api'
import logEvent from '@/lib/data-fetching/log'
import { handleError } from '@/lib/errors/api'
import { logs } from '@/lib/log'
import { defaults } from '@/lib/validation/schemas/defaults'
import prisma from '@/prisma/client'
import { UserType } from '@prisma/client'
import { notFound, redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'
import { z } from 'zod'
import { url } from '@/lib/utils/url'

const schema = z.object({
  type: z.enum([UserType.INSTITUTE, UserType.COMPANY]),
  id: defaults.id,
})

export async function PATCH(request: NextRequest, { params: { id } }: PageContext) {
  try {
    const user = await auth.user(request)

    if (user.type !== 'ADMIN') {
      notFound()
    }

    const { type } = await request.json()
    const parsed = schema.parse({ type, id })
    const query = {
      where: { id },
      data: { verifiedAt: new Date() },
    }

    if (parsed.type === 'COMPANY') {
      await prisma.company.update(query)
    } else {
      await prisma.institute.update(query)
    }

    const { verification_company: { message, model, status }, verification_institute: { message: instituteMessage } } = logs
    await logEvent({
      action: parsed.type === 'COMPANY' ? message : instituteMessage,
      model,
      status,
      authUserId: user.authUserId,
    })

    return redirect(url('/home/admin/verifications?alert=verified_user').pathname)
  } catch (error) {
    return handleError(error)
  }
}
