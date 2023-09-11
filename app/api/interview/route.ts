import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/interview'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { url } from '@/lib/utils/url'
import { object, string } from 'zod'
import messages from '@/lib/validation/messages'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const activeUser = await auth.user(request)

    const validationSchema = object({
      offerId: string(messages.string)
        .cuid(messages.cuid),
      hiringId: string(messages.string)
        .cuid(messages.cuid),
    })

    const appendParsed = validationSchema.parse(data)

    const hiring = await prisma.hiring.findFirst({
      where: {
        offer: {
          companyId: activeUser.id,
        },
      },
    })

    if (hiring === null) {
      return NextResponse.redirect(url(`/home/offers/${appendParsed.offerId}`))
    }

    const { status, ...interviewData } = parsed

    await prisma.hiring.update({
      where: { id: hiring.id },
      data: {
        status,
      },
    })

    const interview = await prisma.interview.create({
      data: {
        ...interviewData,
        hiringId: appendParsed.hiringId,
      },
    })

    console.log(interview)

    return NextResponse.redirect(url(`/home/offers/${appendParsed.offerId}`))
  } catch (error) {
    handleError(error, data)
  }
}
