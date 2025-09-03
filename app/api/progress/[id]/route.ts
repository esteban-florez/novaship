import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import { schema } from '@/lib/validation/schemas/status'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function PATCH(request: NextRequest, { params: { id } }: PageContext) {
  let data
  try {
    const { id: userId } = await auth.user(request)

    const progress = await prisma.progress.findUnique({
      where: { id },
      include: {
        recruitment: {
          include: {
            vacant: true,
          },
        },
      },
    })

    if (progress === null || progress.status !== 'PENDING' || progress.recruitment.vacant.companyId !== userId) {
      notFound()
    }

    const data = await request.json()
    const parsed = schema.parse(data)
    const { status } = parsed

    await prisma.progress.update({
      where: { id },
      data: { status },
    })

    const { recruitmentId } = progress

    return NextResponse.redirect(
      url(`home/internships/${recruitmentId}/progress?alert=progress_updated`)
    )
  } catch (error) {
    return handleError(error, data)
  }
}
