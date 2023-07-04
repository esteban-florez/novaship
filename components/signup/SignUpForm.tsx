'use client'

import { useRouter } from 'next/navigation'

export default function SignUpForm() {
  const router = useRouter()

  async function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault()
    const form = event.target
    const { action, method } = form
    const formData = new FormData(form)

    const response = await fetch(action, {
      body: formData,
      method,
    })

    // TODO -> error handling
    if (response.status === 200) {
      router.push('/auth/login?registered')
    }
  }

  return (
    // TODO -> client-side form validation
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="mx-auto w-full pt-4" onSubmit={handleSubmit} method="POST" action="/api/auth/signup">
      <div className="flex grid-cols-2 flex-col gap-x-5 gap-y-6 md:grid">
        <div className="form-control w-full">
          <label htmlFor="name" className="label font-semibold">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ej. Luis"
            className="input-bordered input w-full bg-base-200"
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="surname" className="label font-semibold">
            Apellido:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Ej. Pérez"
            className="input-bordered input w-full bg-base-200"
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="email" className="label font-semibold">
            Correo electrónico:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="correo@ejemplo.com"
            className="input-bordered input w-full bg-base-200"
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="password" className="label font-semibold">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña..."
            className="input-bordered input w-full bg-base-200"
          />
        </div>
      </div>
      <button type="submit" className="btn-primary btn-block btn mt-8">
        Registrarme
      </button>
    </form>
  )
}
