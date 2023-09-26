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

// TODO -> alert pending
export default async function CreateTaskPage({ params: { id } }: Context) {
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

  // TODO -> add redirect alert.
  // DRY project validation
  if (project === null) {
    redirect('/home/projects')
  }

  const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)

  if (!isOwner) {
    redirect(`/home/projects/${id}`)
  }

  return <TaskForm action="/api/tasks" method="POST" projectId={id} team={project.team} />
}
