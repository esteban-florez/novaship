import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Aside from './components/Aside'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PasantíasApp',
  description:
    'Aplicación de pasantías, ofertas laborales y gestión de proyectos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={`${inter.className} container`}>
        <div className='flex min-w-[100vw] flex-row items-start'>
          <Aside />
          <div className='w-full flex-col'>
            <Navbar />
            <main className='bg-base-200 p-4'>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
