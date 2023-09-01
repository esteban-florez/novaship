import { schema } from '@/lib/validation/schemas/offer'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { redirect } from 'next/navigation'
import collect from '@/lib/utils/collection'
import { getExpirationDate } from '@/lib/validation/expiration-dates'

interface Context {
  params: {
    id: string
  }
}

export async function PUT(request: NextRequest, { params: { id } }: Context) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.user(request)

    const offer = await prisma.offer.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        fields: true,
        skills: true,
        location: true,
      },
    })

    if (offer === null || offer.companyId !== user.id) {
      redirect('/home/projects')
    }

    const offerSkills = offer.skills.map(field => {
      return field.id
    })

    const offerFields = offer.fields.map(field => {
      return field.id
    })

    const skills = collect(parsed.skills).deleteDuplicatesFrom(offerSkills)
    const fields = collect(parsed.fields).deleteDuplicatesFrom(offerFields)

    await prisma.offer.update({
      where: {
        id,
      },
      data: {
        ...parsed,
        fields: {
          deleteMany: {
            id: {
              notIn: parsed.fields,
            },
          },
          connect: fields.map(id => {
            return {
              id,
            }
          }),
        },
        skills: {
          deleteMany: {
            id: {
              notIn: parsed.skills,
            },
          },
          connect: skills.map(id => {
            return {
              id,
            }
          }),
        },
        expiresAt: getExpirationDate(parsed.expiresAt),
      },
    })

    return NextResponse.redirect(url(`/home/offers/${id}`))
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: Context) {
  try {
    const activeUser = await auth.user(request)

    const offer = await prisma.offer.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    })

    if (offer !== null && offer.companyId === activeUser.id) {
      await prisma.offer.deleteMany({
        where: { id },
      })
    }

    return NextResponse.redirect(url('/home/offers'))
  } catch (error) {
    return handleError(error)
  }
}
