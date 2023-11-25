import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { notify } from '@/lib/notifications/notify'
import { object } from 'zod'
import { defaults } from '@/lib/validation/schemas/defaults'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = object({
      teamId: defaults.id,
      projectId: defaults.id,
    }).parse(data)
    const { id: userId, name, type } = await auth.user(request)

    if (type !== 'PERSON') {
      notFound()
    }

    const team = await prisma.team.findFirst({
      where: { id: parsed.teamId },
      select: {
        id: true,
        name: true,
        leader: {
          select: {
            companyId: true,
            personId: true,
          },
        },
      },
    })

    if (team == null) {
      notFound()
    }

    const { projectId, ...rest } = parsed
    await prisma.invitation.create({
      data: {
        ...rest,
        personId: userId,
      },
    })

    const authUser = await prisma.authUser.findFirstOrThrow({
      where: {
        OR: [
          {
            person: {
              id: team.leader.personId ?? '',
            },
          },
          {
            company: {
              id: team.leader.companyId ?? '',
            },
          },
        ],
      },
      select: {
        id: true,
      },
    })

    await notify('invitation-asked', authUser.id, {
      user: name,
      team: team.name,
      teamId: team.id,
    })

    return NextResponse.redirect(url(`/home/projects/${projectId}?alert=invitation_sent`))
  } catch (error) {
    return handleError(error, data)
  }
}
