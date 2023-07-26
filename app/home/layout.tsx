import '@/styles/globals.css'
import Aside from '@/components/layout/Aside'
import Navbar from '@/components/layout/Navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
