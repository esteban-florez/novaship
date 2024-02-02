import { auth } from '@/lib/auth/api'
import logEvent from '@/lib/data-fetching/log'
import { getVacant } from '@/lib/data-fetching/vacants'
import { handleError } from '@/lib/errors/api'
import { set } from '@/lib/utils/queries'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/vacants/update'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function PATCH(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    const { id: userId } = await auth.user(request)

    const vacant = await getVacant(id)

    if (vacant === null || vacant.company.id !== userId) {
      notFound()
    }

    const data = await request.json()
    const parsed = schema.parse(data)
    const { categories, skills, grades } = parsed

    await prisma.vacant.update({
      where: { id: vacant.id },
      data: {
        ...parsed,
        categories: set(categories),
        skills: set(skills),
        grades: set(grades),
      },
    })

    await logEvent({
      title: 'Vacante',
      description: `La vacante "${parsed.description}" ha sido actualizada`,
      status: 'Success',
      authUserId: userId,
    })

    return NextResponse.redirect(
      url(`home/companies/${userId}/vacants/${id}?alert=vacant_updated`)
    )
  } catch (error) {
    const { authUserId } = await auth.user(request)
    await logEvent({
      title: 'Vacante',
      description: 'La vacante no pudo ser actualizada',
      status: 'Error',
      authUserId,
    })
    return handleError(error, data)
  }
}
