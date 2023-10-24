'use client'

import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { schema } from '@/lib/validation/schemas/project'
import useSubmit from '@/lib/hooks/useSubmit'
import { type UserType, Visibility } from '@prisma/client'
import { visibilities } from '@/lib/translations'
import FormLayout from '../forms/FormLayout'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import {
  type ProjectsFull,
  type OptionCategory,
  type OptionTeam,
} from '@/lib/types'
import PageTitle from '../PageTitle'
import SignupRadio from '../signup/SignupRadio'
import { useState } from 'react'
import { UserIcon, UserGroupIcon } from '@heroicons/react/24/outline'

interface Props extends FormProps {
  categories: OptionCategory[]
  teams: OptionTeam[]
  project?: ProjectsFull
  userType: UserType
}

export default function ProjectForm({
  method,
  action,
  categories,
  teams,
  project,
  userType,
}: Props) {
  const projectCategories = project?.categories.map((category) => category.id)
  let initialTeamwork = userType === 'COMPANY' ? 'group' : 'single'
  if (method === 'PUT') {
    initialTeamwork = project?.teamId === null ? 'single' : 'group'
  }
  const [teamwork, setTeamwork] = useState<string | null>(initialTeamwork)

  const {
    handleSubmit,
    alert,
    serverErrors,
    register,
    formState: { errors },
    control,
  } = useSubmit({
    schema,
    method,
  })

  return (
    <>
      <PageTitle
        title="Registrar nuevo proyecto"
        subtitle="Rellena los datos para crear un nuevo proyecto o actualizar uno existente."
        breadcrumbs={project?.title}
      />
      <FormLayout>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action={action}
        >
          {serverErrors}
          {alert}
          <FormSection
            title="Información del proyecto"
            description="Asigne un título que explique de que trata el proyecto, así como una descripción del mismo para tener una mejor idea y por último si es público o privado."
          >
            <Input
              name="title"
              label="Título"
              placeholder="Ej: Página web administrativa"
              value={project?.title}
              register={register}
              errors={errors}
              maxlength={40}
            />
            <Textarea
              name="description"
              label="Descripción"
              placeholder="Ej: Página web de carácter administrativo para la empresa..."
              value={project?.description}
              register={register}
              errors={errors}
              maxlength={255}
            />
            <Select
              name="visibility"
              defaultValue={project?.visibility ?? undefined}
              register={register}
              errors={errors}
              label="Selecciona la visibilidad"
              options={{
                type: 'enum',
                data: Visibility,
                translation: visibilities,
              }}
            />
          </FormSection>
          <FormSection
            title="Campos requeridos"
            description="Elige los campos necesarios para ser parte del proyecto."
          >
            <SelectMultiple
              name="categories"
              label="Campos"
              itemsName="Campos"
              control={control}
              defaultValue={projectCategories}
              limit={5}
              menuOnTop
              options={{
                type: 'rows',
                data: categories,
              }}
            />
          </FormSection>
          <FormSection
            title="Equipos de trabajo"
            description="Seleccione como desea trabajar en este proyecto."
          >
            {!(userType === 'COMPANY' || initialTeamwork === 'group') && (
              <div className="mt-4 flex w-full flex-col justify-between gap-2 sm:flex-row">
                <SignupRadio
                  name="teamwork"
                  value="group"
                  label="En equipo"
                  className="w-full"
                  icon={<UserGroupIcon className="h-10 w-10 text-white" />}
                  active={teamwork === 'group'}
                  onInput={() => {
                    setTeamwork('group')
                  }}
                />
                <SignupRadio
                  name="teamwork"
                  value="single"
                  label="Individual"
                  className="w-full"
                  icon={<UserIcon className="h-10 w-10 text-white" />}
                  active={teamwork === 'single'}
                  onInput={() => {
                    setTeamwork('single')
                  }}
                />
              </div>
            )}
            {teamwork === 'group' && (
              <>
                <Select
                  name="teamId"
                  label="Equipos"
                  register={register}
                  errors={errors}
                  defaultValue={project?.teamId ?? undefined}
                  options={{
                    type: 'rows',
                    data: teams,
                  }}
                />
                {method === 'PUT' && (
                  <small className="font-semibold text-neutral-600">
                    No puede cambiar el equipo una vez registrado.
                  </small>
                )}
              </>
            )}
          </FormSection>
          <FormButtons
            label={method === 'PUT' ? 'Actualizar' : 'Registrar'}
            disableSubmit={teamwork === null}
          />
        </form>
      </FormLayout>
    </>
  )
}
