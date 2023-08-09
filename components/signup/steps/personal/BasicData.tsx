import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'

export default function BasicData({ goBack, goNext }: StepProps) {
  return (
    <>
      <h2 className="text-xl font-bold md:text-3xl">
        ¡Estamos <span className="text-primary">interesados</span> en saber más sobre <span className="text-secondary">usted</span>!
      </h2>
      <p className="text-base">
        Te invitamos a tus datos para personalizar tu experiencia en nuestra plataforma.
      </p>
      <section className="mx-auto w-full pt-4">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="col-span-2 md:col-span-1">
            <Input label="Nombre y apellido:" name="name" placeholder="Ej. Myriam Yaqueno" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input label="Cédula de identidad:" name="ci" placeholder="Ej. 12345678" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input label="Teléfono:" name="phone" placeholder="Ej. 0412-1234567" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input type="date" label="Fecha de nacimiento:" name="birth" placeholder="" />
          </div>
          <div className="col-span-2">
            <Textarea height={2} label="Descripción:" name="bio" placeholder="Destacate pue" />
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={goNext} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
