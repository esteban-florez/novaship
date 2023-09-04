import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth/api'
import { schema } from '@/lib/validation/schemas/memberships'
import { NextResponse, type NextRequest } from 'next/server'
import { nativeEnum, object, string } from 'zod'
import messages from '@/lib/validation/messages'
import prisma from '@/prisma/client'
import { url } from '@/lib/utils/url'

// TODO -> buscar alguna alternativa para no hacer dos queries
export async function PUT(request: NextRequest) {
  const MEMBERSHIPS_ACTIONS = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
  } as const

  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.user(request)

    const validationSchema = object({
      action: nativeEnum(MEMBERSHIPS_ACTIONS, messages.enum),
      projectId: string(messages.string)
        .cuid(messages.cuid),
    })

    const appendParsed = validationSchema.parse(data)

    const project = await prisma.project.findFirst({
      where: {
        id: appendParsed.projectId,
      },
      include: {
        person: true,
        company: true,
      },
    })

    if (project === null || ((project.companyId ?? project.personId) !== user.id)) {
      return NextResponse.redirect(url('home/projects'))
    }

    if (appendParsed.action === 'ADD') {
      await prisma.project.update({
        where: {
          id: appendParsed.projectId,
        },
        data: {
          memberships: {
            createMany: {
              data: parsed.members.map(id => {
                return {
                  personId: id,
                }
              }),
            },
          },
        },
      })
    }

    if (appendParsed.action === 'REMOVE') {
      await prisma.project.update({
        where: {
          id: appendParsed.projectId,
        },
        data: {
          memberships: {
            deleteMany: {
              personId: {
                in: parsed.members.map(id => id),
              },
            },
          },
        },
      })
    }

    return NextResponse.json(project)
  } catch (error) {
    return handleError(error, data)
  }
}
