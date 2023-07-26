'use client'

import { XMarkIcon } from '@heroicons/react/24/solid'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import GoogleSignUpButton from '../GoogleSignUpButton'

export default function LogInForm() {
  const [showAlert, setShowAlert] = useState<boolean>(useSearchParams().has('registered'))

  function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault()

    // TODO -> error handling
    async function send() {
      const elements = event.target.elements
      const { value: email } = elements.namedItem('email') as HTMLInputElement
      const { value: password } = elements.namedItem('password') as HTMLInputElement

      await signIn('credentials', { redirect: true, callbackUrl: '/home', email, password })
    }

    void send()
  }

  return (
    <form method="POST" onSubmit={handleSubmit} className="mx-auto w-full pt-4">
      {showAlert &&
      (
        <div className="alert alert-success my-3 flex justify-between">
          <p className="w-full">Te has registrado correctamente.</p>
          <button onClick={() => { setShowAlert(false) }}>
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className="form-control w-full">
        <label htmlFor="email" className="label font-semibold">
          Correo electrónico:
        </label>
        <input
          type="text"
          id="email"
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
          placeholder="Ingresa tu contraseña..."
          className="input w-full border-neutral-300 bg-base-200"
        />
      </div>
      <div className="flex flex-col gap-4">
        <button type="submit" className="btn-primary btn mt-8 w-full md:w-auto">
          Iniciar sesión
        </button>
        <GoogleSignUpButton />
      </div>
    </form>
  )
}
