import '@/styles/globals.css'
import Aside from '@/components/layout/Aside'
import Navbar from '@/components/layout/Navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-row items-start">
      <Aside />
      <div className="w-full flex-col">
        <Navbar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  )
}
