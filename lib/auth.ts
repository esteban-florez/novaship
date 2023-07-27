import lucia from './lucia'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
import { type Session } from 'lucia-auth'
import prisma from '@/prisma/client'

interface AuthData {
  user: SessionUser
  session: Session
}

/**
 * Nota: Usar solamente en páginas dentro de la ruta "/home".
 */
export async function auth() {
  const { user } = await (validateUser() as Promise<AuthData>)
  return await prisma.authUser.findUniqueOrThrow({
    where: { id: user.id },
  })
}

export async function validateUser(request?: NextRequest) {
  const authRequest = await handleRequest(request)
  return await (authRequest.validateUser() as Promise<{
    user: null
    session: null
  } | AuthData>)
}

export async function handleRequest(request?: NextRequest) {
  if (request !== undefined) {
    // @ts-expect-error Lucia cookies
    return lucia.handleRequest({ request, cookies })
  }

  // @ts-expect-error Lucia cookies
  return lucia.handleRequest({ cookies })
}
