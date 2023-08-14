import Archive from '@/components/projects-details/Archive'
import ProjectDetails from '@/components/projects-details/ProjectDetails'
import Filter from '@/components/projects-details/Filter'
import TeamGroup from '@/components/projects-details/TeamGroup'
import { type Metadata, type GetServerSidePropsContext } from 'next'
import prisma from '@/prisma/client'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'

export const metadata: Metadata = {
  title: 'Detalles de Proyecto',
}

export default async function ProjectPage({ params }: GetServerSidePropsContext) {
  const activeUser = await auth.person()
  const id = params?.id as string

  if (id === null) {
    redirect('/home/projects')
  }

  const project = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      person: true,
      memberships: {
        include: {
          person: true,
        },
      },
    },
  })

  if (project === null) {
    redirect('/home/projects')
  }

  // DRY
  const persons = await prisma.person.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    orderBy: {
      name: 'asc',
    },
  })

  // DRY
  const selectablePersons = persons.map(person => {
    return {
      ...person,
      selected: false,
    }
  })

  return (
    <div className="my-4 grid grid-cols-10 gap-4 px-6">
      <div className="col-span-10 lg:col-span-7">
        <ProjectDetails project={project} />
        <Filter projectId={project.id} />
        <Archive />
      </div>
      <div className="hidden gap-4 lg:col-span-3 lg:flex lg:flex-col">
        <div className="flex h-72 flex-col gap-2 rounded-lg bg-neutral-300 p-5" />
        <TeamGroup id={project.id} memberships={project.memberships} isOwner={activeUser.id === project.personId} persons={selectablePersons} />
      </div>
    </div>
  )
}
