import { handleError } from '@/lib/api-errors'
import { auth } from '@/lib/auth'
import { schema } from '@/lib/validation/schemas/project'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { title, description, visibility } = schema.parse(data)
    const user = await auth.person()

    await prisma.project.create({
      data: {
        title,
        description,
        visibility,
        person: {
          connect: {
            id: user.id,
          },
        },
      },
    })

    return NextResponse.redirect(new URL('/home/projects', request.url))
  } catch (error) {
    const { status, body } = handleError(error)
    return NextResponse.json(body, { status })
  }
}
