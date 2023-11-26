'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import { schema } from '@/lib/validation/schemas/task'
import FormButtons from '../forms/FormButtons'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { type Membership, type Person, TaskStatus } from '@prisma/client'
import { usePathname } from 'next/navigation'
import { taskStatuses } from '@/lib/translations'
import { type TasksWithRelationship } from '@/lib/types'

interface Props extends FormProps {
  projectId: string
  task?: TasksWithRelationship
  person?: {
    id: string
    name: string
  }
  memberships?: Array<
  Membership & {
    person: Person
  }
  >
  filter: string
}

// NOTE -> se debe añadir el responsable a la lista de miembros seleccionados
export default function TaskForm({
  action,
  method,
  projectId,
  person,
  task,
  memberships,
  filter,
}: Props) {
  const pathname = usePathname()
  const query =
    filter !== ''
      ? { id: task?.id, filtered: filter }
      : task != null
        ? { id: task.id }
        : null
  const taskLeader = task?.personId
  const selectedMembers = task?.participations.map(
    (participation) => participation.personId
  )
  const members =
    memberships?.map((m) => ({ id: m.person.id, name: m.person.name })) ?? []

  if (person != null) {
    members.push(person)
  }

  const {
    register,
    formState: { errors },
    alert,
    serverErrors,
    handleSubmit,
    control,
    loading,
  } = useSubmit({
    schema,
    method,
    append: {
      projectId,
      taskId: task?.id,
      filter,
    },
  })

  return (
    <form
      method="POST"
      action={action}
      onSubmit={handleSubmit}
    >
      {serverErrors}
      {alert}
      <FormSection
        title="Detalles"
        description="Asigne una tarea y una descripción de la misma para avanzar en el proyecto."
      >
        <Input
          name="title"
          placeholder="Ej. Realizar inventario."
          label="Título"
          value={task?.title}
          register={register}
          errors={errors}
          maxlength={40}
        />
        <Textarea
          name="description"
          placeholder="Ej. Rellenar una hoja de excel con los productos en stock."
          label="Descripción"
          value={task?.description}
          register={register}
          errors={errors}
          maxlength={255}
        />
        <Select
          name="status"
          label="Estado"
          defaultValue={task?.status ?? undefined}
          register={register}
          errors={errors}
          options={{
            type: 'enum',
            translation: taskStatuses,
            data: TaskStatus,
          }}
        />
      </FormSection>
      {memberships != null && (
        <FormSection
          title="Participantes"
          description="Designe a las personas que completerán la tarea."
        >
          <Select
            name="responsable"
            label="Responsable"
            defaultValue={taskLeader}
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
            defaultValue={selectedMembers}
            menuOnTop
            label="Participantes"
            itemsName="Miembros"
            options={{
              type: 'rows',
              data: members,
            }}
          />
        </FormSection>
      )}
      <FormButtons
        disableSubmit={loading}
        link={{
          href: {
            pathname,
            query,
          },
        }}
        label={method === 'PUT' ? 'Actualizar' : 'Registrar'}
      />
    </form>
  )
}
