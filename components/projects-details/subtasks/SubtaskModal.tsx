'use client'

import { schema } from '@/lib/validation/schemas/subtask'
import Modal from '@/components/modal/Modal'
import useSubmit from '@/lib/hooks/useSubmit'
import {
  type Membership,
  type Person,
  type Subparticipation,
  type Subtask,
  TaskStatus,
} from '@prisma/client'
import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import CloseModalButton from '@/components/modal/CloseModalButton'
import { useId } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Select from '@/components/forms/inputs/Select'
import { taskStatuses } from '@/lib/translations'
import clsx from 'clsx'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'

interface Props extends FormProps {
  taskId: string
  subtask?: Subtask & {
    subparticipations: Subparticipation[]
  }
  buttonLabel?: string
  icon?: React.ReactElement
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

export default function SubtaskModal({
  action,
  method,
  taskId,
  subtask,
  buttonLabel,
  icon,
  memberships,
  person,
}: Props) {
  const id = useId()
  const selectedMembers = subtask?.subparticipations.map(
    (subparticipation) => subparticipation.personId
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
      taskId,
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
        className={clsx(
          'btn btn-block sm:btn-md btn-primary join-item hover:border-primary hover:bg-white hover:text-neutral-600'
        )}
      >
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
          {memberships != null && (
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
