'use client'

import { schema } from '@/lib/validation/schemas/subtask'
import useSubmit from '@/lib/hooks/useSubmit'
import FormLayout from '../forms/FormLayout'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Textarea from '../forms/inputs/Textarea'
import FormButtons from '../forms/FormButtons'
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { type Subtask } from '@prisma/client'

interface Props {
  action: string
  method: HTTP_METHOD
  taskId: string
  projectId: string
  subtask?: Subtask
  cancelUrl: string
}

export default function SubtaskForm({ action, method, taskId, projectId, subtask, cancelUrl }: Props) {
  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit,
  } = useSubmit({
    schema,
    method,
    append: {
      taskId,
      projectId,
      subtaskId: subtask?.id,
    },
  })

  return (
    <FormLayout>
      {alert}
      {serverErrors}
      <form action={action} onSubmit={handleSubmit} method={method}>
        <FormSection title="Detalles" description="Describa la subtarea u objetivo para la tarea.">
          <Input
            name="title"
            label="Título"
            placeholder="Ej: Crear un registro en excel."
            value={subtask?.title}
            register={register}
            errors={errors}
          />
          <Textarea
            name="description"
            label="Descripción"
            placeholder="Ej: Crear un archivo en excel y compartirlo para todos los miembros del grupo."
            value={subtask?.description}
            register={register}
            errors={errors}
          />
        </FormSection>
        <FormButtons url={cancelUrl} />
      </form>
    </FormLayout>
  )
}
