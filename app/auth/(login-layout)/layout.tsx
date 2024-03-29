import Link from 'next/link'

export default function LoginLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <img src="/coso4.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/4 rotate-180 md:block" />
      <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none absolute left-0 top-0 block h-2/5 w-full md:hidden" />
      <div className="z-10 grid h-screen grid-cols-7 place-items-center">
        <section className="order-2 col-span-7 my-6 flex w-full flex-col p-6 md:order-1 md:col-span-5 md:mr-20 md:w-3/5 lg:w-3/6">
          {children}
        </section>
        <section className="col-span-7 flex flex-col justify-center rounded-b-2xl rounded-t-none bg-white/10 p-6 shadow-lg backdrop-blur-sm md:order-2 md:col-span-2 md:w-5/6 md:rounded-2xl lg:w-9/12">
          <div className="flex flex-row items-center gap-2 md:flex-col md:items-end">
            <div className="order-2 flex flex-col">
              <h2 className="mb-3 text-center text-lg font-bold text-white md:text-xl lg:text-2xl">
                ¿No tienes una cuenta?
              </h2>
              <Link href="/auth/signup" className="btn -mt-1 flex bg-white md:-mt-4 md:hidden md:text-base">
                ¡Registrate!
              </Link>
            </div>
            <img src="/undraw_appreciation.webp" alt="Imagen de trabajo remoto" className="z-50 order-1 grid h-24 w-36 place-items-end md:order-2 md:h-auto md:w-48" />
          </div>
          <Link href="/auth/signup" className="btn -mt-4 hidden bg-white md:flex md:text-base">
            ¡Registrate!
          </Link>
        </section>
      </div>
    </>
  )
}
