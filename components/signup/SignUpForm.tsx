'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type FormSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, HTMLFormElement, HTMLFormElement>

export default function SignUpForm() {
  const router = useRouter()
  async function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const response = await fetch(event.target.action, {
      body: formData,
      method: event.target.method,
    })

    const user = await response.json()

    const signinResponse = await signIn('credentials', { redirect: false, email: user.email })

    if (signinResponse === undefined) throw new Error('SigIn Error')

    if (signinResponse.ok) {
      router.push('/')
    }
  }

  return (
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
            className="input-bordered input w-full rounded-lg bg-base-300"
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="surname" className="label font-semibold">
            Apellido:
          </label>
          <input
            type="text"
            id="surnname"
            name="surname"
            placeholder="Ej. Pérez"
            className="input-bordered input w-full rounded-lg bg-base-300"
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
            className="input-bordered input w-full rounded-lg bg-base-300"
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
            className="input-bordered input w-full rounded-lg bg-base-300"
          />
        </div>
      </div>
      <button type="submit" className="btn-primary btn-block btn mt-8">
        Registrarme
      </button>
    </form>
  )
}
