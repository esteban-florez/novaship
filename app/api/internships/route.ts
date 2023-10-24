import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { defaults } from '@/lib/validation/schemas/defaults'
import { schema } from '@/lib/validation/schemas/internships/create'
import prisma from '@/prisma/client'
import { notFound, redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  let data
  try {
    const { id, type } = await auth.user(request)
    if (type !== 'INSTITUTE') {
      notFound()
    }

    data = await request.json()

    const parsed = schema
      .extend({ personId: defaults.id })
      .parse(data)

    const { categories } = parsed

    console.log(categories[0])

    const { id: internshipId } = await prisma.internship.create({
      data: {
        ...parsed,
        instituteId: id,
        completed: 0,
        categories: {
          connect: categories.map(id => ({ id })),
        },
      },
    })

    return redirect(`/home/internships/${internshipId}?alert=internship_created`)
  } catch (error) {
    return handleError(error, data)
  }
}
