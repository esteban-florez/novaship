import lucia from './lucia'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
import { type Session } from 'lucia-auth'

interface AuthData {
  user: SessionUser
  session: Session
}

/**
 * Nota: Usar solamente en páginas dentro del grupo "(main)".
 */
export async function auth() {
  return await (validateUser() as Promise<AuthData>)
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
