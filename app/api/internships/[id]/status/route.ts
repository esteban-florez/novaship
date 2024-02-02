import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { schema } from '@/lib/validation/schemas/status'
import prisma from '@/prisma/client'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'
import { notify } from '@/lib/notifications/notify'
import logEvent from '@/lib/data-fetching/log'

export async function PATCH(
  request: NextRequest, { params: { id } }: PageContext
) {
  try {
    const { id: personId } = await auth.user(request)

    const where = { id }

    const internship = await prisma.internship.findUnique({ where })

    if (internship === null ||
      internship.personId !== personId ||
      internship.status !== 'PENDING') {
      notFound()
    }

    const data = await request.json()
    const parsed = schema.parse(data)

    const { person, grade, institute } = await prisma.internship.update({
      where,
      data: parsed,
      include: {
        institute: true,
        person: true,
        grade: true,
      },
    })

    const notificationData = {
      internshipId: id,
      grade: grade.title,
      student: person.name,
    }

    const receiver = institute.authUserId

    if (parsed.status === 'REJECTED') {
      await notify('internship-rejected', receiver, notificationData)

      await logEvent({
        title: 'Pasantía',
        description: 'La pasantía ha sido actualizada',
        status: 'Success',
        authUserId: personId,
      })

      return NextResponse.redirect(
        url(`home/persons/${personId}/internships?alert=internship_rejected`)
      )
    }

    await notify('internship-accepted', receiver, notificationData)

    await logEvent({
      title: 'Pasantía',
      description: 'La pasantía ha sido actualizada',
      status: 'Success',
      authUserId: personId,
    })

    return NextResponse.redirect(url(
      `home/internships/${id}?alert=internship_accepted`
    ))
  } catch (error) {
    const { authUserId } = await auth.user(request)
    await logEvent({
      title: 'Pasantía',
      description: 'La pasantía no pudo ser actualizada',
      status: 'Error',
      authUserId,
    })
    return handleError(error)
  }
}
