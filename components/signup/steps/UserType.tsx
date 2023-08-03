import { UserType as TypeUser } from '@prisma/client'
import Radio from '@/components/forms/inputs/Radio'
import { userTypes as translation } from '@/lib/translations'
import { useState } from 'react'

type Props = React.PropsWithChildren<{
  setStep: (step: string) => void
}>

export default function UserType({ setStep }: Props) {
  // TODO -> arreglar el tipado
  const [selected, setSelected] = useState<'PERSON' | 'COMPANY' | 'INSTITUTE'>()

  const descriptions = {
    COMPANY: '¡Contrata nuevos empleados y crea proyectos para impulsar el crecimiento y éxito de tu empresa!',
    INSTITUTE: 'Gestiona las pasantías de tus estudiantes para fortalecer su preparación profesional',
    PERSON: '¡Descubre ofertas de trabajo, crea tu perfil y encuentra tu camino al éxito profesional!',
  }

  const options = Object.values(TypeUser).map((userType) => {
    const label = translation[userType]
    return (
      <Radio name="type" key={userType} value={userType} label={label} onInput={() => { setSelected(userType) }} active={userType === selected}>
        {descriptions[userType]}
      </Radio>
    )
  })

  return (
    <>
      <h2 className="text-center text-2xl font-bold md:text-4xl">
        Tipo de usuario
      </h2>
      <section className="mx-auto w-full pt-4">
        {options}
        <div className="mt-4 flex justify-between">
          <button onClick={() => { setStep('general') }} type="button" className="btn-neutral btn">
            Volver
          </button>
          <button onClick={() => { setStep('basicData') }} type="button" className="btn-primary btn">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
