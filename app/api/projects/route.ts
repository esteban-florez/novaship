import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth/api'
import { schema } from '@/lib/validation/schemas/project'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'
import { url } from '@/lib/utils/url'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.person(request)

    await prisma.project.create({
      data: {
        ...parsed,
        // TODO -> y que pasa si el proyecto lo crea una empresa?
        person: {
          connect: {
            id: user.id,
          },
        },
      },
    })

    return NextResponse.redirect(url('home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}
