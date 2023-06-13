import Link from 'next/link'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
}

export default function LoginPage() {
  return (
    <section className="z-10 mx-2 flex max-w-md flex-col rounded-xl bg-base-200 px-4 py-6 shadow-md md:px-8">
      <h2 className="text-center font-title text-2xl font-bold text-white md:text-4xl">
        ¡Tu plataforma de ofertas de trabajo!
      </h2>
      <form className="mx-auto w-full pt-4">
        <div className="form-control w-full">
          <label htmlFor="email" className="label font-semibold">
            Correo electrónico:
          </label>
          <input
            type="text"
            id="email"
            placeholder="correo@ejemplo.com"
            className="input-bordered input w-full rounded-lg bg-base-300"
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
            className="input-bordered input w-full rounded-lg bg-base-300"
          />
        </div>
        <div className="flex flex-col gap-4">
          <button type="submit" className="btn-primary btn mt-8 w-full md:w-auto">
            Iniciar sesión
          </button>
          <Link
            href="/login"
            className="text-center text-sm underline"
          >
            Olvidé mi contraseña
          </Link>
        </div>
      </form>
      <div className="divider divider-vertical my-2"></div>
      <footer className="flex flex-col gap-4">
        <p className="text-center font-title text-xl font-semibold text-white">
          ¿No posees una cuenta?
        </p>
        <div className="flex w-full flex-col gap-2">
          <Link
            href="/signup"
            className="btn-secondary btn w-full border-2"
          >
            Regístrate
          </Link>
        </div>
      </footer>
    </section>
  )
}
