import prisma from '@/prisma/client'
import authOptions from '@/lib/auth-options'
import { type Prisma } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)
  const body = await req.formData()
  const data = Object.fromEntries(body.entries()) as unknown as Prisma.UserUpdateInput

  try {
    await prisma.user.update({
      where: {
        email: session?.user?.email ?? '',
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
