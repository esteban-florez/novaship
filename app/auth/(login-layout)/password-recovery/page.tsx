import { param } from '@/lib/utils/search-params'
import Link from 'next/link'
import ResetForm from './ResetForm'
import { notFound } from 'next/navigation'
import { getResetEmail } from '@/lib/utils/tables'
import { getReset } from '@/lib/data-fetching/resets'

export default async function PasswordRecoveryPage({
  searchParams,
}: SearchParamsProps) {
  const resetId = param(searchParams.resetId)

  if (resetId === undefined) {
    console.log('acaaaa')
    notFound()
  }

  const reset = await getReset(resetId)

  if (reset === null || reset.usedAt !== null) {
    console.log('o acaaa')
    notFound()
  }

  const email = getResetEmail(reset)

  return (
    <>
      <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        <span className="text-primary">Recuperación</span> de{' '}
        <span className="text-secondary">contraseña</span>
      </h2>
      <p className="text-center">
        Ingrese una nueva contraseña para tu cuenta con el correo <b>{email}</b>
        . Asegúrate ingresar una contraseña segura.
      </p>
      <ResetForm resetId={reset.id} />
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
