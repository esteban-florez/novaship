import '@/styles/globals.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative grid min-h-screen w-screen place-items-center">
      <div className="absolute left-0 top-0 hidden h-3/6 w-32 flex-col rounded-br-[50px] bg-primary lg:block" />
      <div className="absolute left-20 top-0 hidden h-1/6 w-32 flex-col rounded-b-[100px] bg-primary lg:block" />
      {children}
      <div className="absolute bottom-0 right-0 hidden h-3/6 w-32 rotate-180 flex-col rounded-br-[50px] bg-primary lg:block" />
      <div className="absolute bottom-0 right-20 hidden h-2/6 w-48 rotate-180 flex-col rounded-br-[100px] bg-primary lg:block" />
    </main>
  )
}
