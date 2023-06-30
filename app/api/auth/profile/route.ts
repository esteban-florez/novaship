import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function PUT(req: Request, res: Response) {
  const session = await getServerSession()

  // TODO -> input validation
  const body = await req.formData()
  const data = Object.fromEntries(body.entries()) as unknown as Prisma.UserUpdateInput

  const currentUserEmail = session?.user?.email ?? ''

  console.log({ 'Data to be updated': data, 'User email': currentUserEmail })

  let updateUser
  try {
    updateUser = await prisma.user.update({
      where: {
        email: currentUserEmail,
      },
      data,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error updating user' }, {
      status: 500,
    })
  }

  console.log({ 'Updated user': updateUser })

  return NextResponse.json(updateUser, {
    status: 200,
  })
}
