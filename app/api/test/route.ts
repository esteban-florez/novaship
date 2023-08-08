import { handleError } from '@/lib/errors/api'
import { schema } from '@/lib/validation/schemas/server/test'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = await schema.parseAsync(data)
    const location = await prisma.location.create({
      data: {
        title: parsed.name,
      },
    })
    return NextResponse.json(location)
  } catch (error) {
    const { status, body } = handleError(error, data)
    return NextResponse.json(body, { status })
  }
}
