'use client'

import FormButtons from '@/components/forms/FormButtons'
import FormSection from '@/components/forms/FormSection'
import Textarea from '@/components/forms/inputs/Textarea'
import useSubmit from '@/lib/hooks/useSubmit'
import { tooltip } from '@/lib/tooltip'
import { type RevisionComponentProps } from '@/lib/types'
import { schema } from '@/lib/validation/schemas/revision'
import { usePathname } from 'next/navigation'

interface Props extends FormProps {
  revision?: RevisionComponentProps
  taskId?: string
  subtaskId?: string
  filter: string
}

export default function RevisionForm({
  method,
  action,
  revision,
  taskId,
  subtaskId,
  filter,
}: Props) {
  const pathname = usePathname()
  const query =
    filter !== ''
      ? { id: taskId, subtaskId, filtered: filter }
      : taskId != null
        ? { id: taskId }
        : null

  const {
    handleSubmit,
    alert,
    serverErrors,
    register,
    loading,
    formState: { errors },
  } = useSubmit({
    schema,
    method,
    append: {
      taskId,
      subtaskId,
      filter,
    },
  })

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      action={action}
    >
      {serverErrors}
      {alert}
      <FormSection
        title="Mensaje de revisión"
        description={tooltip.revision_form_data}
      >
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
      <FormButtons
        disableSubmit={loading}
        link={{
          href: {
            pathname,
            query,
          },
        }}
        method={method}
      />
    </form>
  )
}
