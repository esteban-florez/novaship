import { session } from '@/lib/auth/pages'
import '@/styles/globals.css'
import { redirect } from 'next/navigation'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (await session() !== null) {
    redirect('/home')
  }

  return (
    <main className="relative grid min-h-full place-items-center">
      {children}
    </main>
  )
}
