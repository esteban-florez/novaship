import { handleError } from '@/lib/errors/api'
import { schema } from '@/lib/validation/schemas/delete'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
  // TODO D -> así no es el delete xDDD
  let data
  try {
    data = await request.json()
    const { id } = schema.parse(data)
    const project = await prisma.project.delete({
      where: {
        id,
      },
    })

    return NextResponse.json(project)
  } catch (error) {
    return handleError(error, data)
  }
}
