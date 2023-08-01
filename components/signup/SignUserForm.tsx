import Input from '../forms/inputs/Input'
import Textarea from '../forms/inputs/Textarea'

type Props = React.PropsWithChildren<{
  setStep: (step: string) => void
}>

export default function SignUserForm({ setStep }: Props) {
  return (
    <>
      <h2 className="text-center font-title text-2xl font-bold md:text-4xl">
        Rellenar datos
      </h2>
      <section className="mx-auto w-full pt-4">
        <div className="grid grid-cols-2">
          <Input label="Nombre y apellido:" name="name" placeholder="Ej. Myriam Yaqueno" />
          <Input label="Cédula de identidad:" name="ci" placeholder="Ej. 12345678" />
          <Input label="Teléfono:" name="phone" placeholder="Ej. 0412-1234567" />
          <Input type="date" label="Fecha de nacimiento:" name="birth" placeholder="" />
          <Textarea height={3} label="Descripción:" name="bio" placeholder="Destacate pue" />
        </div>
        <div className="flex justify-between">
          <button onClick={() => { setStep('userType') }} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={() => { setStep('photoProfile') }} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
