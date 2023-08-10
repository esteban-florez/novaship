import '@/styles/globals.css'
import Aside from '@/components/layout/Aside'
import Navbar from '@/components/layout/Navbar'
import { redirect } from 'next/navigation'
import { session } from '@/lib/auth/pages'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (await session() === null) {
    redirect('/auth/login')
  }

  return (
    <div className="flex">
      <Aside />
      <div className="relative w-full flex-col sm:static">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
