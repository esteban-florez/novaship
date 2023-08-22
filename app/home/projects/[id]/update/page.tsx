import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import ProjectForm from '@/components/projects/ProjectForm'
import selectable from '@/lib/data-fetching/selectable'
import { type SelectableField, type SelectablePerson } from '@/lib/types'
import collect from '@/lib/utils/collection'

export const metadata: Metadata = {
  title: 'Actualizar Proyecto',
}

interface Context {
  params: {
    id: string
  }
}

export default async function UpdateProjectPage({ params: { id } }: Context) {
  const activeUser = await auth.person()

  if (id === null) redirect('/home/projects')

  // DRY 5
  const project = await prisma.project.findFirst({
    where: {
      id,
      deletedAt: null,
    },
    include: {
      fields: {
        select: {
          id: true,
          title: true,
        },
      },
      person: {
        select: {
          id: true,
        },
      },
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
  if (project.personId !== activeUser.id) redirect('/home/projects')

  const fields = await selectable<SelectableField>({ model: 'field', excluded: project?.fields })
  const persons = await selectable<SelectablePerson>({
    model: 'person',
    excluded: project?.memberships.map(member => {
      return member.person
    }),
  })

  const personsWithoutOwner = persons.filter(person => person.id !== activeUser.id)

  const projectFields = collect(project.fields).toSelectable(true)
  const projectPersons = collect(project.memberships.map(member => {
    return member.person
  })).toSelectable(true)

  const totalFields = [...fields, ...projectFields]
  const totalPersons = [...personsWithoutOwner, ...projectPersons]

  return (
    <ProjectForm
      id={id}
      method="PUT"
      action={`/api/projects/${id}`}
      fields={totalFields}
      persons={totalPersons}
      project={project}
    />
  )
}
