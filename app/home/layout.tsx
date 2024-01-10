import '@/styles/globals.css'
import Aside from '@/components/layout/Aside'
import Navbar from '@/components/layout/Navbar'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import { AuthenticationError } from '@/lib/errors/reference'
import { sidebarLinks } from './sidebar-links'
import Footer from '@/components/layout/Footer'

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
    <div className="drawer lg:drawer-open bg-base-200">
      <input
        id="aside"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <Navbar />
        <main className="pb-32 sm:pb-20">{children}</main>
        <Footer />
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="aside"
          aria-label="Close sidebar"
          className="drawer-overlay"
        />
        <Aside links={links} />
      </div>
    </div>
  )
}
