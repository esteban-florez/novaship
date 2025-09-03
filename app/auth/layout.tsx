import { session } from '@/lib/auth/pages'
import '@/styles/globals.css'
import { redirect } from 'next/navigation'
import { href } from '@/lib/utils/url'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (await session() !== null) {
    redirect(href('/home'))
  }

  // TODO -> en las paginas de login y signup se debe poner las decoraciones laterales que se inventó Myriam con position: fixed para que funcionen bien con scroll, igual el fondo.
  return (
    <main className="h-full w-full bg-white">
      {children}
    </main>
  )
}
