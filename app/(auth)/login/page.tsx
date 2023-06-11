import Link from 'next/link'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
}

export default function LoginPage() {
  return (
    <section className="flex bg-white/10 p-8">
      {/* Image left top  */}
      <div className="absolute left-0 top-0 h-3/6 w-32 flex-col rounded-br-[50px] bg-light-purple"></div>
      <div className="absolute left-20 top-0 h-1/6 w-32 flex-col rounded-b-[100px] bg-light-purple"></div>

      {/* Form */}
      <div className="flex-col">
        <header className="">
          <h2
            className="text-center font-title text-4xl font-bold text-white"
          >
            Iniciar Sesión
          </h2>
        </header>
        <div className="my-5 flex">
          <form className="mx-auto">
            <div className="mb-3">
              <label
                htmlFor="email"
                className="text-white/80"
              >
                Correo electrónico
              </label>
              <input
                type="text"
                id="email"
                placeholder="josephtorres@gmail.com"
                className="input w-full rounded-sm bg-white"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="text-white/80"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="input w-full rounded-sm bg-white"
              />
            </div>
          </form>
        </div>

        <div className="divider"></div>

        <footer className="flex flex-col gap-4">
          <button className="btn-ghost btn w-full rounded-sm bg-light-purple text-black hover:text-white">
            Iniciar sesión
          </button>
          <div className="flex flex-row justify-between gap-2">
            <Link
              href="/signup"
              className="flex w-3/6 flex-col items-center justify-center rounded-sm py-2 transition-colors hover:bg-gray-200 hover:text-black"
            >
              Registrarme
            </Link>
            <Link
              href="/password-recover"
              className="flex w-3/6 flex-col items-center justify-center rounded-sm py-2 text-sm transition-colors hover:bg-gray-200 hover:text-black"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </footer>
      </div>

      {/* Image bottom right */}
      <div className="absolute bottom-0 right-0 h-3/6 w-32 rotate-180 flex-col rounded-br-[50px] bg-light-purple"></div>
      <div className="absolute bottom-0 right-20 h-2/6 w-48 rotate-180 flex-col rounded-br-[100px] bg-light-purple"></div>
    </section>
  )
}
