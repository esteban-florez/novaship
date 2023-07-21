import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'

import { NextResponse } from 'next/server'

export async function PUT(req: Request) {
  const session = { user: { email: 'eflorez077@gmail.com' } }
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
