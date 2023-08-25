import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import CreateTaskForm from '@/components/task-create/CreateTaskForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import Layout from '@/components/forms/Layout'

export const metadata: Metadata = {
  title: 'Tareas',
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

  return (
    <Layout>
      <CreateTaskForm projectId={id} memberships={project.memberships} />
    </Layout>
  )
}
