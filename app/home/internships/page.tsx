import { auth } from '@/lib/auth/pages'
import { notFound, redirect } from 'next/navigation'
import { href } from '@/lib/utils/url'

const routes = {
  PERSON: 'persons',
  COMPANY: 'companies',
  INSTITUTE: 'institutes',
} as const

export default async function Page() {
  const { id, type } = await auth.user()

  if (type === 'ADMIN') notFound()

  redirect(href(`/home/${routes[type]}/${id}/internships`))
}
