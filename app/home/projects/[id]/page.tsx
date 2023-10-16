import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import { getProject } from '@/lib/data-fetching/project'
import ProjectDetails from '@/components/projects-details/ProjectDetails'
import TeamGroup from '@/components/projects-details/TeamGroup'
import prisma from '@/prisma/client'
import Tasks from '@/components/projects-details/tasks/Tasks'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Detalles de proyecto',
}

export default async function ProjectPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()
  const user = await prisma.person.findFirst({ where: { id: userId } })

  if (id === null || user == null) {
    notFound()
  }

  const project = await getProject({ id })
  if (project === null) {
    notFound()
  }

  // TODO -> funciones getleader e isMember
  const projectCategories = project.categories.map(category => category.title)
  const isOwner = project.personId === userId ?? (project.team?.leader.personId ?? project.team?.leader.companyId === userId)
  const isMember = (project.team?.memberships.find(member => member.personId === userId)) != null

  return (
    <section className="px-6 py-4">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-7">
          <ProjectDetails
            id={project.id}
            isPrivate={project.visibility === 'PRIVATE'}
            isOwner={isOwner}
            isMember={isMember}
            title={project.title}
            categories={projectCategories}
            description={project.description}
          />
        </div>
        {(isOwner || isMember) &&
          <div className={clsx('col-span-7', project.personId !== userId && 'lg:col-span-5')}>
            <div className="card rounded-lg bg-white p-5 shadow-lg">
              <div className="mb-4 flex-col">
                <Link href={`/home/projects/${id}/tasks/create`} className="btn-primary btn-block btn hover:border-primary hover:bg-white hover:text-neutral-600 sm:w-auto">
                  <PlusIcon className="h-5 w-5" />
                  Nueva tarea
                </Link>
              </div>
              <Tasks projectId={project.id} tasks={project.tasks} />
            </div>
          </div>}
        {project.personId !== userId &&
          <div className="col-span-7 lg:col-span-2 lg:col-start-6">
            <TeamGroup
              person={user}
              team={project.team}
            />
          </div>}
      </div>
    </section>
  )
}
