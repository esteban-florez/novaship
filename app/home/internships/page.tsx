import { auth } from '@/lib/auth/pages'
import { notFound, redirect } from 'next/navigation'

const routes = {
  PERSON: 'persons',
  COMPANY: 'companies',
  INSTITUTE: 'institutes',
} as const

export default async function Page() {
  const { id, type } = await auth.user()
  if (type === 'ADMIN') notFound()

  redirect(`/home/${routes[type]}/${id}/internships`)
}
