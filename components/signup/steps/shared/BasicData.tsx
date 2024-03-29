import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import { Gender, type Location } from '@prisma/client'
import Select from '@/components/forms/inputs/Select'
import { genders } from '@/lib/translations'

type Props = React.PropsWithChildren<{
  userType: NonAdmin
  locations: Location[]
}>

const labels = {
  PERSON: 'Nombre y apellido:',
  COMPANY: 'Nombre de la empresa:',
  INSTITUTE: 'Nombre de la institución:',
}

const placeholders = {
  PERSON: 'Ej. Pedro Blanco',
  COMPANY: 'Ej. Phasebuck S.A.',
  INSTITUTE: 'Ej. Colegio Luis Blanco',
}

export default function BasicData({ userType, locations }: Props) {
  const isPerson = userType === 'PERSON'

  const { goNext, goBack, register, errors, trigger, clearErrors } =
    useContext(SignUpContext)

  async function handleNext() {
    const fieldsToValidate = [
      'name',
      'email',
      'password',
      'phone',
      'description',
    ]

    if (isPerson) {
      fieldsToValidate.push('ci', 'birth', 'gender')
    } else {
      fieldsToValidate.push('rif')
    }

    const valid = await trigger(fieldsToValidate)

    if (valid) {
      clearErrors(['skills', 'fields', 'image', 'certification'])
      goNext()
    }
  }

  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Estamos <span className="text-primary">interesados</span> en saber más
        sobre <span className="text-secondary">ti</span>!
      </h2>
      <p>
        Ingrese los datos básicos para personalizar tu experiencia en la
        aplicación.
      </p>
      <section className="mx-auto w-full pt-4">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="col-span-2 md:col-span-1">
            <Input
              name="name"
              label={labels[userType]}
              register={register}
              errors={errors}
              maxlength={60}
              placeholder={placeholders[userType]}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            {isPerson
              ? (
                <Input
                  label="Cédula de identidad:"
                  type="number"
                  name="ci"
                  register={register}
                  errors={errors}
                  placeholder="Ej. 12345678"
                />
                )
              : (
                <Input
                  label="RIF:"
                  name="rif"
                  type="number"
                  register={register}
                  errors={errors}
                  placeholder="Ej. 1234567890"
                />
                )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input
              name="email"
              label="Correo electrónico:"
              register={register}
              errors={errors}
              maxlength={40}
              placeholder="Ej. correo@ejemplo.com"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input
              label="Ingresa tu contraseña:"
              name="password"
              type="password"
              register={register}
              errors={errors}
              maxlength={20}
              placeholder="Ingresa tu contraseña..."
            />
          </div>
          {isPerson && (
            <div className="col-span-2 md:col-span-1">
              <Input
                type="date"
                label="Fecha de nacimiento:"
                name="birth"
                register={register}
                errors={errors}
                placeholder="Fecha de nacimiento"
              />
            </div>
          )}
          {isPerson && (
            <div className="col-span-2 md:col-span-1">
              <Select
                name="gender"
                register={register}
                errors={errors}
                label="Sexo:"
                options={{ type: 'enum', data: Gender, translation: genders }}
              />
            </div>
          )}
          <div className="col-span-2 md:col-span-1">
            <Input
              label="Teléfono:"
              type="number"
              name="phone"
              register={register}
              errors={errors}
              placeholder="Ej. 04121234567"
              maxlength={11}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Select
              name="locationId"
              register={register}
              errors={errors}
              label="Dirección:"
              options={{ type: 'rows', data: locations }}
            />
          </div>
          <div className="col-span-2">
            <Textarea
              height={2}
              label="Sobre ti:"
              name="description"
              register={register}
              errors={errors}
              maxlength={255}
              placeholder="Ingresa una breve descripción para tu perfil..."
              config={{ required: false }}
            />
          </div>
        </div>
        <div className="mb-4 flex justify-between">
          <button
            onClick={goBack}
            type="button"
            className="btn-neutral btn mt-4"
          >
            Volver
          </button>
          <button
            onClick={handleNext}
            type="button"
            className="btn-primary btn mt-4"
          >
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
