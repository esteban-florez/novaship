import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth/api'
import { schema } from '@/lib/validation/schemas/server/project'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { randomCode } from '@/lib/utils/code'
import { storeFile } from '@/lib/storage/storeFile'

export async function POST(request: NextRequest) {
  let data
  try {
    let projectId
    const formData = await request.formData()
    data = Object.fromEntries(formData.entries())
    const parsed = schema.parse(data)
    const { id, type } = await auth.user(request)

    if (type === 'INSTITUTE') {
      notFound()
    }

    const code = randomCode('project')

    const projectImagePath = parsed.image !== undefined
      ? await storeFile(parsed.image)
      : null

    const parsedAndFields = { ...parsed, code, image: projectImagePath }

    if (type === 'PERSON') {
      if (parsed.teamId == null) {
        ({ id: projectId } = await prisma.project.create({
          data: {
            ...parsedAndFields,
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
            ...parsedAndFields,
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
          ...parsedAndFields,
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

    return NextResponse.redirect(url('/home/projects'))
  } catch (error) {
    return handleError(error, data)
  }
}
