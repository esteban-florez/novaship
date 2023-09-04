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
    const user = await auth.user(request)

    const ids = {
      companyId: user.type === 'COMPANY' ? user.id : null,
      personId: user.type === 'PERSON' ? user.id : null,
    }

    await prisma.project.create({
      data: {
        ...parsed,
        ...ids,
        fields: {
          connect: parsed.fields.map(field => {
            return {
              id: field,
            }
          }),
        },
        memberships: {
          createMany: {
            data: parsed.memberships.map(person => {
              return {
                personId: person,
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
