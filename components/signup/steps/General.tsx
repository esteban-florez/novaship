import Link from 'next/link'
import GoogleSignUpButton from '../../GoogleSignUpButton'
import Input from '../../forms/inputs/Input'

type Props = React.PropsWithChildren<{
  setStep: (step: string) => void
}>

// mrk así lo dejo tengo sueño:c

export default function General({ setStep }: Props) {
  return (
    <>
      <div className="z-10 grid h-screen grid-cols-7 place-items-center">
        <div className="col-span-2 flex w-9/12 flex-col justify-center rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-sm">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">
            ¿Ya tienes una cuenta?
          </h2>
          <img src="/undraw_summer.webp" alt="Imagen de trabajo remoto" width={180} className="z-50" />
          <Link href="/auth/login" className="btn -mt-1 bg-white text-base">
            Inicia sesión
          </Link>
        </div>
        <div className="col-span-5 ml-20 flex w-3/6 flex-col justify-center">
          <h2 className="mb-1 text-center text-3xl font-bold md:text-4xl">
            ¡Descubre <span className="text-primary">todo</span> lo
            <br />
            que <span className="text-secondary">tenemos</span> para ti!
          </h2>
          <p className="text-center text-base">Seguridad y confianza, siempre a tu disposición</p>
          <div className="mx-auto mt-3 w-full">
            <div className="flex flex-col">
              <Input label="Correo electrónico:" name="email" placeholder="Ej. correo@ejemplo.com" />
              <Input label="Ingresa tu contraseña:" name="password" placeholder="Ingresa tu contraseña..." />
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => { setStep('userType') }} type="button" className="btn-primary btn-block btn mt-3">
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
