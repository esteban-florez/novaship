'use client'

import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { schema } from '@/lib/validation/schemas/project'
import useSubmit from '@/lib/hooks/useSubmit'
import { Visibility, type Project, type Field, type Person } from '@prisma/client'
import { visibilities } from '@/lib/translations'
import FormLayout from '../forms/FormLayout'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'

// DRY 5
interface Props {
  cancelRedirect: string
  method: 'POST' | 'PUT'
  action: string
  fields: Field[]
  persons: Person[]
  project?: Project & {
    person: {
      id: string
    } | null
    fields: Array<{
      id: string
      title: string
    }>
    memberships: Array<{
      id: string
      person: {
        id: string
        name: string
        email: string
      }
    }>
  }
}

// TODO -> responsive
export default function ProjectForm({ cancelRedirect, method, action, fields, persons, project }: Props) {
  const projectFields = project?.fields.map(field => {
    return field.id
  })
  const projectMemberships = project?.memberships.map(member => {
    return member.person.id
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
            name="fields"
            label="Campos"
            itemsName="Campos"
            control={control}
            defaultValue={projectFields}
            limit={5}
            menuOnTop
            options={{
              type: 'rows',
              data: fields,
            }}
          />
        </FormSection>
        <FormSection title="Miembros del proyecto" description="Añada algunos colaboradores a su proyecto para llevarlo a cabo.">
          <SelectMultiple
            name="memberships"
            label="Miembros"
            itemsName="Miembros"
            control={control}
            defaultValue={projectMemberships}
            menuOnTop
            options={{
              type: 'rows',
              data: persons,
            }}
          />
        </FormSection>
        <FormButtons url={cancelRedirect} />
      </form>
    </FormLayout>
  )
}
