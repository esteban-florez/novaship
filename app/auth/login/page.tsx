import Link from 'next/link'
import { type Metadata } from 'next'
import LogInForm from '@/components/login/LogInForm'

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
}

export default function LoginPage() {
  return (
    <section className="z-10 mx-2 my-6 flex w-full max-w-md flex-col rounded-xl px-4 py-6 md:px-8">
      <h2 className="text-center text-2xl font-bold md:text-4xl">
        ¡Tu <span className="text-primary">plataforma</span> de <span className="text-secondary">ofertas</span> de trabajo!
      </h2>
      <LogInForm />
      <div className="divider divider-vertical" />
      <footer className="flex flex-col gap-4">
        <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Link
            href="/auth/signup"
            className="btn-secondary btn"
          >
            Regístrate
          </Link>
          <Link
            href="/auth/login"
            className="text-center underline"
          >
            Olvidé mi contraseña
          </Link>
        </div>
      </footer>
    </section>
  )
}
