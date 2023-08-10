import { type Metadata } from 'next'
import SignUpForm from '@/components/signup/SignUpForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Registrarse',
}

export default async function SignUpPage() {
  return (
    <section className="h-full w-full bg-white">
      <div className="z-10 grid h-screen grid-cols-7 place-items-center gap-6">
        <div className="z-10 col-span-7 flex flex-col justify-center rounded-b-2xl rounded-t-none bg-white/10 p-6 shadow-lg backdrop-blur-sm md:col-span-2 md:w-5/6 md:rounded-2xl lg:w-9/12">
          <div className="flex flex-row items-center gap-2 md:flex-col md:items-start">
            <div className="flex flex-col">
              <h2 className="mb-3 text-center text-lg font-bold text-white md:text-xl lg:text-2xl">
                ¿Ya tienes una cuenta?
              </h2>
              <Link href="/auth/login" className="btn -mt-1 flex bg-white md:hidden md:text-base">
                Inicia sesión
              </Link>
            </div>
            <img src="/undraw_summer.webp" alt="Imagen de trabajo remoto" className="z-50 grid h-24 w-36 place-items-end md:h-auto md:w-48" />
          </div>
          <Link href="/auth/login" className="btn -mt-1 hidden bg-white md:flex md:text-base">
            Inicia sesión
          </Link>
        </div>
        <div className="col-span-7 my-6 flex w-full flex-col justify-center p-6 md:col-span-5 md:ml-20 md:mt-0 md:w-3/4 lg:w-3/6">
          <h2 className="mb-1 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            ¡Descubre <span className="text-primary">todo</span> lo <br className="hidden lg:block" /> que <span className="text-secondary">tenemos</span> para ti!
          </h2>
          <p className="text-center text-base">Seguridad y confianza, siempre a tu disposición</p>
          <SignUpForm />
        </div>
        <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="absolute left-0 top-0 block h-2/5 w-full md:hidden" />
        <img src="/coso4.webp" alt="Imagen decorativa en esquinas" className="absolute left-0 top-0 hidden h-full w-2/4 md:block" />
      </div>
    </section>
  )
}
