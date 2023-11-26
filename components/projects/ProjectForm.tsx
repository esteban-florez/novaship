'use client'

import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { schema } from '@/lib/validation/schemas/project'
import useSubmit from '@/lib/hooks/useSubmit'
import { Visibility, type UserType } from '@prisma/client'
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
import ImageInput from '../forms/inputs/ImageInput'
import { visibilities } from '@/lib/translations'

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
  const backUrl =
    method === 'POST' ? '/home/projects' : `/home/projects/${project?.id ?? ''}`
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
    loading,
  } = useSubmit({
    schema,
    method,
    asFormData: true,
  })

  return (
    <>
      <PageTitle
        title="Registrar nuevo proyecto"
        subtitle="Rellena los datos para crear un nuevo proyecto o actualizar uno existente."
        breadcrumbs={project?.title}
      />
      <FormLayout title="Información de proyecto">
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
              <Textarea
                name="description"
                label="Descripción"
                placeholder="Ej: Página web de carácter administrativo para la empresa..."
                value={project?.description}
                register={register}
                errors={errors}
                maxlength={255}
              />
              <SelectMultiple
                name="categories"
                label="Áreas de conocimiento"
                itemsName="Áreas de conocimiento"
                control={control}
                defaultValue={projectCategories}
                limit={5}
                menuOnTop
                options={{
                  type: 'rows',
                  data: categories,
                }}
              />
              <Select
                name="visibility"
                label="Visibilidad"
                register={register}
                errors={errors}
                defaultValue={project?.visibility ?? undefined}
                options={{
                  translation: visibilities,
                  data: Visibility,
                  type: 'enum',
                }}
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
            <FormSection
              title="Imagen del proyecto"
              description="Sube una foto que represente la esencia de tu proyecto"
            >
              <ImageInput
                name="image"
                register={register}
                errors={errors}
                label="Subir imagen de proyecto"
                rounded
              />
            </FormSection>
          </section>
          <FormButtons
            label={method === 'PUT' ? 'Actualizar' : 'Registrar'}
            url={backUrl}
            disableSubmit={teamwork === null || loading}
          />
        </form>
      </FormLayout>
    </>
  )
}
