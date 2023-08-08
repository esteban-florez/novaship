import { handleError } from '@/lib/api-errors'
import { schema } from '@/lib/validation/schemas/delete'
import prisma from '@/prisma/client'
import { type NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
  try {
    const data = await request.json()
    const { id } = schema.parse(data)
    const project = await prisma.project.delete({
      where: {
        id,
      },
    })

    return NextResponse.json(project, { status: 200 })
  } catch (error) {
    const { status, body } = handleError(error)
    return NextResponse.json(body, { status })
  }
}
