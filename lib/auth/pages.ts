import lucia from './lucia'
import prisma from '@/prisma/client'
import { cookies } from 'next/headers'
import { AuthError } from '../errors/reference'

/**
 * Nota: Usar solo dentro de "/app/home"
 */
export const auth = {
  /**
   * Nota: Usar solo dentro de "/app/home". Lanza una excepción si no ninguna compañía autenticada.
   */
  async company() {
    return await prisma.company.findUniqueOrThrow(await options())
  },
  /**
   * Nota: Usar solo dentro de "/app/home". Lanza una excepción si no ninguna institución autenticada.
   */
  async institute() {
    return await prisma.institute.findUniqueOrThrow(await options())
  },
  /**
   * Nota: Usar solo dentro de "/app/home". Lanza una excepción si no ninguna persona autenticada.
   */
  async person() {
    return await prisma.person.findUniqueOrThrow(await options())
  },
}

async function options() {
  const currentSession = await session()

  if (currentSession === null) {
    throw new AuthError('AuthError: Unauthenticated user in auth-required page.')
  }

  return { where: { authUserId: currentSession.userId } }
}

/**
 * Nota: Usar solo dentro de "/app/home"
 */
export async function session() {
  // @ts-expect-error Lucia cookies
  const authRequest = lucia.handleRequest({ cookies })
  return await authRequest.validate()
}
