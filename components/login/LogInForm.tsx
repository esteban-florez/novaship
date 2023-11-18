'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { type Fields, schema } from '@/lib/validation/schemas/login'
import Input from '../forms/inputs/Input'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function LogInForm() {
  const { alert, handleSubmit, register, formState: { errors }, serverErrors, setValue, getValues } = useSubmit<Fields>({ schema })
  const searchParams = useSearchParams().get('alert')

  useEffect(() => {
    if (searchParams === 'bad_creds') {
      const password = getValues('password')
      if (password !== '') {
        setValue('password', '', {
          shouldValidate: false,
          shouldDirty: false,
          shouldTouch: false,
        })
      }
    }
  }, [searchParams, getValues, setValue])

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
        maxlength={40}
        isOptional
      />
      <Input
        type="password"
        name="password"
        label="Contraseña"
        placeholder="Ingresa tu contraseña..."
        register={register}
        errors={errors}
        maxlength={20}
        isOptional
      />
      <div className="flex flex-col gap-2">
        <button type="submit" className="btn-primary btn btn-md mt-4 w-full md:w-auto">
          Iniciar sesión
        </button>
      </div>
    </form>
  )
}
