import { schema } from '@/lib/validation/schemas/project'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import collect from '@/lib/utils/collection'
import { getProjectLeader } from '@/lib/utils/tables'

// ESTEBAN ESTABAS HACIENDO ESTO ACUERDATE
// ya arregle ambas rutas como tal, creo
// falta ver donde se usan, arreglar el form
// y el schema si es necesario
export async function PUT(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.user(request)

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        categories: true,
        person: true,
        team: {
          include: {
            memberships: true,
            leader: true,
          },
        },
      },
    })

    // DRY project validation
    if (project === null) {
      notFound()
    }

    const isOwner = getProjectLeader(project).id === user.id

    if (!isOwner) {
      notFound()
    }

    const projectCategories = collect(project.categories).ids()
    const newCategories = collect(parsed.categories).deleteDuplicatesFrom(projectCategories)

    const { teamwork, ...parsedData } = parsed

    await prisma.project.update({
      where: { id },
      data: {
        ...parsedData,
        categories: {
          deleteMany: {
            id: {
              notIn: parsedData.categories,
            },
          },
          connect: newCategories.map(id => ({ id })),
        },
      },
    })

    return NextResponse.redirect(url('home/projects?alert=project_updated'))
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: PageContext) {
  try {
    const user = await auth.user(request)

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        person: true,
        team: {
          include: {
            memberships: true,
            leader: true,
          },
        },
      },
    })

    // DRY project validation
    if (project === null) {
      notFound()
    }

    const isOwner = getProjectLeader(project).id === user.id

    if (!isOwner) {
      notFound()
    }

    await prisma.project.deleteMany({
      where: { id },
    })

    return NextResponse.redirect(url('/home/projects?alert=project_deleted'))
  } catch (error) {
    return handleError(error)
  }
}
