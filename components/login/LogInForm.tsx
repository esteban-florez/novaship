'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { type Fields, schema } from '@/lib/validation/schemas/login'
import Input from '../forms/inputs/Input'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function LogInForm() {
  const [isDefaultLogin, setIsDefaultLogin] = useState(false)
  const [isPasswordType, setIsPasswordType] = useState(true)
  const { alert, handleSubmit, register, formState: { errors }, serverErrors, setValue, getValues, setError } = useSubmit<Fields>({ schema })
  const searchParams = useSearchParams().get('alert')
  const Icon = isPasswordType ? EyeIcon : EyeSlashIcon

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

  function checkboxChange() {
    if (isDefaultLogin) {
      setValue('email', '')
      setValue('password', '')
    } else {
      const options = { shouldValidate: false, shouldDirty: false, shouldTouch: false }
      setValue('email', 'usuario@test.com', options)
      setValue('password', 'test123', options)
      setError('email', {})
      setError('password', {})
    }

    setIsDefaultLogin(v => !v)
  }

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
        readonly={isDefaultLogin}
        maxlength={40}
        isOptional
      />
      <div className="relative group">
        <Input
          type={isPasswordType ? 'password' : 'text'}
          name="password"
          label="Contraseña"
          placeholder="Ingresa tu contraseña..."
          register={register}
          errors={errors}
          readonly={isDefaultLogin}
          maxlength={20}
          isOptional
        />
        <button type="button" onClick={() => { setIsPasswordType(val => !val) }}>
          <Icon className="h-5 w-5 absolute bottom-6 right-3 text-gray-600" />
        </button>
      </div>
      <p className="text-center font-semibold">Esta es una demo con datos de prueba. <br /> <span className="font-normal">Credenciales por defecto:</span> <b>usuario@test.com</b> - <b>test123</b></p>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-primary" checked={isDefaultLogin} onChange={checkboxChange} />
          <span className="ml-2 label-text">Ingresar como usuario por defecto</span>
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <button type="submit" className="btn-primary btn btn-md mt-4 w-full md:w-auto">
          Iniciar sesión
        </button>
      </div>
    </form>
  )
}
