import { auth } from './lucia'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
import { type Session } from 'lucia-auth'

export async function validateUser(request?: NextRequest) {
  const authRequest = await handleRequest(request)
  return await (authRequest.validateUser() as Promise<{
    user: null
    session: null
  } | {
    user: SessionUser
    session: Session
  }>)
}

export async function handleRequest(request?: NextRequest) {
  if (request !== undefined) {
    // @ts-expect-error Lucia cookies
    return auth.handleRequest({ request, cookies })
  }

  // @ts-expect-error Lucia cookies
  return auth.handleRequest({ cookies })
}
