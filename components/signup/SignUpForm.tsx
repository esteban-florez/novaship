'use client'

import useFormHandling from '@/lib/hooks/useFormHandling'
import Input from '../forms/inputs/Input'

export default function SignUpForm() {
  const { onSubmit, loading, alert } = useFormHandling()

  return (
    // TODO -> client-side form validation
    <form className="mx-auto w-full pt-4" onSubmit={onSubmit} method="POST" action="/api/auth/signup">
      {alert}
      <div className="flex grid-cols-2 flex-col gap-x-5 gap-y-6 md:grid">
        <div className="form-control w-full">
          <Input label="Correo electrónico:" name="email" placeholder="Ej. correo@ejemplo.com" />
        </div>
        <div className="form-control w-full">
          <Input label="Ingresa tu contraseña:" name="password" placeholder="Ingresa tu contraseña..." />
        </div>
      </div>
      <button type="submit" className="btn-primary btn-block btn mt-4" disabled={loading}>
        Registrarme
      </button>
    </form>
  )
}
