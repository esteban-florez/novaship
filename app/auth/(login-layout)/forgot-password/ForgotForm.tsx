'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import Input from '@/components/forms/inputs/Input'
import { schema } from '@/lib/validation/schemas/forgot'

export default function ForgotForm() {
  const {
    alert, handleSubmit, register,
    formState: { errors }, serverErrors,
  } = useSubmit({ schema })

  return (
    <form action="/api/auth/forgot-password" method="POST" onSubmit={handleSubmit} className="mx-auto w-full pt-4">
      {serverErrors}
      {alert}
      <Input
        name="email"
        label="Correo electrónico"
        placeholder="correo@ejemplo.com"
        register={register}
        errors={errors}
        maxlength={40}
      />
      <div className="flex flex-col gap-2">
        <button type="submit" className="btn-primary btn btn-md mt-4 w-full md:w-auto">
          Recuperar contraseña
        </button>
      </div>
    </form>
  )
}
