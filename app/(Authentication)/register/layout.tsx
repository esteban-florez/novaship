import '@/styles/globals.css'
import { text } from '../../fonts'

export const metadata = {
  title: 'PasantíasApp | Register',
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
        <main className='relative grid min-h-screen w-[100vw] place-items-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
