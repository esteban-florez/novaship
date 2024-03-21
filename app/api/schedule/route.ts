import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/schedule'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'

export async function GET(request: NextRequest) {
  try {
    const { id, type } = await auth.user(request)
    if (type !== 'PERSON') notFound()

    const { schedule } = await prisma.person.findUniqueOrThrow({
      where: { id },
    })

    return NextResponse.json({ schedule })
  } catch (error) {

  }
}

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id, type } = await auth.user(request)

    if (type !== 'PERSON') notFound()

    let schedule
    if (parsed.schedule === null) {
      schedule = new Array(24).fill(null).map(() => {
        return new Array(7).fill(null).map(() => {
          return false
        })
      })
    } else {
      schedule = parsed.schedule
    }

    await prisma.person.update({
      where: { id },
      data: { schedule },
    })

    return NextResponse.json({})
  } catch (error) {
    handleError(error, data)
  }
}
