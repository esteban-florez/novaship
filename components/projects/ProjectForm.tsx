'use client'

import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { schema } from '@/lib/validation/schemas/project'
import useSubmit from '@/lib/hooks/useSubmit'
import { Visibility, type Category, type Team } from '@prisma/client'
import { visibilities } from '@/lib/translations'
import FormLayout from '../forms/FormLayout'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import { type ProjectWithTeamAndCategories } from '@/lib/types'

// DRY 5
interface Props {
  cancelRedirect: string
  method: 'POST' | 'PUT'
  action: string
  categories: Category[]
  teams: Team[]
  project?: ProjectWithTeamAndCategories
}

// TODO -> encontrar una manera de obtener teamwork al actualizar
export default function ProjectForm({ cancelRedirect, method, action, categories, teams, project }: Props) {
  const projectCategories = project?.categories.map(category => {
    return category.id
  })

  const {
    handleSubmit, alert, serverErrors,
    register, formState: { errors }, control,
  } = useSubmit({
    schema,
    method,
  })

  return (
    <FormLayout>
      <form onSubmit={handleSubmit} method="POST" action={action}>
        {serverErrors}
        {alert}
        <FormSection title="Información del proyecto" description="Asigne un título que explique de que trata el proyecto, así como una descripción del mismo para tener una mejor idea y por último si es público o privado.">
          <Input
            name="title"
            label="Título"
            placeholder="Ej: Página web administrativa"
            value={project?.title}
            register={register}
            errors={errors}
          />
          <Textarea
            name="description"
            label="Descripción"
            placeholder="Ej: Página web de carácter administrativo para la empresa..."
            value={project?.description}
            register={register}
            errors={errors}
          />
          <Select
            name="visibility"
            defaultValue={project?.visibility ?? undefined}
            register={register}
            errors={errors}
            label="Selecciona la privacidad"
            options={{ type: 'enum', data: Visibility, translation: visibilities }}
          />
        </FormSection>
        <FormSection title="Campos requeridos" description="Elige los campos necesarios para ser parte del proyecto.">
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
        <FormSection title="Equipos de trabajo" description="Seleccione como desea trabajar en este proyecto.">
          <Input
            name="teamwork"
            placeholder=""
            type="radio"
            label="Individual"
            value="Solo"
            register={register}
            errors={errors}
          />
          <Input
            name="teamwork"
            placeholder=""
            type="radio"
            label="En equipo"
            className="peer"
            value="Team"
            register={register}
            errors={errors}
          />
          <Select
            name="teamId"
            label="Equipos"
            labelClassName="hidden peer-checked:block"
            register={register}
            errors={errors}
            className="hidden peer-checked:block"
            defaultValue={project?.teamId ?? undefined}
            options={{
              type: 'rows',
              data: teams,
            }}
          />
        </FormSection>
        <FormButtons url={cancelRedirect} />
      </form>
    </FormLayout>
  )
}
