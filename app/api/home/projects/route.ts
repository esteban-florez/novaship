import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth'
import { schema } from '@/lib/validation/schemas/project'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    // TODO D -> no se puede llamar esta función desde la API.
    const user = await auth.person()

    await prisma.project.create({
      data: {
        ...parsed,
        person: {
          connect: {
            id: user.id,
          },
        },
      },
    })

    return NextResponse.redirect(new URL('/home/projects', request.url))
  } catch (error) {
    const { status, body } = handleError(error, data)
    return NextResponse.json(body, { status })
  }
}
