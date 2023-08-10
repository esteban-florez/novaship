'use client'

import GoogleSignUpButton from '../GoogleSignUpButton'
import Input from '../forms/inputs/Input'

export default function SignUpForm() {
  return (
    <form className="mx-auto mt-3 w-full">
      <div className="flex flex-col">
        <Input label="Correo electrónico:" name="email" placeholder="Ej. correo@ejemplo.com" />
        <Input label="Ingresa tu contraseña:" name="password" placeholder="Ingresa tu contraseña..." />
      </div>
      <div className="flex flex-col gap-2">
        <button type="submit" className="btn-primary btn-block btn mt-3">
          Registrarme
        </button>
        <GoogleSignUpButton />
      </div>
    </form>
  )
}
