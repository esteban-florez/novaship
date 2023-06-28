import '@/styles/globals.css'
import { type Metadata } from 'next'
import localFont from 'next/font/local'

export const inter = localFont({
  src: './Inter.ttf',
  display: 'swap',
  variable: '--font-default',
})

export const josefin = localFont({
  src: './Josefin_Sans.ttf',
  display: 'swap',
  variable: '--font-title',
})

// TODO -> en producción, se debe cambiar a Google
// import { Inter, Josefin_Sans } from 'next/font/google'

// export const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-default',
// })

// export const josefin = Josefin_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-title',
// })

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
    <html lang="es" className={`${inter.variable} ${josefin.variable} font-default`} data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  )
}
