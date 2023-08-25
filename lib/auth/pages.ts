import lucia from './lucia'
import prisma from '@/prisma/client'
import { cookies } from 'next/headers'
import { AuthError } from '../errors/reference'
import { type UserWithType } from '../types'

/**
 * Nota: Usar solo dentro de "/app/home"
 */
export const auth = {
  /**
   * Nota: Usar solo dentro de "/app/home". Lanza una excepción si no hay ningún usuario autenticado.
   */
  async user() {
    const session = await sessionOrThrow()
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
  const session = await sessionOrThrow()
  return { where: { authUserId: session.userId } }
}

/**
 * Nota: Usar solo dentro de "/app/home"
 */
export async function session() {
  // @ts-expect-error Lucia cookies
  const authRequest = lucia.handleRequest({ cookies })
  return await authRequest.validate()
}

async function sessionOrThrow() {
  const currentSession = await session()

  if (currentSession === null) {
    throw new AuthError('AuthError: Unauthenticated user in auth-required page.')
  }

  return currentSession
}
