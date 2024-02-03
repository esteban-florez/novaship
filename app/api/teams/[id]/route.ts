import { schema } from '@/lib/validation/schemas/team'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { getMyTeam } from '@/lib/data-fetching/teams'
import { notify } from '@/lib/notifications/notify'
import logEvent from '@/lib/data-fetching/log'

export async function PUT(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { id: userId, name, authUserId } = await auth.user(request)

    const team = await getMyTeam({ userId })
    if (team == null) {
      notFound()
    }

    const { categories, membersIds, ...rest } = parsed
    await prisma.team.update({
      where: {
        id,
      },
      data: {
        ...rest,
        categories: {
          set: categories.map(id => ({ id })),
        },
      },
    })

    const teamMembers = team.memberships.map(member => member.personId)
    const invitations: string[] = membersIds.filter(member => !teamMembers.includes(member) && member)

    await prisma.invitation.createMany({
      data: invitations.map(invitation => {
        return {
          personId: invitation,
          teamId: team.id,
          interested: 'COMPANY',
        }
      }),
    })

    const authUsers = await prisma.authUser.findMany({
      where: {
        person: {
          id: {
            in: invitations.map(member => member),
          },
        },
      },
      select: {
        id: true,
      },
    })

    await logEvent({
      title: 'Equipo',
      description: `El equipo "${parsed.name}" ha sido actualizado`,
      status: 'Success',
      authUserId,
    })

    for (const authUser of authUsers) {
      await notify('invitation-sent', authUser.id, {
        user: name,
        team: team.name,
      })
    }

    return NextResponse.redirect(url(`/home/teams/${id}?alert=team_updated`))
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: PageContext) {
  try {
    const { id: userId, authUserId } = await auth.user(request)
    const team = await getMyTeam({ userId })

    if (team == null) {
      notFound()
    }

    await prisma.team.delete({
      where: { id },
    })

    await logEvent({
      title: 'Equipo',
      description: `El equipo "${team.name}" ha sido eliminado`,
      status: 'Warning',
      authUserId,
    })

    return NextResponse.redirect(url('/home/teams'))
  } catch (error) {
    return handleError(error)
  }
}
