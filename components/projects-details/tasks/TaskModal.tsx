'use client'

import { schema } from '@/lib/validation/schemas/task'
import Modal from '@/components/modal/Modal'
import useSubmit from '@/lib/hooks/useSubmit'
import { type Membership, type Participation, type Person, type Task } from '@prisma/client'
import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import CloseModalButton from '@/components/modal/CloseModalButton'
import React, { useId } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Select from '@/components/forms/inputs/Select'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'

interface Props extends FormProps {
  icon?: React.ReactElement
  buttonLabel?: string
  projectId: string
  task?: Task & {
    participations: Participation[]
  }
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

export default function TaskModal({
  action,
  method,
  projectId,
  person,
  task,
  memberships,
  buttonLabel,
  icon,
}: Props) {
  const id = useId()
  const taskLeader = task?.personId
  const selectedMembers = task?.participations.map(
    (participation) => participation.personId
  )
  const members =
    memberships?.map((member) => {
      return { id: member.person.id, name: member.person.name }
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
  } = useSubmit({
    schema,
    method,
    append: {
      projectId,
      taskId: task?.id,
    },
  })

  return (
    <>
      {serverErrors}
      {alert}
      <Modal
        id={id}
        icon={icon ?? <PlusIcon className="h-4 w-4" />}
        title={buttonLabel}
        className="btn btn-block sm:w-auto sm:btn-md btn-primary join-item hover:border-primary hover:bg-white hover:text-neutral-600"
      >
        <form
          method={method}
          action={action}
          onSubmit={handleSubmit}
        >
          <FormSection
            title={method === 'PUT' ? 'Actualizar tarea' : 'Nueva tarea'}
            description="Asigne una tarea y una descripción de la misma para avanzar en el proyecto."
            tooltipOrientation="tooltip-bottom"
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
          <div className="flex justify-between -mt-4 mb-4 px-4 gap-4">
            <CloseModalButton
              id={id}
              text="Cerrar"
            />
            <button className="btn btn-primary">
              <PlusIcon className="h-4 w-4" />
              {method === 'PUT' ? 'Actualizar' : 'Registrar'}
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
