import Link from 'next/link'
import GoogleSignUpButton from '../../GoogleSignUpButton'
import Input from '../../forms/inputs/Input'

type Props = React.PropsWithChildren<{
  goNext: () => void
}>

// mrk así lo dejo tengo sueño:c

export default function General({ goNext }: Props) {
  return (
    <>
      <div className="z-10 grid h-screen grid-cols-7 place-items-center gap-6">
        <div className="col-span-7 flex flex-col justify-center rounded-b-2xl rounded-t-none bg-white/10 p-6 shadow-lg backdrop-blur-sm md:col-span-2 md:w-5/6 md:rounded-2xl lg:w-9/12">
          <div className="flex flex-row items-center gap-2 md:flex-col md:items-start">
            <div className="flex flex-col">
              <h2 className="mb-3 text-center text-lg font-bold text-white md:text-xl lg:text-2xl">
                ¿Ya tienes una cuenta?
              </h2>
              <Link href="/auth/login" className="btn -mt-1 flex bg-white md:hidden md:text-base">
                Inicia sesión
              </Link>
            </div>
            <img src="/undraw_summer.webp" alt="Imagen de trabajo remoto" className="z-50 grid h-24 w-36 place-items-end md:h-auto md:w-48" />
          </div>
          <Link href="/auth/login" className="btn -mt-1 hidden bg-white md:flex md:text-base">
            Inicia sesión
          </Link>
        </div>
        <div className="col-span-7 my-6 flex w-full flex-col justify-center p-6 md:col-span-5 md:ml-20 md:mt-0 md:w-3/4 lg:w-3/6">
          <h2 className="mb-1 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            ¡Descubre <span className="text-primary">todo</span> lo <br className="hidden lg:block" /> que <span className="text-secondary">tenemos</span> para ti!
          </h2>
          <p className="text-center text-base">Seguridad y confianza, siempre a tu disposición</p>
          <div className="mx-auto mt-3 w-full">
            <div className="flex flex-col">
              <Input label="Correo electrónico:" name="email" placeholder="Ej. correo@ejemplo.com" />
              <Input label="Ingresa tu contraseña:" name="password" placeholder="Ingresa tu contraseña..." />
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={goNext} type="button" className="btn-primary btn-block btn mt-3">
                Registrarme
              </button>
              <GoogleSignUpButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
