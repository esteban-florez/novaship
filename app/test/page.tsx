'use client'

import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import Textarea from '@/components/forms/inputs/Textarea'
import { userTypes } from '@/lib/translations'
import { UserType } from '@prisma/client'
import { useForm } from 'react-hook-form'

export default function TestPage() {
  const { register, handleSubmit } = useForm()

  return (
    <form className="p-8" action="/api/test" method="POST" onSubmit={handleSubmit(data => { console.log(data) })}>
      <div className="form-control">
        <Input register={{ ...register('email') }} label="Correo" name="email" type="email" placeholder="Introduce tu correo..." />
      </div>
      <div className="form-control">
        <Input register={{ ...register('name') }} label="Nombre" name="name" placeholder="Introduce tu nombre..." />
      </div>
      <div className="form-control">
        <Input register={{ ...register('password') }} label="Contraseña" name="password" type="password" placeholder="Introduce tu contraseña..." />
      </div>
      <div className="form-control">
        <Input register={{ ...register('birth') }} label="Fecha de nacimiento" name="birth" type="date" placeholder="Fecha de nacimiento" />
      </div>
      <div className="form-control">
        <Input register={{ ...register('salary') }} label="Sueldo" name="salary" type="number" placeholder="Ingresa tu salario..." />
      </div>
      <div className="form-control">
        <Select
          label="Selecciona el tipo" name="type" register={{ ...register('type') }}
          options={{ type: 'enum', data: UserType, translation: userTypes }}
        />
      </div>
      <div className="form-control">
        <Textarea register={{ ...register('description') }} name="description" label="Descripción" placeholder="You're crazy man!" />
      </div>
      <button className="btn-primary btn mt-4" type="submit">
        Enviar
      </button>
    </form>
  )
}
