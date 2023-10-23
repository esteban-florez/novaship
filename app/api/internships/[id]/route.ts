import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function DELETE(request: NextRequest, { params: { id } }: PageContext) {
  try {
    const { id: userId } = await auth.user(request)

    const query = { where: { id } }
    const internship = await prisma.internship.findUnique(query)

    if (internship === null ||
      internship.instituteId !== userId ||
      !(['PENDING', 'REJECTED']).includes(internship.status)) {
      notFound()
    }

    await prisma.internship.delete(query)

    return NextResponse.redirect(
      url(`home/institutes/${userId}/internships?alert=internship_deleted`)
    )
  } catch (error) {
    return handleError(error)
  }
}
