import lucia from './lucia'
import prisma from '@/prisma/client'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
import { type Session } from 'lucia-auth'
import { type UserType } from '@prisma/client'

interface AuthData {
  user: {
    id: string
    type: UserType
  }
  session: Session
}

/**
 * Nota: Usar solamente en páginas dentro de la ruta "/home".
 */
export const auth = {
  async company() {
    return await prisma.company.findUnique(await options())
  },
  async institute() {
    return await prisma.institute.findUnique(await options())
  },
  async person() {
    return await prisma.person.findUnique(await options())
  },
}

async function options() {
  const { user: { id } } = await (validateUser() as Promise<AuthData>)

  return { where: { authUserId: id } }
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
