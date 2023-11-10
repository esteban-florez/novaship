import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth/api'
import { schema } from '@/lib/validation/schemas/project'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { randomCode } from '@/lib/utils/code'

export async function POST(request: NextRequest) {
  let data
  try {
    let projectId
    data = await request.json()
    console.log(data)
    const parsed = schema.parse(data)
    const { id, type } = await auth.user(request)

    if (type === 'INSTITUTE') {
      notFound()
    }

    const code = randomCode('project')
    const parsedWithCode = { ...parsed, code }

    // const projectImagePath = parsed.image !== undefined
    //   ? await storeFile(parsed.image)
    //   : null

    // const parsedWithImage = {...parsed, image: projectImagePath}

    if (type === 'PERSON') {
      if (parsed.teamId == null) {
        ({ id: projectId } = await prisma.project.create({
          data: {
            ...parsedWithCode,
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
            ...parsedWithCode,
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
          ...parsedWithCode,
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
