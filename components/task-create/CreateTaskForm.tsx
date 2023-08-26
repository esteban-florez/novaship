'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import { type Fields, schema } from '@/lib/validation/schemas/task'
import Link from 'next/link'
// import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'

interface Props {
  projectId: string
}

export default function CreateTaskForm({ projectId }: Props) {
  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit,
  } = useSubmit<Fields>({ schema })

  return (
    <form method="POST" action="/api/tasks" className="mb-4 w-full rounded-lg bg-base-100 p-4 pt-10" onSubmit={handleSubmit}>
      {serverErrors}
      {alert}
      <FormSection title="Datos básicos" description="El nombre de la oferta, su descripción, categoría y salario serán visibles para los posibles candidatos.">
        <Input
          name="title"
          placeholder="Ej. Ordenar los zapatos"
          label="Título de la tarea:"
          register={register}
          errors={errors}
        />
        <Input
          name="description"
          placeholder="Ej. Ola soy una descripcion"
          label="Descripción:"
          register={register}
          errors={errors}
        />
        {/* <SelectMultiple /> */}
        <div className="mb-4 flex justify-between gap-2 px-4">
          <Link href={`/home/projects/${projectId}`} className="btn-neutral btn-md btn text-base">
            Cancelar
          </Link>
          <button className="btn-primary btn-md btn text-base" type="submit">
            Crear tarea
          </button>
        </div>
      </FormSection>
    </form>
  )
}
