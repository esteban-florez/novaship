import prisma from '@/prisma/client'
import authOptions from '@/utils/authOptions'
import { type Prisma } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)

  if (session === null) {
    return NextResponse.error()
  }

  // TODO -> input validation
  const body = await req.formData()
  const data = Object.fromEntries(body.entries()) as unknown as Prisma.UserUpdateInput

  let updateUser
  try {
    updateUser = await prisma.user.update({
      where: {
        email: String(session?.user?.email ?? ''),
      },
      data,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user' }, {
      status: 500,
    })
  }

  return NextResponse.json(updateUser, {
    status: 200,
  })
}
