import Link from 'next/link'
import { type Metadata } from 'next'
import LogInForm from '@/components/login/LogInForm'

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
}

export default function LoginPage() {
  return (
    <section className="z-10 mx-2 flex max-w-md flex-col rounded-xl bg-base-200 px-4 py-6 shadow-md md:px-8">
      <h2 className="text-center font-title text-2xl font-bold text-white md:text-4xl">
        ¡Tu plataforma de ofertas de trabajo!
      </h2>
      <LogInForm />
      <div className="divider divider-vertical my-2" />
      <footer className="flex flex-col gap-4">
        <p className="text-center font-title text-xl font-semibold text-white">
          ¿No posees una cuenta?
        </p>
        <div className="flex w-full flex-col gap-2">
          <Link
            href="/signup"
            className="btn-secondary btn w-full border-2"
          >
            Regístrate
          </Link>
        </div>
      </footer>
    </section>
  )
}
