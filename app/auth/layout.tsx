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
    <main className="h-full w-full bg-white">
      {children}
    </main>
  )
}
