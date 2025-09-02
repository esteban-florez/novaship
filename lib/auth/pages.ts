import lucia from './lucia'
import prisma from '@/prisma/client'
import { cookies } from 'next/headers'
import { AuthenticationError } from '../errors/reference'
import { type UserWithType } from '../types'
import { cache } from 'react'

/**
 * Nota: Usar solo dentro de "/app/home"
 */
export const auth = {
  /**
   * Nota: Usar solo dentro de "/app/home". Es "true" si hay un usuario autenticado.
   */
  async is() {
    return (await session() !== null)
  },
  /**
   * Nota: Usar solo dentro de "/app/home". Lanza una excepción si no hay ningún usuario autenticado.
   */
  user: cache(async () => {
    const session = await sessionOrThrow()
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
  }),
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
    throw new AuthenticationError('AuthenticationError: Unauthenticated user in auth-required page.')
  }

  return currentSession
}
