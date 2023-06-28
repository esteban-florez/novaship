import prisma from '@/prisma/client'
import { hash } from 'bcrypt'
import { type Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // TODO -> input validation
  const body = await req.formData()
  const data = Object.fromEntries(body.entries()) as unknown as Prisma.UserCreateInput
  data.password = await hash(data.password, 10)

  let user
  try {
    user = await prisma.user.create({ data })
  } catch (error) {
    return NextResponse.error()
  }

  return NextResponse.json(user, {
    status: 201,
    statusText: 'OK',
  })
}
