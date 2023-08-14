'use client'

import GoogleSignUpButton from '../GoogleSignUpButton'
import useSubmit from '@/lib/hooks/useSubmit'
import { type Fields, schema } from '@/lib/validation/schemas/login'
import Input from '../forms/inputs/Input'

export default function LogInForm() {
  // TODO -> mostrar una alerta de "debes iniciar sesión primero antes de ver esa página" cuando exista un searchParam llamado "redirected".
  const { alert, handleSubmit, register, formState: { errors }, serverErrors } = useSubmit<Fields>({ schema })

  return (
    <form action="/api/auth/login" method="POST" onSubmit={handleSubmit} className="mx-auto w-full pt-4">
      {serverErrors}
      {alert}
      <Input
        name="email"
        label="Correo electrónico"
        placeholder="correo@ejemplo.com"
        register={register}
        errors={errors}
      />
      <Input
        type="password"
        name="password"
        label="Contraseña"
        placeholder="Ingresa tu contraseña..."
        register={register}
        errors={errors}
      />
      <div className="flex flex-col gap-2">
        <button type="submit" className="btn-primary btn mt-6 w-full md:w-auto">
          Iniciar sesión
        </button>
        <GoogleSignUpButton />
      </div>
    </form>
  )
}
