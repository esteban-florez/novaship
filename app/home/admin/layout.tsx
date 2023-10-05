import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'

export default async function AdminLayout({ children }: React.PropsWithChildren) {
  const { type } = await auth.user()

  if (type !== 'ADMIN') {
    notFound()
  }

  return (
    <>
      <PageTitle title="Administración del sistema" />
      {children}
    </>
  )
}
