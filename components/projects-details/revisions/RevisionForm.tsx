'use client'

import PageTitle from '@/components/PageTitle'
import FormButtons from '@/components/forms/FormButtons'
import FormLayout from '@/components/forms/FormLayout'
import FormSection from '@/components/forms/FormSection'
import Textarea from '@/components/forms/inputs/Textarea'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/revision'
import { type Revision } from '@prisma/client'

interface Props extends FormProps {
  revision?: Revision
  taskId?: string
  subtaskId?: string
}

export default function RevisionForm({ method, action, revision, taskId, subtaskId }: Props) {
  const {
    handleSubmit, alert, serverErrors,
    register, formState: { errors },
  } = useSubmit({
    schema,
    method,
    append: {
      taskId,
      subtaskId,
    },
  })

  return (
    <>
      <PageTitle
        title="Registrar nueva revisión"
        subtitle="Indique como se llevó a cabo la tarea o subtarea."
      />
      <FormLayout>
        <form onSubmit={handleSubmit} method="POST" action={action}>
          {serverErrors}
          {alert}
          <FormSection title="Mensaje de revisión" description="Detalle el resultado de la revisión de la tarea.">
            <Textarea
              name="content"
              label="Descripción"
              placeholder="Ej: La tarea no cumplió correctamente los objetivos planteados."
              value={revision?.content}
              register={register}
              errors={errors}
              maxlength={255}
            />
          </FormSection>
          <FormButtons label={method === 'PUT' ? 'Actualizar' : 'Registrar'} />
        </form>
      </FormLayout>
    </>
  )
}
