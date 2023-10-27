import Link from 'next/link'
import { type Metadata } from 'next'
import LogInForm from '@/components/login/LogInForm'
import SearchParamsModal from '@/components/SearchParamsModal'

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
}

export default function LoginPage({ searchParams }: SearchParamsProps) {
  return (
    <>
      <SearchParamsModal searchParams={searchParams} page="/auth/login" />
      <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        ¡Tu <span className="text-primary">plataforma</span> de <span className="text-secondary">trabajo</span> virtual!
      </h2>
      <p className="text-center">El primer paso hacia tu grandeza comienza aquí</p>
      <LogInForm />
      <div className="divider divider-vertical mt-5" />
      <Link
        href="/auth/forgot-password"
        className="text-center underline"
      >
        Olvidé mi contraseña
      </Link>
    </>
  )
}
