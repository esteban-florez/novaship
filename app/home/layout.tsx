import '@/styles/globals.css'
import Aside from '@/components/layout/Aside'
import Navbar from '@/components/layout/Navbar'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import { AuthenticationError } from '@/lib/errors/reference'
import { sidebarLinks } from './sidebar-links'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let links
  try {
    const user = await auth.user()
    links = sidebarLinks(user)
  } catch (error) {
    if (error instanceof AuthenticationError) {
      redirect('/auth/login')
    }
    throw error
  }

  return (
    <div className="flex">
      <Aside links={links} />
      <div className="relative w-full flex-col sm:static">
        <Navbar />
        <main className="bg-base-200">{children}</main>
      </div>
    </div>
  )
}
