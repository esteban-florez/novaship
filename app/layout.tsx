import Alert from '@/components/Alert'
import '@/styles/globals.css'
import clsx from 'clsx'
import { type Metadata } from 'next'
// TODO -> en producción, se debe cambiar a Google
import localFont from 'next/font/local'

const ubuntu = localFont({
  src: [{
    path: './Ubuntu-Light.ttf',
    weight: '300',
  }, {
    path: './Ubuntu-Regular.ttf',
    weight: '400',
  }, {
    path: './Ubuntu-Medium.ttf',
    weight: '600',
  }, {
    path: './Ubuntu-Bold.ttf',
    weight: '700',
  }],
  display: 'swap',
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
    <html lang="es" className={clsx('h-full bg-white', ubuntu.className)} data-theme="light">
      <body className="h-full">
        <Alert>
          {children}
        </Alert>
      </body>
    </html>
  )
}
