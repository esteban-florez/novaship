import Link from 'next/link'
import { type Metadata } from 'next'
import SignUpForm from '@/components/signup/SignUpForm'
import GoogleSignUpButton from '@/components/GoogleSignUpButton'

export const metadata: Metadata = {
  title: 'Registrarse',
}

export default async function SignUpPage() {
  return (
    <section className="z-10 mx-2 flex flex-col rounded-xl bg-base-200 px-4 py-6 shadow-md md:px-8">
      <h2 className="text-center font-title text-2xl font-bold text-white md:text-4xl">
        ¡Regístrate!
      </h2>
      <SignUpForm />
      <div className="divider divider-vertical" />
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <GoogleSignUpButton />
        <Link
          href="/auth/login"
          className="underline"
        >
          Ya tengo una cuenta
        </Link>
      </div>
    </section>
  )
}
