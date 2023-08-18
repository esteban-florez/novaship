'use client'

import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import Textarea from '@/components/forms/inputs/Textarea'
import { type Location, UserType } from '@prisma/client'
import { userTypes } from '@/lib/translations'
import { schema } from '@/lib/validation/schemas/test'
import useSubmit from '@/lib/hooks/useSubmit'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'

type Props = React.PropsWithChildren<{
  locations: Location[]
}>

export default function TestForm({ locations }: Props) {
  const {
    alert,
    register,
    handleSubmit,
    serverErrors,
    control,
    formState: { errors },
  } = useSubmit({ schema, refreshOnSuccess: true })

  return (
    <form className="p-8" action="/api/test" method="POST" onSubmit={handleSubmit}>
      {serverErrors}
      {alert}
      <div className="form-control">
        <Input errors={errors} register={register} label="Correo" name="email" type="email" placeholder="Introduce tu correo..." />
      </div>
      <div className="form-control">
        <Input errors={errors} register={register} label="Nombre" name="name" placeholder="Introduce tu nombre..." />
      </div>
      <div className="form-control">
        <Input errors={errors} register={register} label="Contraseña" name="password" type="password" placeholder="Introduce tu contraseña..." />
      </div>
      <div className="form-control">
        <Input errors={errors} register={register} config={{ valueAsDate: true }} label="Fecha de nacimiento" name="birth" type="date" placeholder="Fecha de nacimiento" />
      </div>
      <div className="form-control">
        <Input
          errors={errors} register={register} config={{ valueAsNumber: true }}
          step="0.01" label="Sueldo" name="salary" type="number" placeholder="Ingresa tu salario..."
        />
      </div>
      <div className="form-control">
        <Select
          label="Selecciona el tipo" errors={errors}
          name="type" register={register}
          options={{ type: 'enum', data: UserType, translation: userTypes }}
        />
      </div>
      <div className="form-control">
        <Textarea register={register} errors={errors} name="description" label="Descripción" placeholder="You're crazy man!" />
      </div>
      <div className="form-control">
        <Select
          label="Selecciona el loqueishon" errors={errors}
          register={register} name="locationId"
          options={{
            type: 'rows', data: locations,
          }}
        />
      </div>
      <div className="form-control">
        <SelectMultiple
          control={control}
          label="Selecciona varios:"
          name="multiple"
          menuOnTop
          itemsName="Cosas"
          limit={5}
          options={{
            type: 'rows',
            data: locations,
          }}
        />
      </div>
      <button className="btn-primary btn mt-4" type="submit">
        Enviar
      </button>
    </form>
  )
}
