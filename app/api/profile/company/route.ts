import prisma from '@/prisma/client'
import authOptions from '@/lib/auth-options'
import { type Prisma } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  const body = await req.formData()
  const data = Object.fromEntries(body.entries()) as unknown as Prisma.CompanyCreateInput

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email ?? '',
      },
    })

    if (user === null) {
      return NextResponse.json({ message: 'Must sign in' }, { status: 401 })
    }

    const company = await prisma.company.create({ data })

    await prisma.employee.create({
      data: {
        role: 'OWNER',
        companyId: company.id,
        userId: user?.id,
      },
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
