import lucia from './lucia'
import prisma from '@/prisma/client'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
import { AuthenticationError } from '../errors/reference'
import { type UserWithType } from '../types'

export const auth = {
  /**
   * Nota: Usar solo dentro de "/app/home". Es "true" si hay un usuario autenticado.
   */
  async is(request: NextRequest) {
    try {
      await sessionOrThrow(request)
      return true
    } catch (error) {
      return false
    }
  },
  /**
   * Nota: Usar solo dentro de "/app/api". Lanza una excepción si no hay ningún usuario autenticado.
   */
  async user(request: NextRequest) {
    const session = await sessionOrThrow(request)

    const authUser = await prisma.authUser.findUniqueOrThrow({
      include: {
        company: true,
        institute: true,
        person: true,
        admin: true,
      },
      where: {
        id: session.userId,
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user: any = authUser.company ?? authUser.institute ?? authUser.person ?? authUser.admin
    user.type = authUser.type
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return user as UserWithType
  },
}

async function sessionOrThrow(request: NextRequest) {
  const authRequest = handleRequest(request)
  const session = await authRequest.validate()

  if (session === null) {
    throw new AuthenticationError('AuthenticationError: Unauthenticated user in auth-required API.')
  }

  return session
}

/**
 * Usar solo dentro de "/app/api".
 */
export function handleRequest(request: NextRequest) {
  return lucia.handleRequest({ cookies, request })
}
