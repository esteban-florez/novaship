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
    <div className="flex min-h-full relative bg-base-200">
      <Aside links={links} />
      <div className="relative w-full flex-col sm:static">
        <Navbar />
        <main className="pb-32 sm:pb-20">
          {children}
          <footer className="footer text-center footer-center bottom-0 p-2 border-t bg-white absolute">
            <div className="flex flex-col sm:flex-row sm:-ms-[17.8rem]">
              <img
                src="/logo.png"
                alt=""
                className="sm:order-0 w-8"
              />
              <p>Copyright © 2023 - Todos los derechos reservados | Novaship</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
