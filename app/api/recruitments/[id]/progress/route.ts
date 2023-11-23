import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/progress'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'
import { recruitmentCompletedHours } from '@/lib/utils/tables'
import { notify } from '@/lib/notifications/notify'

export async function POST(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    data = await request.json()
    const { name, type } = await auth.user(request)

    const recruitment = await prisma.recruitment.findUnique({
      where: { id },
      include: {
        internship: {
          include: {
            person: true,
            institute: true,
            grade: true,
          },
        },
        progresses: true,
      },
    })

    if (recruitment === null || type !== 'COMPANY' || recruitment.status !== 'ACCEPTED') {
      notFound()
    }

    const { internship } = recruitment

    const maxHours = internship.hours - recruitmentCompletedHours(recruitment)

    const parsed = schema(maxHours).parse(data)

    const { recruitment: newRecruitment } = await prisma.progress.create({
      data: {
        ...parsed,
        recruitmentId: recruitment.id,
      },
      include: {
        recruitment: {
          include: {
            progresses: true,
          },
        },
      },
    })

    const { internship: { person, institute, grade } } = recruitment

    const receivers = [person.authUserId, institute.authUserId]

    const notification = {
      grade: grade.title,
      internshipId: internship.id,
    }

    const isCompleted = internship.hours <= recruitmentCompletedHours(newRecruitment)

    if (isCompleted) {
      await notify('internship-completed', receivers, notification)
    } else {
      await notify('progress-updated', receivers, {
        ...notification,
        company: name,
      })
    }

    return NextResponse.redirect(
      url(`home/internships/${recruitment.id}/progress?alert=progress_created`)
    )
  } catch (error) {
    return handleError(error, data)
  }
}
