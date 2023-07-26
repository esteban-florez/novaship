import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function PUT(req: Request) {
  const body = await req.formData()
  const data = Object.fromEntries(body.entries()) as unknown as Prisma.InstituteCreateInput

  try {
    const user = await prisma.authUser.findFirst()

    if (user === null) {
      return NextResponse.json({ message: 'Must sign in' }, { status: 401 })
    }

    // Temporal solution
    const institute = await prisma.institute.findFirst({
      where: {
        director: {
          id: user.id,
        },
      },
    })

    if (institute?.id === undefined) {
      await prisma.institute.create({
        data: {
          ...data,
          certification: '',
          director: {
            connect: {
              id: user.id,
            },
          },
        },
      })
    } else {
      await prisma.institute.update({
        where: {
          id: institute?.id,
        },
        data,
      })
    }
  } catch (error) {
    return NextResponse.json('error', {
      status: 401,
    })
  }

  return NextResponse.json('succeded', {
    status: 200,
  })
}
