
import { NextResponse } from 'next/server'

export async function GET() {
  const session = { user: { email: 'eflorez077@gmail.com' } }
  return NextResponse.json(session)
}
