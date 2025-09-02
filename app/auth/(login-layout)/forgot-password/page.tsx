import Link from 'next/link'
import { type Metadata } from 'next'
import ForgotForm from './ForgotForm'
import SearchParamsModal from '@/components/SearchParamsModal'

export const metadata: Metadata = {
  title: '¿Olvidaste tu contraseña?',
}

export default function ForgotPasswordPage({ searchParams }: SearchParamsProps) {
  return (
    <>
      <SearchParamsModal
        page="/auth/forgot-password"
        searchParams={searchParams}
      />
      <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        ¿<span className="text-primary">Olvidaste</span> tu <span className="text-secondary">contraseña</span>?
      </h2>
      <p className="text-center">
        Introduce el correo electrónico asociado a tu cuenta, y te enviaremos un enlace para recuperar tu contraseña.
      </p>
      <ForgotForm />
      <div className="divider divider-vertical mt-5" />
      <Link
        href="/auth/login"
        className="text-center underline"
      >
        Iniciar sesión
      </Link>
    </>
  )
}
