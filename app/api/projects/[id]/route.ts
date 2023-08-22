import { schema } from '@/lib/validation/schemas/project'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { redirect } from 'next/navigation'

export async function PUT(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.person(request)

    const project = await prisma.project.findUnique({
      where: {
        id: data.projectId,
      },
    })

    if (project?.personId !== user.id) redirect('/home/projects')

    await prisma.project.update({
      where: {
        id: data.projectId,
      },
      data: {
        ...parsed,
        fields: {
          disconnect: data.oldFields.map((id: { id: string }) => {
            return {
              id,
            }
          }),
          connect: data.selectedFields.map((field: { id: string }) => {
            return {
              id: field.id,
            }
          }),
        },
        memberships: {
          deleteMany: {
            personId: {
              in: data.oldPersons.map((id: { id: string }) => id),
            },
          },
          createMany: {
            data: data.selectedPersons.map((person: { id: string }) => {
              return {
                personId: person.id,
              }
            }),
          },
        },
      },
    })

    return NextResponse.redirect(url('home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}

// Check 2 -> borrar las relaciones (si tiene) antes de borrar el proyecto
export async function DELETE(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const user = await auth.person(request)

    const project = await prisma.project.findFirst({
      where: {
        id: data.id,
        personId: user.id,
      },
      include: {
        memberships: true,
      },
    })

    if (project === null) redirect('/home/projects')

    if (project?.memberships !== null) {
      await prisma.membership.deleteMany({
        where: {
          projectId: project?.id,
        },
      })
    }

    const deleteProject = await prisma.project.deleteMany({
      where: {
        id: project.id,
      },
    })

    return NextResponse.json(deleteProject)
  } catch (error) {
    return handleError(error, data)
  }
}
