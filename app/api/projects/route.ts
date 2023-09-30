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
    const { id, type } = await auth.user(request)

    const ids = {
      personId: type === 'PERSON' ? id : null,
      companyId: type === 'COMPANY' ? id : null,
    }

    let team

    if (parsed.teamwork === 'Solo') {
      team = await prisma.team.create({
        data: {
          name: 'Pendiente',
          description: 'Pendiente',
          memberships: {
            connectOrCreate: {
              where: { id },
              create: {
                ...ids,
                isLeader: true,
                confirmed: true,
              },
            },
          },
        },
      })
    }

    if (parsed.teamwork === 'Team') {
      team = await prisma.team.findFirst({
        where: {
          memberships: {
            every: {
              isLeader: true,
              OR: [
                { companyId: id },
                { personId: id },
              ],
            },
          },
        },
      })
    }

    if (team == null) {
      return NextResponse.redirect(url('home/projects?alert=project_team_required'))
    }

    const { teamwork, ...parsedData } = parsed

    const { id: projectId } = await prisma.project.create({
      data: {
        ...parsedData,
        teamId: team.id,
        categories: {
          connect: parsedData.categories.map(category => {
            return {
              id: category,
            }
          }),
        },
      },
    })

    return NextResponse.redirect(url(`home/projects/${projectId}?alert=project_created`))
  } catch (error) {
    return handleError(error, data)
  }
}
