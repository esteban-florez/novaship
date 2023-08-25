import lucia from './lucia'
import prisma from '@/prisma/client'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
import { AuthError } from '../errors/reference'
import { type UserWithType } from '../types'

export const auth = {
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
      },
      where: {
        id: session.userId,
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user: any = authUser.company ?? authUser.institute ?? authUser.person
    user.type = authUser.type
    return user as UserWithType
  },
  /**
   * Usar solo dentro de "/app/api". Lanza una excepción si no ninguna compañía autenticada.
   */
  async company(request: NextRequest) {
    return await prisma.company.findUniqueOrThrow(await options(request))
  },
  /**
   * Usar solo dentro de "/app/api". Lanza una excepción si no ninguna institución autenticada.
   */
  async institute(request: NextRequest) {
    return await prisma.institute.findUniqueOrThrow(await options(request))
  },
  /**
   * Usar solo dentro de "/app/api". Lanza una excepción si no ninguna persona autenticada.
   */
  async person(request: NextRequest) {
    return await prisma.person.findUniqueOrThrow(await options(request))
  },
}

async function options(request: NextRequest) {
  const session = await sessionOrThrow(request)

  return { where: { authUserId: session.userId } }
}

async function sessionOrThrow(request: NextRequest) {
  const authRequest = handleRequest(request)
  const session = await authRequest.validate()

  if (session === null) {
    throw new AuthError('AuthError: Unauthenticated user in auth-required API.')
  }

  return session
}

/**
 * Usar solo dentro de "/app/api".
 */
export function handleRequest(request: NextRequest) {
  // @ts-expect-error Lucia cookies
  return lucia.handleRequest({ cookies, request })
}
