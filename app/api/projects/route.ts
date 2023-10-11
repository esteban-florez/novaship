import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth/api'
import { schema } from '@/lib/validation/schemas/project'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'
import { url } from '@/lib/utils/url'

export async function POST(request: NextRequest) {
  let data
  try {
    let projectId
    data = await request.json()
    const parsed = schema.parse(data)
    const { id, type } = await auth.user(request)

    if (type === 'PERSON') {
      if (parsed.teamId == null) {
        ({ id: projectId } = await prisma.project.create({
          data: {
            ...parsed,
            personId: id,
            categories: {
              connect: parsed.categories.map(category => {
                return {
                  id: category,
                }
              }),
            },
          },
        }))
      } else {
        ({ id: projectId } = await prisma.project.create({
          data: {
            ...parsed,
            categories: {
              connect: parsed.categories.map(category => {
                return {
                  id: category,
                }
              }),
            },
          },
        }))
      }
    }

    if (type === 'COMPANY') {
      ({ id: projectId } = await prisma.project.create({
        data: {
          ...parsed,
          categories: {
            connect: parsed.categories.map(category => {
              return {
                id: category,
              }
            }),
          },
        },
      }))
    }

    if (projectId != null) {
      return NextResponse.redirect(url(`home/projects/${projectId}?alert=project_created`))
    }

    return NextResponse.redirect(url('home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}
