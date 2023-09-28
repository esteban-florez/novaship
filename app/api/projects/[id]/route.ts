import { schema } from '@/lib/validation/schemas/project'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import collect from '@/lib/utils/collection'

export async function PUT(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const activeUser = await auth.user(request)

    const project = await prisma.project.findFirst({
      where: {
        id,
      },
      include: {
        categories: true,
        team: {
          include: {
            memberships: {
              include: {
                company: {
                  select: {
                    id: true,
                  },
                },
                person: {
                  select: {
                    id: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    // DRY project validation
    if (project === null) {
      notFound()
    }

    const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)

    if (!isOwner) {
      notFound()
    }

    const projectCategories = project.categories.map(category => category.id)
    const categories = collect(parsed.categories).deleteDuplicatesFrom(projectCategories)

    const { teamwork, ...parsedData } = parsed

    await prisma.project.update({
      where: {
        id,
      },
      data: {
        ...parsedData,
        categories: {
          deleteMany: {
            id: {
              notIn: parsedData.categories,
            },
          },
          connect: categories.map(id => {
            return {
              id,
            }
          }),
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
    const activeUser = await auth.user(request)

    const project = await prisma.project.findFirst({
      where: {
        id,
      },
      include: {
        team: {
          include: {
            memberships: {
              include: {
                company: {
                  select: {
                    id: true,
                  },
                },
                person: {
                  select: {
                    id: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    // DRY project validation
    if (project === null) {
      notFound()
    }

    const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)

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
