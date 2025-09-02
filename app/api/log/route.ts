import logEvent, { type Model } from '@/lib/data-fetching/log'
import { handleError } from '@/lib/errors/api'
import messages from '@/lib/validation/messages'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { type NextRequest, NextResponse } from 'next/server'
import { object, string } from 'zod'

export async function POST(request: NextRequest) {
  let data
  try {
    const schema = object({
      model: string(messages.string),
      session: string(messages.string),
    })
    data = await request.json()
    const parsed = schema.parse(data)

    const { auth_user: { id: authUserId } } = await prisma.authSession.findFirstOrThrow({
      where: { id: parsed.session },
      select: {
        auth_user: {
          select: {
            id: true,
          },
        },
      },
    })

    if (authUserId == null) {
      notFound()
    }

    await logEvent({
      action: 'Ingresó a la vista',
      model: parsed.model as Model,
      status: 'Info',
      authUserId,
    })

    // return NextResponse.next()
    return NextResponse.json(null, {
      status: 200,
    })
  } catch (error) {
    return handleError(error, data)
  }
}
