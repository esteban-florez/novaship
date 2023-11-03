import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { schema } from '@/lib/validation/schemas/internships/status'
import prisma from '@/prisma/client'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function PATCH(
  request: NextRequest, { params: { id } }: PageContext
) {
  try {
    const { id: personId } = await auth.user(request)

    const where = { id }

    const internship = await prisma.internship.findUnique({ where })

    if (internship === null ||
      internship.personId !== personId ||
      internship.status !== 'PENDING') {
      notFound()
    }

    const data = await request.json()
    const parsed = schema.parse(data)

    await prisma.internship.update({
      where,
      data: parsed,
    })

    if (parsed.status === 'REJECTED') {
      return NextResponse.redirect(
        url(`home/persons/${personId}/internships?alert=internship_rejected`)
      )
    }

    return NextResponse.redirect(url(
      `home/internships/${id}?alert=internship_accepted`
    ))
  } catch (error) {
    return handleError(error)
  }
}
