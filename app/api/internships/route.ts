import { auth } from '@/lib/auth/api'
import logEvent from '@/lib/data-fetching/log'
import { handleError } from '@/lib/errors/api'
import { logs } from '@/lib/log'
import { notify } from '@/lib/notifications/notify'
import { defaults } from '@/lib/validation/schemas/defaults'
import { schema } from '@/lib/validation/schemas/internships/create'
import prisma from '@/prisma/client'
import { notFound, redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'

export async function POST(request: NextRequest) {
  let data
  try {
    const { id, type, name, authUserId: authId } = await auth.user(request)
    if (type !== 'INSTITUTE') {
      notFound()
    }

    data = await request.json()

    const parsed = schema
      .extend({ personId: defaults.id })
      .parse(data)

    const { categories, personId, hours } = parsed

    const { id: internshipId } = await prisma.internship.create({
      data: {
        ...parsed,
        hours: Number(hours),
        instituteId: id,
        categories: {
          connect: categories.map(id => ({ id })),
        },
      },
    })

    const { internship_create: { message, model, status } } = logs
    await logEvent({
      action: message,
      model,
      status,
      authUserId: authId,
    })
    const { authUserId } = await prisma.person.findUniqueOrThrow({ where: { id: personId } })

    await notify('internship-created', authUserId, {
      institute: name,
      internshipId,
    })

    return redirect(url(`/home/internships/${internshipId}?alert=internship_created`).pathname)
  } catch (error) {
    return handleError(error, data)
  }
}
