'use client'

import { ArrowPathIcon } from '@heroicons/react/24/outline'
import GoogleSignUpButton from '../GoogleSignUpButton'
import useFormHandling from '@/lib/hooks/useFormHandling'

export default function LogInForm() {
  const { loading, onSubmit, alert } = useFormHandling()

  return (
    <form action="/api/auth/login" method="POST" onSubmit={onSubmit} className="mx-auto w-full pt-4">
      {alert}
      <div className="form-control w-full">
        <label htmlFor="email" className="label font-semibold">
          Correo electrónico:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="correo@ejemplo.com"
          className="input w-full border-neutral-300 bg-base-200"
        />
      </div>
      <div className="form-control mt-4 w-full">
        <label htmlFor="password" className="label font-semibold">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa tu contraseña..."
          className="input w-full border-neutral-300 bg-base-200"
        />
      </div>
      <div className="flex flex-col gap-4">
        <button type="submit" className="btn-primary btn mt-8 w-full md:w-auto" disabled={loading}>
          {loading && <ArrowPathIcon className="h-6 w-6 animate-spin" />}
          Iniciar sesión
        </button>
        <GoogleSignUpButton />
      </div>
    </form>
  )
}
