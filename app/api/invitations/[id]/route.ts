import { schema } from '@/lib/validation/schemas/invitation'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { notify } from '@/lib/notifications/notify'

export async function PUT(
  request: NextRequest,
  { params: { id } }: PageContext
) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { name, type } = await auth.user(request)

    if (type !== 'PERSON' && type !== 'COMPANY') {
      notFound()
    }

    const invitation = await prisma.invitation.findFirstOrThrow({
      where: { id },
      select: {
        personId: true,
        team: {
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
        },
      },
    })

    const authUser = await prisma.authUser.findFirstOrThrow({
      where: {
        OR: [
          {
            person: {
              id: invitation.team.leader.personId ?? '',
            },
          },
          {
            company: {
              id: invitation.team.leader.companyId ?? '',
            },
          },
        ],
      },
      select: {
        id: true,
      },
    })

    if (parsed.status === 'PENDING') {
      notFound()
    }

    await prisma.invitation.update({
      where: { id },
      data: {
        ...parsed,
      },
    })

    const notification =
      parsed.status === 'ACCEPTED'
        ? 'invitation-accepted'
        : 'invitation-rejected'
    const redirect =
      parsed.status === 'ACCEPTED'
        ? `/home/teams/${invitation.team.id}?alert=invitation_accepted`
        : '/home/invitations?alert=invitation_rejected'

    const userNotMember = await prisma.person.findFirst({
      where: { id: invitation.personId },
      select: {
        authUserId: true,
      },
    })

    await notify(
      notification,
      type === 'PERSON' ? authUser.id : userNotMember?.authUserId ?? '',
      {
        user: name,
        team: invitation.team.name,
        teamId: invitation.team.id,
      }
    )

    if (parsed.status === 'ACCEPTED') {
      await prisma.membership.create({
        data: {
          invitationId: id,
          personId: invitation.personId,
          teamId: invitation.team.id,
        },
      })
    }

    return NextResponse.redirect(url(redirect))
  } catch (error) {
    return handleError(error, data)
  }
}
