'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import { schema } from '@/lib/validation/schemas/task'
import FormButtons from '../forms/FormButtons'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import { type Membership, type Person } from '@prisma/client'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import FormLayout from '../forms/FormLayout'

interface Props {
  projectId: string
  memberships: Array<(Membership & {
    person: Person
  })>
}

export default function CreateTaskForm({ projectId, memberships }: Props) {
  const members = memberships.map(member => {
    return {
      id: member.id,
      name: member.person.name,
    }
  })

  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit, control,
  } = useSubmit({
    schema,
    append: {
      projectId,
    },
  })

  return (
    <FormLayout>
      <form method="POST" action="/api/tasks" onSubmit={handleSubmit}>
        {serverErrors}
        {alert}
        <FormSection title="Detalles" description="Asigne una tarea y una descripción de la misma para avanzar en el proyecto.">
          <Input
            name="title"
            placeholder="Ej. Realizar inventario."
            label="Título"
            register={register}
            errors={errors}
          />
          <Textarea
            name="description"
            placeholder="Ej. Rellenar una hoja de excel con los productos en stock."
            label="Descripción"
            register={register}
            errors={errors}
          />
        </FormSection>
        <FormSection title="Participantes" description="Designe a las personas que completerán la tarea.">
          <Select
            name="responsable"
            label="Responsable"
            register={register}
            errors={errors}
            options={{
              type: 'rows',
              data: members,
            }}
          />
          <SelectMultiple
            name="members"
            control={control}
            label="Participantes"
            itemsName="Miembros"
            options={{
              type: 'rows',
              data: members,
            }}
          />
        </FormSection>
        <FormButtons url={`/home/projects/${projectId}`} />
      </form>
    </FormLayout>
  )
}
