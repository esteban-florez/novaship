import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import numbers from '@/lib/utils/number'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/team'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  let data
  try {
    const { id, type } = await auth.user(request)

    if (type === 'INSTITUTE') {
      notFound()
    }

    const ids = {
      personId: type === 'PERSON' ? id : null,
      companyId: type === 'COMPANY' ? id : null,
    }

    data = await request.json()
    const parsed = schema.parse(data)
    const code = `PR-${numbers(100_000, 999_999).random()}`
    const parsedWithCode = { ...parsed, code }
    const invitations = parsed.membersIds.map(personId => ({ personId }))

    const { id: teamId } = await prisma.team.create({
      data: {
        ...parsedWithCode,
        invitations: {
          createMany: {
            data: invitations,
          },
        },
        leader: {
          create: ids,
        },
        categories: {
          connect: parsed.categories.map(id => ({ id })),
        },
      },
    })

    return NextResponse.redirect(url(`/home/teams/${teamId}?alert=team_created`))
  } catch (error) {
    return handleError(error, data)
  }
}
