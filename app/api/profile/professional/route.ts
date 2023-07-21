import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'

import { NextResponse } from 'next/server'

// RANT -> se usa NextRequest xd
export async function PUT(req: Request) {
  // TODO -> Este debería pasar a la ruta professional/[id]/route.ts
  const session = { user: { email: 'eflorez077@gmail.com' } }
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
    // RANT -> las respuestas de error deben tener detalles sobre el error
    return NextResponse.json('error', {
      status: 401,
    })
  }

  // RANT -> las respuestas deben, o ser vacías, o devolver el recurso relacionado.
  return NextResponse.json('succeded', {
    status: 200,
  })
}
