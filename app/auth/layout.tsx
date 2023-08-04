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
      {/* <img src="/corner.webp" alt="Imagen decorativa en esquinas" width={300} height={300} className="absolute left-0 top-0 hidden rotate-180 md:block" /> */}
      {children}
    </main>
  )
}
