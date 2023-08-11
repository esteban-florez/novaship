import { NextResponse, type NextRequest } from 'next/server'
import { handleRequest } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { url } from '@/lib/utils/url'
import lucia from '@/lib/auth/lucia'
import { schema } from '@/lib/validation/schemas/server/signup'

export async function POST(request: NextRequest) {
  let data
  try {
    const authRequest = handleRequest(request)
    // DRY 10 -> Mismo codigo de /api/auth/login
    if (await authRequest.validate() !== null) {
      return NextResponse.redirect(url('/home'))
    }

    data = await request.json()
    const { email, password, type } = await schema.parseAsync(data)

    const authUser = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password,
      },
      // DEV
      attributes: { type },
    })

    const session = await lucia.createSession(authUser.id)
    authRequest.setSession(session)

    return NextResponse.redirect(url('/home'))
  } catch (error) {
    return handleError(error, data)
  }
}
