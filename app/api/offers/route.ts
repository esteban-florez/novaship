import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/offer'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { getExpirationDate } from '@/lib/validation/expiration-dates'
import logEvent from '@/lib/data-fetching/log'
import { logs } from '@/lib/log'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id, type, authUserId } = await auth.user(request)

    if (type === 'COMPANY') {
      const { id: offerId } = await prisma.offer.create({
        data: {
          ...parsed,
          companyId: id,
          categories: {
            connect: parsed.categories.map(category => ({ id: category })),
          },
          skills: {
            connect: parsed.skills.map(skill => {
              return {
                id: skill,
              }
            }),
          },
          expiresAt: getExpirationDate(parsed.expiresAt),
        },
      })

      const { offer_create: { message, model, status } } = logs
      await logEvent({
        action: message,
        model,
        status,
        authUserId,
      })

      return NextResponse.redirect(url(`/home/offers/${offerId}?alert=offer_created`))
    }

    return NextResponse.redirect(url('/home/offers?alert=offer_unavailable'))
  } catch (error) {
    handleError(error, data)
  }
}
