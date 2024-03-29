import { NextResponse, type NextRequest } from 'next/server'
import { schema } from '@/lib/validation/schemas/vacants/create'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'
import { connect } from '@/lib/utils/queries'
import logEvent from '@/lib/data-fetching/log'
import { logs } from '@/lib/log'

export async function POST(request: NextRequest) {
  let data
  try {
    data = await request.json()
    const parsed = schema.parse(data)
    const { categories, skills, grades, duration } = parsed
    const { id: userId, type, authUserId } = await auth.user(request)

    if (type !== 'COMPANY') {
      notFound()
    }

    const { id } = await prisma.vacant.create({
      data: {
        ...parsed,
        duration: Number(duration),
        companyId: userId,
        grades: connect(grades),
        categories: connect(categories),
        skills: connect(skills),
      },
    })

    const { vacant_create: { message, model, status } } = logs
    await logEvent({
      action: message,
      model,
      status,
      authUserId,
    })

    return NextResponse.redirect(
      url(`home/companies/${userId}/vacants/${id}?alert=vacant_created`)
    )
  } catch (error) {
    return handleError(error, data)
  }
}
