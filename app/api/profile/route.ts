import { schema } from '@/lib/validation/schemas/profile/person'
import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'

// TODO -> cambiar el schema para aceptar los 3 usuarios
export async function PUT(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const newData = {
      ...data,
      employable: typeof data.employable === 'boolean' ? String(data.employable) : 'false',
    }

    const parsed = schema.parse(newData)
    const { id } = await auth.user(request)

    const user = await prisma.person.findUnique({
      where: { id },
    })

    if (user == null) {
      notFound()
    }

    const { categories, skills, grades, ...rest } = parsed
    await prisma.person.update({
      where: {
        id,
      },
      data: {
        ...rest,
        categories: {
          set: categories.map(id => ({ id })),
        },
        skills: {
          set: skills.map(id => ({ id })),
        },
        grades: {
          set: grades.map(id => ({ id })),
        },
      },
    })

    return NextResponse.redirect(url('/home/profile?alert=profile_updated'))
  } catch (error) {
    return handleError(error, data)
  }
}
