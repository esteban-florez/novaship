import '@/styles/globals.css'
import Aside from '@/components/layout/Aside'
import Navbar from '@/components/layout/Navbar'
// DEV
// import { validateUser } from '@/lib/auth'
// import { redirect } from 'next/navigation'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { user } = await validateUser()

  // if (user === null) {
  //   redirect('/auth/login')
  // }

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
