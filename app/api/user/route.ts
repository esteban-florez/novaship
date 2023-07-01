import prisma from '@/prisma/client'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const res = await request.json()
  const email = res?.email ?? ''

  if (!email) {
    return NextResponse.json({
      status: 400,
      message: 'Email is missing'
    })
  }

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (user) {
    return NextResponse.json(user)
  }
}
