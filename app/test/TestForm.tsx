'use client'

import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import Textarea from '@/components/forms/inputs/Textarea'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Location, UserType } from '@prisma/client'
import { userTypes } from '@/lib/translations'
import collect from '@/lib/utils/collection'
import { schema, type Fields } from '@/lib/validation/schemas/test'

type Props = React.PropsWithChildren<{
  locations: Location[]
}>

export default function TestForm({ locations }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<Fields>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })
  // TODO -> los "componentes control" deberían recibir 4 props. name, errors, register (como function), y options, para usarse en la llamada de register dentro del componente.

  return (
    <form className="p-8" action="/api/test" method="POST" onSubmit={handleSubmit(data => { console.log(data) })}>
      <div className="form-control">
        <Input errors={errors} register={{ ...register('email') }} label="Correo" name="email" type="email" placeholder="Introduce tu correo..." />
      </div>
      <div className="form-control">
        <Input errors={errors} register={{ ...register('name') }} label="Nombre" name="name" placeholder="Introduce tu nombre..." />
      </div>
      <div className="form-control">
        <Input errors={errors} register={{ ...register('password') }} label="Contraseña" name="password" type="password" placeholder="Introduce tu contraseña..." />
      </div>
      <div className="form-control">
        <Input errors={errors} register={{ ...register('birth', { valueAsDate: true }) }} label="Fecha de nacimiento" name="birth" type="date" placeholder="Fecha de nacimiento" />
      </div>
      <div className="form-control">
        <Input errors={errors} register={{ ...register('salary', { valueAsNumber: true }) }} label="Sueldo" name="salary" type="number" placeholder="Ingresa tu salario..." />
      </div>
      <div className="form-control">
        <Select
          label="Selecciona el tipo" errors={errors}
          name="type" register={{ ...register('type') }}
          options={{ type: 'enum', data: UserType, translation: userTypes }}
        />
      </div>
      <div className="form-control">
        <Textarea register={{ ...register('description') }} errors={errors} name="description" label="Descripción" placeholder="You're crazy man!" />
      </div>
      <div className="form-control">
        <Select
          label="Selecciona el loqueishon" errors={errors}
          register={{ ...register('locationId') }} name="locationId"
          options={{
            type: 'rows', data: collect(locations).toOptions(),
          }}
        />
      </div>
      <button className="btn-primary btn mt-4" type="submit">
        Enviar
      </button>
    </form>
  )
}
