import prisma from '@/prisma/client'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import { type Prisma } from '@prisma/client'

export async function POST(req: Request) {
  const body = await req.formData()
  const data = Object.fromEntries(body.entries()) as unknown as Prisma.UserCreateInput
  data.password = await hash(data.password, 10)
  const user = await prisma.user.create({ data })

  return NextResponse.json(user)
}
