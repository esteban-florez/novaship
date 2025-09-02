import { auth } from '@/lib/auth/pages'
import { notFound, redirect } from 'next/navigation'
import { uri } from '@/lib/utils/url'

const routes = {
  PERSON: 'persons',
  COMPANY: 'companies',
  INSTITUTE: 'institutes',
} as const

export default async function Page() {
  const { id, type } = await auth.user()

  if (type === 'ADMIN') notFound()

  redirect(uri(`/home/${routes[type]}/${id}/internships`))
}
