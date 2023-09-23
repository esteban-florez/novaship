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
      redirect('/home/projects')
    }

    const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)

    if (!isOwner) {
      redirect('/home/projects')
    }

    const projectCategories = project.categories.map(category => {
      return category.id
    })

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

    return NextResponse.redirect(url('home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: Context) {
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
      redirect('/home/projects')
    }

    const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)

    if (!isOwner) {
      redirect('/home/projects')
    }

    await prisma.project.deleteMany({
      where: { id },
    })

    return NextResponse.redirect(url('/home/projects'))
  } catch (error) {
    return handleError(error)
  }
}
