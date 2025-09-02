import { handleError } from '@/lib/errors/api'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    cookies().set('login-info-modal', 'true')
    return new Response('', {
      status: 200,
    })
  } catch (error) {
    handleError(error)
  }
}
