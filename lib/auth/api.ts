import lucia from './lucia'
import prisma from '@/prisma/client'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
import { AuthError } from '../errors/reference'

export const auth = {
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
  const authRequest = handleRequest(request)
  const currentSession = await authRequest.validate()

  if (currentSession === null) {
    throw new AuthError('AuthError: Unauthenticated user in auth-required API.')
  }

  return { where: { authUserId: currentSession.userId } }
}

/**
 * Usar solo dentro de "/app/api".
 */
export function handleRequest(request: NextRequest) {
  // @ts-expect-error Lucia cookies
  return lucia.handleRequest({ cookies, request })
}
