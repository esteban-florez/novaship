import { NextResponse, type NextRequest } from 'next/server'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { nativeEnum, z } from 'zod'
import messages from '@/lib/validation/messages'
import { Status } from '@prisma/client'
import { defaults } from '@/lib/validation/schemas/defaults'
import { notify } from '@/lib/notifications/notify'
import logEvent from '@/lib/data-fetching/log'

export async function PUT(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    data = await request.json()
    const { id: userId, name, authUserId, type } = await auth.user(request)

    const schema = z.object({
      status: nativeEnum(Status, messages.enum),
      offerId: defaults.id,
    })

    const parsed = schema.parse(data)

    if (type === 'PERSON') {
      const hiring = await prisma.hiring.findFirstOrThrow({
        where: { id },
        select: {
          offer: {
            select: {
              id: true,
              title: true,
            },
          },
          personId: true,
        },
      })

      if (hiring.personId !== userId) {
        notFound()
      }

      await prisma.hiring.update({
        where: { id },
        data: {
          ...parsed,
        },
      })

      if (parsed.status === 'ACCEPTED') {
        await prisma.offer.update({
          where: { id: hiring.offer.id },
          data: {
            limit: {
              decrement: 1,
            },
          },
        })
      }

      await notify(parsed.status === 'ACCEPTED' ? 'hiring-accepted' : 'hiring-declined', authUserId, {
        user: name,
        title: hiring.offer.title,
        offerId: hiring.offer.id,
      })

      await logEvent({
        title: 'Postulación',
        description: 'La postulación ha sido actualizada',
        status: 'Success',
        authUserId: userId,
      })

      return NextResponse.redirect(url(`/home/offers/${parsed.offerId}?alert=${parsed.status === 'ACCEPTED' ? 'hiring_success' : 'hiring_rejected'}`))
    }

    if (type === 'COMPANY') {
      const company = await prisma.company.findFirstOrThrow({
        where: {
          offers: {
            some: {
              hiring: {
                some: { id },
              },
            },
          },
        },
        select: {
          id: true,
          name: true,
          offers: {
            where: {
              hiring: {
                some: { id },
              },
            },
          },
        },
      })

      if (company.id !== userId) {
        notFound()
      }

      const hiring = await prisma.hiring.update({
        where: { id },
        data: {
          ...parsed,
        },
      })

      if (parsed.status === 'ACCEPTED') {
        await prisma.offer.update({
          where: { id: company.offers[0].id },
          data: {
            limit: {
              decrement: 1,
            },
          },
        })
      }

      const authUser = await prisma.authUser.findFirstOrThrow({
        where: {
          person: {
            id: hiring.personId,
          },
        },
      })

      await logEvent({
        title: 'Postulación',
        description: 'La postulación ha sido actualizada',
        status: 'Success',
        authUserId: userId,
      })

      await notify(parsed.status === 'ACCEPTED' ? 'hiring-accepted' : 'hiring-declined', authUser.id, {
        user: name,
        title: company.offers[0].title,
        offerId: company.offers[0].id,
      })

      return NextResponse.redirect(url(`/home/offers/${parsed.offerId}?alert=hiring_success`))
    }

    notFound()
  } catch (error) {
    const { authUserId } = await auth.user(request)
    await logEvent({
      title: 'Postulación',
      description: 'La postulación no pudo ser actualizada',
      status: 'Error',
      authUserId,
    })
    handleError(error, data)
  }
}
