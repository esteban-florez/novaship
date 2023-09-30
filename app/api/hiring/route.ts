import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/hiring'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'

// TODO -> revisar redirect alerts.
export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const activeUser = await auth.user(request)

    if (activeUser.type === 'PERSON') {
      const user = await prisma.person.findFirst({
        where: {
          id: activeUser.id,
        },
        include: {
          categories: {
            select: {
              id: true,
            },
          },
          skills: {
            select: {
              id: true,
            },
          },
          jobs: {
            select: {
              id: true,
            },
          },
        },
      })

      if (user === null) {
        return NextResponse.redirect(url('/home/offers'))
      }

      const offer = await prisma.offer.findFirst({
        where: {
          id: parsed.offerId,
          OR: [
            {
              categories: {
                some: {
                  id: {
                    in: user.categories.map(category => category.id),
                  },
                },
              },
            },
            {
              skills: {
                some: {
                  id: {
                    in: user.skills.map(skill => skill.id),
                  },
                },
              },
            },
            { jobId: { in: user.jobs.map(job => job.id) } },
          ],
        },
      })

      if (offer === null) {
        notFound()
      }

      const hiring = await prisma.hiring.create({
        data: {
          interested: 'PERSON',
          personId: activeUser.id,
          offerId: parsed.offerId,
        },
      })

      return NextResponse.json(hiring)
    }

    return NextResponse.redirect(url('/home/offers'))
  } catch (error) {
    handleError(error, data)
  }
}
