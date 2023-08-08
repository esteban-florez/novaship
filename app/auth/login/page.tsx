import Link from 'next/link'
import { type Metadata } from 'next'
import LogInForm from '@/components/login/LogInForm'

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
}

export default function LoginPage() {
  return (
    <div className="h-full w-full bg-white">
      <img src="/coso4.webp" alt="Imagen decorativa en esquinas" className="absolute right-0 top-0 hidden h-full w-2/4 rotate-180 md:block" />
      <div className="z-10 grid h-screen grid-cols-7 place-items-center">
        <section className="col-span-7 flex w-full flex-col p-6 md:col-span-5 md:mr-20 md:w-3/5 lg:w-3/6">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            ¡Tu <span className="text-primary">plataforma</span> de <span className="text-secondary">ofertas</span> de trabajo!
          </h2>
          <p className="text-center text-base">El acceso a tus sueños a un solo clic de distancia</p>
          <LogInForm />
          <div className="divider divider-vertical my-2" />
          <Link
            href="/auth/login"
            className="text-center underline"
          >
            Olvidé mi contraseña
          </Link>
        </section>
        <section className="col-span-2 hidden w-9/12 flex-col justify-center rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-sm md:flex">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">
            ¿No tienes una cuenta?
          </h2>
          <div className="z-50 grid w-full place-items-end">
            <img src="/undraw_appreciation.webp" alt="Imagen de trabajo remoto" width={180} />
          </div>
          <Link href="/auth/signup" className="btn -mt-4 bg-white text-base">
            ¡Registrate!
          </Link>
        </section>
      </div>
    </div>
  )
}
