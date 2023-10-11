'use client'

import { schema } from '@/lib/validation/schemas/subtask'
import useSubmit from '@/lib/hooks/useSubmit'
import FormLayout from '../forms/FormLayout'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Textarea from '../forms/inputs/Textarea'
import FormButtons from '../forms/FormButtons'
import { TaskStatus, type Subtask } from '@prisma/client'
import Select from '../forms/inputs/Select'
import { taskStatuses } from '@/lib/translations'

interface Props extends FormProps {
  taskId: string
  projectId: string
  subtask?: Subtask
}

export default function SubtaskForm({ action, method, taskId, projectId, subtask }: Props) {
  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit,
  } = useSubmit({
    schema,
    method,
    append: {
      taskId,
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
          {method === 'PUT' &&
            <Select
              name="status"
              label='Estado'
              defaultValue={subtask?.status}
              register={register}
              errors={errors}
              options={{
                type: 'enum',
                data: TaskStatus,
                translation: taskStatuses
              }}
            />
          }
        </FormSection>
        <FormButtons label={method === 'PUT' ? 'Actualizar' : 'Registrar'} />
      </form>
    </FormLayout>
  )
}
