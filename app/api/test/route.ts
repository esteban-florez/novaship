import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()
  return NextResponse.json(data)
}
