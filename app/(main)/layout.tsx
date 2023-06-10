import '@/styles/globals.css'
import Aside from '@/components/layout/Aside'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-w-[100vw] flex-row items-start">
      <Aside />
      <div className="w-full flex-col">
        <Navbar />
        <main className="container mx-auto w-full">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
