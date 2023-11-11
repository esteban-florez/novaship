import { auth } from '@/lib/auth/api'
import { canCreateRecruitment } from '@/lib/auth/permissions'
import { getInternship } from '@/lib/data-fetching/internships'
import { handleError } from '@/lib/errors/api'
import { notify } from '@/lib/notifications/notify'
import { url } from '@/lib/utils/url'
import { schema as byCompany } from '@/lib/validation/schemas/recruitments/company'
import { schema as byPerson } from '@/lib/validation/schemas/recruitments/person'
import prisma from '@/prisma/client'
import { type Interested } from '@prisma/client'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

interface RecruitmentInput {
  internshipId: string
  vacantId: string
  interested: Interested
}

async function checkAndCreate(parsed: RecruitmentInput, companyId: string, internshipId: string) {
  const internship = await getInternship(internshipId)

  if (internship === null || !canCreateRecruitment(companyId, internship)) {
    notFound()
  }

  return await prisma.recruitment.create({
    data: parsed,
    include: {
      vacant: {
        include: {
          job: true,
        },
      },
      internship: {
        include: {
          person: true,
          grade: true,
        },
      },
    },
  })
}

export async function POST(request: NextRequest) {
  let data
  try {
    const { id, type, name } = await auth.user(request)
    data = await request.json()

    if (type === 'ADMIN' || type === 'INSTITUTE') notFound()

    if (type === 'COMPANY') {
      const parsed = byCompany.parse(data)
      const { internshipId } = parsed

      const recruitment = await checkAndCreate(parsed, id, internshipId)

      const { internship } = recruitment
      const { person: { authUserId }, grade } = internship

      const notification = {
        grade: grade.title,
        company: name,
        internshipId: internship.id,
      }

      await notify('company-recruitment-created', authUserId, notification)

      return NextResponse.redirect(
        url('TODO -> link a solicitudes?alert=recruitment_created')
      )
    }

    const parsed = byPerson.parse(data)
    const { internshipId, vacantId } = parsed

    const vacant = await prisma.vacant.findUnique({
      where: { id: vacantId },
      include: {
        company: true,
      },
    })

    if (vacant === null) notFound()

    const { companyId, company } = vacant
    const { authUserId } = company

    const recruitment = await checkAndCreate(parsed, companyId, internshipId)
    const { internship: { person }, vacant: { job } } = recruitment

    const notification = {
      job: job.title,
      student: person.name,
      vacantId: vacant.id,
    }

    await notify('person-recruitment-created', authUserId, notification)

    return NextResponse.redirect(
      url(`home/internships/${internshipId}?alert=recruitment_created`)
    )
  } catch (error) {
    return handleError(error, data)
  }
}
