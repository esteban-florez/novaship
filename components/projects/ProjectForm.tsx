'use client'

import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { schema } from '@/lib/validation/schemas/project'
import useSubmit from '@/lib/hooks/useSubmit'
import { type UserType } from '@prisma/client'
// import { visibilities } from '@/lib/translations'
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
      <FormLayout title="Información de proyecto" require>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action={action}
        >
          {serverErrors}
          {alert}
          <section className="flex flex-col w-full gap-x-3 p-4">
            <FormSection
              title="Detalles"
              description="Asigne un título, descripción y categorias que expliquen de que trata el proyecto para tener una mejor idea del mismo."
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
              <Textarea
                name="description"
                label="Descripción"
                placeholder="Ej: Página web de carácter administrativo para la empresa..."
                value={project?.description}
                register={register}
                errors={errors}
                maxlength={255}
              />
            </FormSection>
            <FormSection
              title="Equipos de trabajo"
              description="Seleccione como desea trabajar en este proyecto."
            >
              {!(userType === 'COMPANY' || initialTeamwork === 'group') && (
                <div className="mt-4 flex w-full flex-col justify-between gap-3 sm:flex-row">
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
          </section>
          <FormButtons
            label={method === 'PUT' ? 'Actualizar' : 'Registrar'}
            disableSubmit={teamwork === null}
          />
        </form>
      </FormLayout>
    </>
  )
}
