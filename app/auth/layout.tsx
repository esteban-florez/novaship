import { validateUser } from '@/lib/auth'
import '@/styles/globals.css'
import { redirect } from 'next/navigation'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = await validateUser()

  if (user !== null) {
    redirect('/')
  }

  return (
    <main className="relative grid min-h-full place-items-center">
      {children}
    </main>
  )
}
