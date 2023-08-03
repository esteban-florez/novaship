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
      <div className="absolute left-0 z-20 grid h-screen place-items-center gap-0">
        <img src="/undraw_Appreciation_pur7.webp" alt="Imagen de trabajo remoto" width={200} height={200} className="z-50" />
        <div className="flex flex-col">
          <h2 className="mb-1 text-start text-3xl font-bold text-white">
            ¿Tienes una cuenta?
          </h2>
          <Link href="/auth/login" className="btn bg-white">
            Inicia sesión
          </Link>
        </div>
      </div>
      <div className="grid h-screen place-items-end">
        <div className="mx-36 my-auto flex w-2/5 flex-col rounded-lg">
          <h2 className="mb-1 text-center text-3xl font-bold md:text-4xl">
            ¡Descubre <span className="text-primary">todo</span> lo
            <br />
            que <span className="text-secondary">tenemos</span> para ti!
          </h2>
          <p className="text-center text-base">Seguridad y confianza, siempre a tu disposición</p>
          <div className="mx-auto w-full pt-3">
            <div className="flex flex-col">
              <Input label="Correo electrónico:" name="email" placeholder="Ej. correo@ejemplo.com" />
              <Input label="Ingresa tu contraseña:" name="password" placeholder="Ingresa tu contraseña..." />
            </div>
            <div className="flex flex-col gap-3">
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
