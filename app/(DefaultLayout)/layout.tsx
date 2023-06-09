import '@/styles/globals.css'
import { text } from '../fonts'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      <body className={`${text.className} bg-black`}>
        <div className='flex min-w-[100vw] flex-row items-start'>
          <Aside />
          <div className='w-full flex-col'>
            <Navbar />
            <main className='container mx-auto w-full p-4'>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
