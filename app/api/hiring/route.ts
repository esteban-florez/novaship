import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/hiring'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { notify } from '@/lib/notifications/notify'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id: userId, name, type } = await auth.user(request)

    if (type === 'PERSON' && parsed.offerId != null) {
      await prisma.hiring.create({
        data: {
          interested: 'PERSON',
          personId: userId,
          offerId: parsed.offerId,
        },
      })

      return NextResponse.redirect(url(`/home/offers/${parsed.offerId}?alert=offer_applied`))
    }

    if (type === 'COMPANY' && parsed.offerId != null && parsed.userId != null) {
      const offer = await prisma.offer.findFirstOrThrow({
        where: { id: parsed.offerId },
        select: {
          title: true,
        },
      })

      const authUser = await prisma.authUser.findFirstOrThrow({
        where: {
          person: {
            id: parsed.userId,
          },
        },
      })

      await prisma.hiring.create({
        data: {
          interested: 'COMPANY',
          personId: parsed.userId,
          offerId: parsed.offerId,
        },
      })

      await notify('hiring-created', authUser.id, {
        company: name,
        title: offer.title,
        offerId: parsed.offerId,
      })

      return NextResponse.redirect(url(`/home/offers/${parsed.offerId}?alert=offer_user_postulation`))
    }

    notFound()
  } catch (error) {
    handleError(error, data)
  }
}
