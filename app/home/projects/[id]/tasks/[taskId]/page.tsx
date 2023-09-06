import SubtaskItem from '@/components/projects/SubtaskItem'
import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import FormLayout from '@/components/forms/FormLayout'
import { redirect } from 'next/navigation'
import Button from '@/components/Button'
import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Detalles de Tarea',
}

interface Context {
  params: { id: string, taskId: string }
}

export default async function TaskPage({ params: { id, taskId } }: Context) {
  const project = await prisma.project.findFirst({
    where: { id },
  })

  if (project === null) redirect('/home/projects')

  const task = await prisma.task.findFirst({
    where: {
      id: taskId,
    },
    include: {
      subtasks: true,
    },
  })

  if (task === null) redirect(`/home/projects/${project.id}`)

  return (
    <FormLayout>
      <h2 className="border-b px-4 py-2 text-xl font-semibold">{task.title}</h2>
      <p className="mb-2 px-4 py-2 text-neutral-600">{task.description}</p>
      <div className="flex flex-col gap-2 px-4">
        {task.subtasks.map(subtask => {
          return (
            <SubtaskItem
              key={subtask.id}
              subtask={subtask}
              editAction={`/home/projects/${project.id}/tasks/${task.id}/subtasks/${subtask.id}/update`}
              deleteAction={`/api/subtasks/${subtask.id}`}
            />
          )
        })}
      </div>
      <div className="mt-2 flex justify-end gap-x-2 text-sm">
        <Button
          url={`/home/projects/${project.id}`}
          style="OUTLINE"
          color="EMPTY"
          hover="SECONDARY"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Proyecto
        </Button>
        <Button
          url={`/home/projects/${project.id}/tasks/${taskId}/subtasks/create`}
          style="DEFAULT"
          color="PRIMARY"
        >
          <PlusIcon className="h-5 w-5" />
          Subtarea
        </Button>
      </div>
    </FormLayout>
  )
}
