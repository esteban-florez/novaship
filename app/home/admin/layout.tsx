import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'

export default async function AdminLayout({
  children,
}: React.PropsWithChildren) {
  try {
    const { type } = await auth.user()
    if (type !== 'ADMIN') {
      throw new Error()
    }
  } catch (error) {
    notFound()
  }

  return <>{children}</>
}
