import prisma from '@/prisma/client'
import { type Metadata, type GetServerSidePropsContext } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import ProjectForm from '@/components/projects/ProjectForm'
import SelectableFields from '@/lib/handlers/selectableFields'
import { type SelectableField, type SelectablePerson } from '@/lib/types'
import collect from '@/lib/utils/collection'

export const metadata: Metadata = {
  title: 'Actualizar Proyecto',
}

export default async function UpdateProjectPage({ params }: GetServerSidePropsContext) {
  const activeUser = await auth.person()
  const id = params?.id as string

  if (id === null) redirect('/home/projects')

  // DRY 5
  const project = await prisma.project.findUnique({
    where: {
      id,
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

  const fields = await SelectableFields<SelectableField>({ model: 'Field', arr: project?.fields })
  const persons = await SelectableFields<SelectablePerson>({
    model: 'Person',
    arr: project?.memberships.map(member => {
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
