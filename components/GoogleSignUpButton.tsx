'use client'

import { signIn } from 'next-auth/react'

export default function GoogleSignUpButton() {
  // TODO -> loading state
  return (
    <button type="button" className="btn-neutral btn w-full md:w-auto" onClick={async () => await signIn('google', { callbackUrl: '/' })}>
      Ingresar con Google
    </button>
  )
}
