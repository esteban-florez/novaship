import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { schema } from '@/lib/validation/schemas/status'
import prisma from '@/prisma/client'
import { url } from '@/lib/utils/url'
import { NextResponse, type NextRequest } from 'next/server'
import { notify } from '@/lib/notifications/notify'

export async function PATCH(
  request: NextRequest, { params: { id } }: PageContext
) {
  try {
    const { type } = await auth.user(request)

    const data = await request.json()
    const parsed = schema.parse(data)

    const { internship, vacant } = await prisma.recruitment.update({
      where: { id },
      data: parsed,
      include: {
        internship: {
          include: {
            grade: true,
            person: true,
          },
        },
        vacant: {
          include: {
            company: true,
          },
        },
      },
    })

    const { person, grade } = internship
    const { company } = vacant

    const notificationData = {
      grade: grade.title,
      name: type === 'COMPANY' ? company.name : person.name,
    }

    const receiver = type === 'COMPANY'
      ? person.authUserId
      : company.authUserId

    if (parsed.status === 'REJECTED') {
      await notify('recruitment-rejected', receiver, notificationData)

      return NextResponse.redirect(
        url('home/internships/recruitments?alert=recruitment_rejected')
      )
    }

    // TODO -> verificar si la vacante llego al límite, y rechazar las demás, y enviar notificación de vacante llena
    const where = {
      id: { not: id },
      internshipId: internship.id,
      status: {
        not: 'REJECTED',
      },
    } as const

    const rejectedRecruitments = await prisma.recruitment.findMany({
      where,
      include: {
        vacant: {
          include: {
            company: true,
          },
        },
      },
    })

    await prisma.recruitment.updateMany({
      where, data: { status: 'REJECTED' },
    })

    const rejectedReceivers = rejectedRecruitments
      .map(({ vacant }) => vacant.company.authUserId)

    await notify('recruitment-accepted', receiver, notificationData)

    await notify('recruitment-rejected', rejectedReceivers, notificationData)

    return NextResponse.redirect(url(
      `home/internships/${internship.id}?alert=recruitment_accepted`
    ))
  } catch (error) {
    return handleError(error)
  }
}
