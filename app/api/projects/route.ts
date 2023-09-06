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
    const activeUser = await auth.user(request)

    const team = await prisma.team.findFirst({
      where: {
        memberships: {
          some: {
            OR: [
              { companyId: activeUser.id },
              { personId: activeUser.id },
            ],
          },
        },
      },
    })

    if (team === null) return NextResponse.redirect(url('home/projects'))

    await prisma.project.create({
      data: {
        ...parsed,
        categories: {
          connect: parsed.categories.map(category => {
            return {
              id: category,
            }
          }),
        },
      },
    })

    return NextResponse.redirect(url('home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}
