import { handleError } from '@/lib/errors/api'
import { auth } from '@/lib/auth/api'
import { schema } from '@/lib/validation/schemas/project'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'
import { url } from '@/lib/utils/url'

export async function POST(request: NextRequest) {
  // TODO -> Validar que tipo de usuario hace la petición.
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const user = await auth.person(request)

    await prisma.project.create({
      data: {
        ...parsed,
        person: {
          connect: {
            id: user.id,
          },
        },
        fields: {
          connect: data.selectedFields.map((field: { id: string }) => {
            return {
              id: field.id,
            }
          }),
        },
        memberships: {
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
