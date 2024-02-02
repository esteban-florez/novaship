import { auth } from '@/lib/auth/api'
import logEvent from '@/lib/data-fetching/log'
import { handleError } from '@/lib/errors/api'
import { notify } from '@/lib/notifications/notify'
import { defaults } from '@/lib/validation/schemas/defaults'
import { schema } from '@/lib/validation/schemas/internships/create'
import prisma from '@/prisma/client'
import { notFound, redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  let data
  try {
    const { id, type, name } = await auth.user(request)
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

    const { authUserId } = await prisma.person.findUniqueOrThrow({ where: { id: personId } })

    await logEvent({
      title: 'Pasantía',
      description: 'La pasantía ha sido registrada',
      status: 'Success',
      authUserId: id,
    })

    await notify('internship-created', authUserId, {
      institute: name,
      internshipId,
    })

    return redirect(`/home/internships/${internshipId}?alert=internship_created`)
  } catch (error) {
    const { authUserId } = await auth.user(request)
    await logEvent({
      title: 'Pasantía',
      description: 'La pasantía no pudo ser registrada',
      status: 'Error',
      authUserId,
    })
    return handleError(error, data)
  }
}
