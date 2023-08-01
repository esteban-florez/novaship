import Link from 'next/link'
import GoogleSignUpButton from '../GoogleSignUpButton'
import Input from '../forms/inputs/Input'

export default function General({ setStep }) {
  return (
    <>
      <h2 className="text-center font-title text-2xl font-bold md:text-4xl">
        ¡Regístrate!
      </h2>
      <div className="mx-auto w-full pt-4">
        <div className="flex grid-cols-2 flex-col gap-x-5 gap-y-6 md:grid">
          <div className="form-control w-full">
            <Input label="Correo electrónico:" name="email" placeholder="Ej. correo@ejemplo.com" />
          </div>
          <div className="form-control w-full">
            <Input label="Ingresa tu contraseña:" name="password" placeholder="Ingresa tu contraseña..." />
          </div>
        </div>
        <button onClick={() => setStep('userType')} type="button" className="btn-primary btn-block btn mt-4">
          Registrarme
        </button>
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
      </div>
    </>
  )
}
