import Tasks from '@/components/projects-details/tasks/Tasks'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Tareas',
}

// TODO -> alert pending
export default async function TasksPage({ params: { id } }: PageContext) {
  if (id === null) {
    redirect('/home/projects')
  }

  const project = await prisma.project.findFirst({
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
      tasks: {
        include: {
          subtasks: true,
          participations: true,
        },
      },
    },
  })

  if (project === null) redirect('/home/projects')

  return (
    <div className="my-4 grid grid-cols-10 gap-4 px-6">
      <div className="col-span-10 lg:col-span-7">
        {/* <ProjectDetails project={} /> */}
        {/* <Filter /> */}
        <Tasks projectId={id} tasks={project.tasks} />
      </div>
      <div className="hidden gap-4 lg:col-span-3 lg:flex lg:flex-col">
        <div className="flex h-72 flex-col gap-2 rounded-lg bg-neutral-300 p-5" />
        {/* <TeamGroup /> */}
      </div>
    </div>
  )
}
