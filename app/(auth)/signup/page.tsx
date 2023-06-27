import Link from 'next/link'
import { type Metadata } from 'next'
import SignUpForm from '@/components/signup/SignUpForm'

export const metadata: Metadata = {
  title: 'Registrarse',
}

export default async function SignUpPage() {
  // const data = await fetch('http://localhost:3000/api/auth/csrf')
  // const { csrfToken } = await data.json()

  return (
    <section className="z-10 mx-2 flex flex-col rounded-xl bg-base-200 px-4 py-6 shadow-md md:px-8">
      <h2 className="text-center font-title text-2xl font-bold text-white md:text-4xl">
        ¡Regístrate!
      </h2>
      <SignUpForm />
      <div className="divider divider-vertical" />
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <Link
          href="/login"
          className="btn-neutral btn w-full md:w-auto"
        >
          Iniciar Sesión con Google
        </Link>
        <Link
          href="/login"
          className="underline"
        >
          Ya tengo una cuenta
        </Link>
      </div>
    </section>
  )
}
