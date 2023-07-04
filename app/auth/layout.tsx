/* eslint-disable @next/next/no-img-element */
import '@/styles/globals.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative grid min-h-full place-items-center">
      <img src="/corner.webp" alt="Imagen decorativa en esquinas" width={300} height={300} className="absolute left-0 top-0 hidden rotate-180 md:block" />
      {children}
      <img src="/corner.webp" alt="Imagen decorativa en esquinas" width={300} height={300} className="absolute bottom-0 right-0 hidden md:block" />
    </main>
  )
}
