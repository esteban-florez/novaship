import { schema } from '@/lib/validation/schemas/project'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { redirect } from 'next/navigation'
import collect from '@/lib/utils/collection'
interface Context {
  params: {
    id: string
  }
}

export async function PUT(request: NextRequest, { params: { id } }: Context) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.user(request)

    const project = await prisma.project.findFirst({
      where: {
        id,
      },
      include: {
        fields: true,
        memberships: true,
      },
    })

    if (project === null || (project.personId ?? project.companyId) !== user.id) {
      redirect('/home/projects')
    }

    const projectMembers = project.memberships.map(member => {
      return member.personId
    })

    const projectFields = project.fields.map(field => {
      return field.id
    })

    const members = collect(parsed.memberships).deleteDuplicatesFrom(projectMembers)
    const fields = collect(parsed.fields).deleteDuplicatesFrom(projectFields)

    await prisma.project.update({
      where: {
        id,
      },
      data: {
        ...parsed,
        fields: {
          deleteMany: {
            id: {
              notIn: parsed.fields,
            },
          },
          connect: fields.map(id => {
            return {
              id,
            }
          }),
        },
        memberships: {
          deleteMany: {
            personId: {
              notIn: parsed.memberships,
            },
          },
          createMany: {
            data: members.map(member => {
              return {
                personId: member,
              }
            }),
            skipDuplicates: true,
          },
        },
      },
    })

    return NextResponse.redirect(url('home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: Context) {
  try {
    await auth.person(request)

    const project = await prisma.project.deleteMany({
      where: { id },
    })

    return NextResponse.json(project)
  } catch (error) {
    return handleError(error)
  }
}
