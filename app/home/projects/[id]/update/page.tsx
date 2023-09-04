import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import ProjectForm from '@/components/projects/ProjectForm'

export const metadata: Metadata = {
  title: 'Actualizar Proyecto',
}

interface Context {
  params: {
    id: string
  }
}

export default async function UpdateProjectPage({ params: { id } }: Context) {
  const activeUser = await auth.user()

  if (id === null) redirect('/home/projects')

  // DRY 5
  const project = await prisma.project.findFirst({
    where: { id },
    include: {
      fields: {
        select: {
          id: true,
          title: true,
        },
      },
      person: true,
      company: true,
      memberships: {
        select: {
          id: true,
          person: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },
    },
  })

  if (project === null) redirect('/home/projects')
  if (((project.personId ?? project.companyId) !== activeUser.id)) redirect('/home/projects')

  const fields = await prisma.field.findMany({
    orderBy: {
      title: 'asc',
    },
  })

  const memberships = await prisma.person.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return (
    <ProjectForm
      method="PUT"
      action={`/api/projects/${id}`}
      fields={fields}
      persons={memberships}
      project={project}
      cancelRedirect={`/home/projects/${id}`}
    />
  )
}
