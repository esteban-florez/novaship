import '@/styles/globals.css'
import clsx from 'clsx'
import { type Metadata } from 'next'
// TODO -> en producción, se debe cambiar a Google
// import localFont from 'next/font/local'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-default',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Novaship',
    default: 'Novaship',
  },
  description: 'Aplicación de pasantías, ofertas laborales y gestión de proyectos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={clsx('h-full bg-base-200 font-default', ubuntu.variable)} data-theme="light">
      <body className="h-full">
        {children}
      </body>
    </html>
  )
}
