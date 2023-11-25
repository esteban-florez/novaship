'use client'

import { schema } from '@/lib/validation/schemas/subtask'
import useSubmit from '@/lib/hooks/useSubmit'
import { type Membership, type Person, TaskStatus } from '@prisma/client'
import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import Select from '@/components/forms/inputs/Select'
import { taskStatuses } from '@/lib/translations'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'
import FormButtons from '@/components/forms/FormButtons'
import { usePathname } from 'next/navigation'
import { type SubtasksWithRelation } from '@/lib/types'

interface Props extends FormProps {
  taskId: string
  subtask?: SubtasksWithRelation
  person?: {
    id: string
    name: string
  }
  memberships?: Array<
  Membership & {
    person: Person
  }
  >
}

export default function SubtaskForm({
  action,
  method,
  taskId,
  subtask,
  memberships,
  person,
}: Props) {
  const pathname = usePathname()
  const selectedMembers = subtask?.subparticipations.map(
    (subparticipation) => subparticipation.personId
  )
  const members =
    memberships?.map((m) => {
      return { id: m.person.id, name: m.person.name }
    }) ?? []

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
      taskId,
    },
  })

  return (
    <>
      {serverErrors}
      {alert}
      <form
        method={method}
        action={action}
        onSubmit={handleSubmit}
      >
        <FormSection
          title={method === 'PUT' ? 'Actualizar subtarea' : 'Nueva subtarea'}
          description="Describa la subtarea u objetivo para la tarea."
          tooltipOrientation="tooltip-bottom"
        >
          <Input
            name="title"
            label="Título"
            placeholder="Ej: Crear un registro en excel."
            value={subtask?.title}
            register={register}
            errors={errors}
            maxlength={40}
          />
          <Textarea
            name="description"
            label="Descripción"
            placeholder="Ej: Crear un archivo en excel y compartirlo para todos los miembros del grupo."
            value={subtask?.description}
            register={register}
            errors={errors}
            maxlength={255}
          />
          {method === 'PUT' && (
            <Select
              name="status"
              label="Estado"
              defaultValue={subtask?.status}
              register={register}
              errors={errors}
              options={{
                type: 'enum',
                data: TaskStatus,
                translation: taskStatuses,
              }}
            />
          )}
        </FormSection>
        {(selectedMembers != null || memberships != null) && (
          <FormSection
            title="Participantes"
            description="Designe a las personas que completerán la subtarea."
          >
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
          label={method === 'PUT' ? 'Actualizar' : 'Registrar'}
          link={{
            href: {
              pathname,
            },
          }}
        />
      </form>
    </>
  )
}
