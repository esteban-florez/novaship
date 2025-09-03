import { schema as personSchema } from '@/lib/validation/schemas/profile/person'
import { schema as companySchema } from '@/lib/validation/schemas/profile/company'
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
    const { id, type } = await auth.user(request)
    data = await request.json()

    if (type === 'PERSON') {
      const newData = {
        ...data,
        employable: typeof data.employable === 'boolean' ? String(data.employable) : 'false',
      }

      const parsed = personSchema.parse(newData)

      const user = await prisma.person.findUnique({
        where: { id },
      })

      if (user == null) {
        notFound()
      }

      const { categories, skills, grades, ...rest } = parsed
      await prisma.person.update({
        where: { id },
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
    }

    if (type === 'COMPANY') {
      const parsed = companySchema.parse(data)

      const user = await prisma.company.findUnique({
        where: { id },
      })

      if (user == null) {
        notFound()
      }

      await prisma.company.update({
        where: { id },
        data: {
          ...parsed,
        },
      })
    }

    return NextResponse.redirect(url('/home/profile?alert=profile_updated'))
  } catch (error) {
    return handleError(error, data)
  }
}
