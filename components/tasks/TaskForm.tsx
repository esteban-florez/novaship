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
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { type ProjectTeam } from '@/lib/types'

interface Props {
  action: string
  method: HTTP_METHOD
  projectId: string
  task?: Task & {
    participations: Participation[]
  }
  team: ProjectTeam
}

// NOTE -> se debe añadir el responsable a la lista de miembros seleccionados
export default function TaskForm({ action, method, projectId, task, team }: Props) {
  const taskLeader = task?.participations.find(participation => participation.isLeader)?.membershipId ?? undefined
  const selectedMembers = task?.participations.map(participation => participation.membershipId) ?? undefined
  const cancelUrl = `/home/projects/${projectId}`

  const memberships: Array<{ id: string, name: string }> = team.memberships
    .filter(member => !member.isLeader && member.companyId === null)
    .map(member => ({ id: member.id, name: member.person?.name ?? member.company?.name ?? '' }))

  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit, control,
  } = useSubmit({
    schema,
    method,
    append: {
      projectId,
      taskId: task?.id,
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
            defaultValue={taskLeader}
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
            menuOnTop
            label="Participantes"
            itemsName="Miembros"
            options={{
              type: 'rows',
              data: memberships,
            }}
          />
        </FormSection>
        <FormButtons url={cancelUrl} />
      </form>
    </FormLayout>
  )
}
