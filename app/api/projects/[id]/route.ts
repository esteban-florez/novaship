import { handleError } from '@/lib/errors/api'
// import { schema } from '@/lib/validation/schemas/delete'
// import prisma from '@/prisma/client'
import { type NextRequest } from 'next/server'

export async function DELETE(request: NextRequest) {
  // TODO D -> así no es el delete xDDD

  console.log(true)
  let data
  try {
    data = await request.json()

    console.log(data)

    // return NextResponse.json(project)
  } catch (error) {
    return handleError(error, data)
  }
}
