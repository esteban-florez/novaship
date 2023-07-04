import prisma from '@/prisma/client'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const res = await request.json()
  const email: string = res?.email

  if (email !== '' && email !== null && email !== undefined) {
    return NextResponse.json({
      status: 400,
      message: 'Email is missing',
    })
  }

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (user != null) {
    return NextResponse.json(user)
  }
}
