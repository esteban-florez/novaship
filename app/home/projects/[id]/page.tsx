import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import { getProject } from '@/lib/data-fetching/project'
import { getProjectLeader } from '@/lib/utils/tables'
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
  const user = await prisma.person.findFirst({ where: { id: userId} })

  if (id === null || user == null) {
    notFound()
  }

  const project = await getProject({ id })
  if (project === null) {
    notFound()
  }

  project.tasks

  // TODO -> funciones getleader e isMember
  const projectCategories = project.categories.map(category => category.title)
  const isOwner = getProjectLeader(project).id === userId
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
          <div className={clsx("col-span-7", project.personId !== userId && "lg:col-span-5")}>
            <div className="card rounded-lg bg-white p-5 shadow-lg">
              <div className="mb-4 flex-col">
                <Link href={`/home/projects/${id}/tasks/create`} className="btn btn-block sm:w-auto btn-primary hover:bg-white hover:border-primary hover:text-neutral-600">
                  <PlusIcon className="w-5 h-5" />
                  Nueva tarea
                </Link>
              </div>
              <Tasks projectId={project.id} tasks={project.tasks} />
            </div>
          </div>
        }
        {project.personId !== userId &&
          <div className="col-span-7 lg:col-span-2 lg:col-start-6">
            <TeamGroup
              person={user}
              team={project.team}
            />
          </div>
        }
      </div>
    </section>
  )
}
