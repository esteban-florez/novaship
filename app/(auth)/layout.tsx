import '@/styles/globals.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative grid min-h-screen w-[100vw] place-items-center">
      {children}
    </main>
  )
}
