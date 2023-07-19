import prisma from '@/prisma/client'
import authOptions from '@/lib/auth-options'
import { type Prisma } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)
  const body = await req.formData()
  const data = Object.fromEntries(body.entries()) as unknown as Prisma.ProfileUpdateInput

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email ?? '',
      },
    })

    await prisma.profile.update({
      where: {
        userId: user?.id,
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
