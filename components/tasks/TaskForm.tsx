'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import { schema } from '@/lib/validation/schemas/task'
import FormButtons from '../forms/FormButtons'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import FormLayout from '../forms/FormLayout'
import { type Participation, type Task } from '@prisma/client'

interface Props {
  action: string
  projectId: string
  task?: Task & {
    participations: Participation[]
  }
  memberships: Array<{
    id: string
    name: string
  }>
}

export default function TaskForm({ action, projectId, task, memberships }: Props) {
  const taskLeader = task?.participations.find(participation => participation.isLeader)?.membershipId ?? undefined

  const selectedMembers = task?.participations.map(participation => {
    return participation.membershipId
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
      <form method="POST" action={action} onSubmit={handleSubmit}>
        {serverErrors}
        {alert}
        <FormSection title="Detalles" description="Asigne una tarea y una descripción de la misma para avanzar en el proyecto.">
          <Input
            name="title"
            placeholder="Ej. Realizar inventario."
            label="Título"
            value={task?.title}
            register={register}
            errors={errors}
          />
          <Textarea
            name="description"
            placeholder="Ej. Rellenar una hoja de excel con los productos en stock."
            label="Descripción"
            value={task?.description}
            register={register}
            errors={errors}
          />
        </FormSection>
        <FormSection title="Participantes" description="Designe a las personas que completerán la tarea.">
          <Select
            name="responsable"
            label="Responsable"
            config={{
              value: taskLeader,
            }}
            register={register}
            errors={errors}
            options={{
              type: 'rows',
              data: memberships,
            }}
          />
          <SelectMultiple
            name="members"
            control={control}
            defaultValue={selectedMembers}
            label="Participantes"
            itemsName="Miembros"
            options={{
              type: 'rows',
              data: memberships,
            }}
          />
        </FormSection>
        <FormButtons url={`/home/projects/${projectId}`} />
      </form>
    </FormLayout>
  )
}
