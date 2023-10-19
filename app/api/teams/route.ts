import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
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

    data = await request.json()
    const parsed = schema.parse(data)

    const memberships = [{
      personId: type === 'PERSON' ? id : null,
      companyId: type === 'COMPANY' ? id : null,
      isLeader: true,
    }, ...parsed.memberships.map(id => ({ personId: id }))]

    const { id: teamId } = await prisma.team.create({
      data: {
        ...parsed,
        memberships: {
          createMany: {
            // @ts-expect-error Outdated code
            data: memberships,
          },
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
