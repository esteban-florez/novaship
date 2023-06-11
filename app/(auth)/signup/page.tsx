import Link from 'next/link'

export default function SignupPage() {
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
            Registrarme
          </h2>
        </header>
        <div className="my-5 flex max-w-[40vw]">
          <form className="mx-auto">
            <div className="mb-3 flex gap-4">
              <div className="w-3/6">
                <label
                  htmlFor="name"
                  className="text-white/80"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Julio"
                  className="input w-full rounded-sm bg-white"
                />
              </div>
              <div className="w-3/6">
                <label
                  htmlFor="lastName"
                  className="text-white/80"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Torres"
                  className="input w-full rounded-sm bg-white"
                />
              </div>
            </div>
            <div className="mb-3 flex gap-4">
              <div className="w-3/6">
                <label
                  htmlFor="name"
                  className="text-white/80"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="***********"
                  className="input w-full rounded-sm bg-white"
                />
              </div>
              <div className="w-3/6">
                <label
                  htmlFor="lastName"
                  className="text-white/80"
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="***********"
                  className="input w-full rounded-sm bg-white"
                />
              </div>
            </div>
            <div className="mb-3 flex gap-4">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="text-white/80"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="antonio61@gmail.com"
                  className="input w-full rounded-sm bg-white"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="divider"></div>

        <footer className="flex flex-col gap-4">
          <button className="btn-ghost btn w-full rounded-sm bg-light-purple text-black hover:text-white">
            Registrarme
          </button>
          <Link href="/login">
            <div className="flex w-full flex-col items-center justify-center rounded-sm py-2 transition-colors hover:bg-gray-200 hover:text-black">
              Iniciar sesión
            </div>
          </Link>
        </footer>
      </div>

      {/* Image bottom right */}
      <div className="absolute bottom-0 right-0 h-3/6 w-32 rotate-180 flex-col rounded-br-[50px] bg-light-purple"></div>
      <div className="absolute bottom-0 right-20 h-2/6 w-48 rotate-180 flex-col rounded-br-[100px] bg-light-purple"></div>
    </section>
  )
}
