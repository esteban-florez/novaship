import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import { type UserType } from '@prisma/client'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  userType: UserType
}>

const labels = {
  PERSON: 'Nombre y apellido:',
  COMPANY: 'Nombre de la empresa:',
  INSTITUTE: 'Nombre de la institución:',
}

const placeholders = {
  PERSON: 'Ej. Myriam Yaqueno',
  COMPANY: 'Ej. Phasebuck S.A.',
  INSTITUTE: 'Ej. Colegio Luis Blanco',
}

export default function BasicData({ userType }: Props) {
  const isPerson = userType === 'PERSON'

  const { goNext, goBack, register, errors, trigger } = useContext(SignUpContext)

  async function handleNext() {
    const fieldsToValidate = ['name', 'email', 'password', 'phone', 'description']

    if (isPerson) {
      fieldsToValidate.push('ci', 'birth')
    } else {
      fieldsToValidate.push('rif')
    }

    const valid = await trigger(fieldsToValidate)

    if (valid) {
      goNext()
    }
  }

  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Estamos <span className="text-primary">interesados</span> en saber más sobre <span className="text-secondary">ti</span>!
      </h2>
      <p className="text-base">
        Ingresa los datos básicos para personalizar tu experiencia en la aplicación.
      </p>
      <section className="mx-auto w-full pt-4">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="col-span-2 md:col-span-1">
            <Input label={labels[userType]} name="name" register={register} errors={errors} placeholder={placeholders[userType]} />
          </div>
          <div className="col-span-2 md:col-span-1">
            {isPerson
              ? (
                <Input label="Cédula de identidad:" type="number" name="ci" register={register} errors={errors} placeholder="Ej. 12345678" />
                )
              : (
                <Input label="RIF:" name="rif" type="number" register={register} errors={errors} placeholder="Ej. 1234567890" />
                )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input label="Correo electrónico:" name="email" register={register} errors={errors} placeholder="Ej. correo@ejemplo.com" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input label="Ingresa tu contraseña:" name="password" register={register} errors={errors} type="password" placeholder="Ingresa tu contraseña..." />
          </div>
          <div className={clsx({
            'col-span-2 md:col-span-1': isPerson,
            'col-span-2': !isPerson,
          })}
          >
            <Input label="Teléfono:" type="number" name="phone" register={register} errors={errors} placeholder="Ej. 04121234567" />
          </div>
          {isPerson && (
            <div className="col-span-2 md:col-span-1">
              <Input type="date" label="Fecha de nacimiento:" name="birth" register={register} errors={errors} placeholder="Fecha de nacimiento" />
            </div>
          )}
          <div className="col-span-2">
            <Textarea height={2} label="Sobre ti:" name="description" register={register} errors={errors} placeholder="Ingresa una breve descripción para tu perfil..." />
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={handleNext} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
