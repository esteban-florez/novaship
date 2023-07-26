import { validateUser } from '@/lib/auth'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'

export async function PUT(request: NextRequest) {
  const { user } = await validateUser(request)
  const body = await request.formData()
  const data = Object.fromEntries(body.entries())

  try {
    if (user === null) {
      throw new Error('Unathenticated request.')
    }

    await prisma.authUser.update({
      where: {
        id: user.id,
      },
      data,
    })
  } catch (error) {
    return NextResponse.json('error', {
      status: 401,
    })
  }

  return NextResponse.json('succeded', {
    status: 200,
  })
}
