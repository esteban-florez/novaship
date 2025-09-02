import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { schema as datesSchema } from '@/lib/validation/schemas/recruitments/dates'
import { schema as statusSchema } from '@/lib/validation/schemas/status'
import prisma from '@/prisma/client'
import { url } from '@/lib/utils/url'
import { NextResponse, type NextRequest } from 'next/server'
import { notify } from '@/lib/notifications/notify'
import { type Company, type Grade, type Vacant } from '@prisma/client'
import logEvent from '@/lib/data-fetching/log'
import { logs } from '@/lib/log'

export async function PATCH(
  request: NextRequest, { params: { id } }: PageContext
) {
  try {
    const { type, authUserId } = await auth.user(request)

    const data = await request.json()
    const { status } = statusSchema.parse(data)

    let dates = {}
    if (type === 'COMPANY' && status === 'ACCEPTED') {
      dates = datesSchema.parse(data)
    }

    const { internship, vacant } = await prisma.recruitment.update({
      where: { id },
      data: {
        status,
        ...dates,
      },
      include: {
        internship: {
          include: {
            grade: true,
            person: true,
          },
        },
        vacant: {
          include: {
            _count: {
              select: {
                recruitments: {
                  where: {
                    status: 'ACCEPTED',
                  },
                },
              },
            },
            company: true,
          },
        },
      },
    })

    const { recruitment_update: { message, model, status: logStatus } } = logs
    await logEvent({
      action: message,
      model,
      status: logStatus,
      authUserId,
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

    if (status === 'REJECTED') {
      await notify('recruitment-rejected', receiver, notificationData)

      return NextResponse.redirect(
        url('/home/internships/recruitments?alert=recruitment_rejected')
      )
    }

    await checkVacantLimit(vacant, id, grade)

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

// DRY -> mucha repetición de código aquí
async function checkVacantLimit(vacant: Vacant & {
  _count: {
    recruitments: number
  }
  company: Company
}, updatedId: string, grade: Grade) {
  if (vacant.limit > vacant._count.recruitments) return
  const where = {
    vacantId: vacant.id,
    id: {
      not: updatedId,
    },
  }

  const recruitments = await prisma.recruitment.findMany({
    where,
    include: {
      internship: {
        include: {
          grade: true,
          person: true,
        },
      },
    },
  })

  await prisma.recruitment.updateMany({
    where, data: { status: 'REJECTED' },
  })

  recruitments.forEach(async ({ internship: { person } }) => {
    await notify('recruitment-rejected', person.authUserId, {
      name: vacant.companyId,
      grade: grade.title,
    })
  })
}
