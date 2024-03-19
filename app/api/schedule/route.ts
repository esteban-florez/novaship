import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/schedule'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const { schedule } = schema.parse(data)
    const { authUserId, type } = await auth.user(request)

    if (type !== 'PERSON') notFound()

    console.log('act')

    await prisma.person.update({
      where: { authUserId },
      data: { schedule },
    })

    return NextResponse.json({})
  } catch (error) {
    handleError(error, data)
  }
}
