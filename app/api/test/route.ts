import { handleError } from '@/lib/api-errors'
import { schema } from '@/lib/validation/schemas/test'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const parsed = schema.parse(data)
    return NextResponse.json(parsed)
  } catch (error) {
    const { status, body } = handleError(error)
    return NextResponse.json(body, { status })
  }
}
