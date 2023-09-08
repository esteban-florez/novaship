import TaskForm from '@/components/tasks/TaskForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar tarea',
}

interface Context {
  params: { id: string, taskId: string }
}

export default async function UpdateTaskPage({ params: { id, taskId } }: Context) {
  const activeUser = await auth.user()

  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      team: {
        include: {
          memberships: {
            include: {
              company: {
                select: {
                  id: true,
                  name: true,
                },
              },
              person: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  })

  if (project === null) redirect('/home/projects')

  const task = await prisma.task.findFirst({
    where: { id: taskId },
    include: {
      participations: true,
    },
  })

  if (task === null) redirect(`/home/projects/${id}`)

  // DRY project validation
  if (project === null) {
    redirect('/home/projects')
  }

  const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)

  if (!isOwner) {
    redirect(`/home/projects/${id}`)
  }

  return (
    <TaskForm
      action={`/api/tasks/${taskId}`}
      method="PUT"
      task={task}
      projectId={id}
      team={project.team}
    />
  )
}
