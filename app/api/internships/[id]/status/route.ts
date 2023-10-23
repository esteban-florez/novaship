import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { schema } from '@/lib/validation/schemas/internships/status'
import prisma from '@/prisma/client'
import { url } from '@/lib/utils/url'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function PATCH(
  request: NextRequest, { params: { id: internshipId } }: PageContext
) {
  try {
    const { id: personId } = await auth.user(request)

    const internship = await prisma.internship.findUnique({
      where: { id: internshipId },
    })

    if (internship === null ||
      internship.personId !== personId ||
      internship.status !== 'PENDING') {
      notFound()
    }

    const data = await request.json()
    const parsed = schema.parse(data)

    const updated = await prisma.internship.update({
      where: { id: internshipId },
      data: parsed,
    })

    if (updated.status === 'REJECTED') {
      return NextResponse.redirect(
        url(`home/persons/${personId}/internships?alert=internship_rejected`)
      )
    }

    return NextResponse.redirect(url(
      `home/internships/${updated.id}alert=internship_accepted`
    ))
  } catch (error) {
    return handleError(error)
  }
}
