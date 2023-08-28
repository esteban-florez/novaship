import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import TaskForm from '@/components/tasks/TaskForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'

export const metadata: Metadata = {
  title: 'Registrar tarea',
}

interface Context {
  params: { id: string }
}

export default async function CrateTaskPage({ params: { id } }: Context) {
  const activeUser = await auth.person()

  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      memberships: {
        include: {
          person: true,
        },
      },
    },
  })

  // Todo -> add redirect alert.
  if (project === null || project?.personId !== activeUser.id) redirect('/home/projects')

  const members = project.memberships.map(member => {
    return {
      id: member.id,
      name: member.person.name,
    }
  })

  return <TaskForm action="/api/tasks" projectId={id} memberships={members} />
}
