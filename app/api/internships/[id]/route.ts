import { auth } from '@/lib/auth/api'
import logEvent from '@/lib/data-fetching/log'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/internships/create'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function PUT(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    const { id: userId, authUserId } = await auth.user(request)

    const query = { where: { id } }
    const internship = await prisma.internship.findUnique(query)

    if (internship === null ||
      internship.instituteId !== userId ||
      internship.status !== 'PENDING') {
      notFound()
    }

    const data = await request.json()
    const parsed = schema.parse(data)
    const { categories, hours } = parsed

    await prisma.internship.update({
      ...query,
      data: {
        ...parsed,
        hours: Number(hours),
        categories: {
          set: categories.map(id => ({ id })),
        },
      },
    })

    await logEvent({
      title: 'Pasantía',
      description: 'La pasantía ha sido actualizada',
      status: 'Error',
      authUserId,
    })

    return NextResponse.redirect(
      url(`home/internships/${id}?alert=internship_updated`)
    )
  } catch (error) {
    return handleError(error, data)
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: PageContext) {
  try {
    const { id: userId, authUserId } = await auth.user(request)

    const query = { where: { id } }
    const internship = await prisma.internship.findUnique(query)

    if (internship === null ||
      internship.instituteId !== userId ||
      !(['PENDING', 'REJECTED']).includes(internship.status)) {
      notFound()
    }

    await prisma.internship.delete(query)

    await logEvent({
      title: 'Pasantía',
      description: 'La pasantía ha sido eliminada',
      status: 'Warning',
      authUserId,
    })

    return NextResponse.redirect(
      url(`home/institutes/${userId}/internships?alert=internship_deleted`)
    )
  } catch (error) {
    return handleError(error)
  }
}
