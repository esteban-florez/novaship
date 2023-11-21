import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { notify } from '@/lib/notifications/notify'
import { randomCode } from '@/lib/utils/code'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/team'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  let data
  try {
    const { id, name, type } = await auth.user(request)

    if (type === 'INSTITUTE') {
      notFound()
    }

    const ids = {
      personId: type === 'PERSON' ? id : null,
      companyId: type === 'COMPANY' ? id : null,
    }

    data = await request.json()
    const parsed = schema.parse(data)
    const code = randomCode('team')
    const parsedWithCode = { ...parsed, code }
    const { membersIds, ...rest } = parsedWithCode
    const invitations = membersIds.map(personId => ({ personId }))

    const team = await prisma.team.create({
      data: {
        ...rest,
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

    const authUsers = await prisma.authUser.findMany({
      where: {
        person: {
          id: {
            in: invitations.map(invitation => invitation.personId),
          },
        },
      },
      select: {
        id: true,
      },
    })

    for (const authUser of authUsers) {
      await notify('invitation-sent', authUser.id, {
        user: name,
        team: team.name,
      })
    }

    return NextResponse.redirect(url(`/home/teams/${team.id}?alert=team_created`))
  } catch (error) {
    return handleError(error, data)
  }
}
