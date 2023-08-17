import ProjectForm from '@/components/projects/ProjectForm'
import addSelectedProp from '@/lib/selectable'
import { type FieldOption, type FieldSelectable, type PersonOption, type PersonSelectable } from '@/lib/types'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default async function CreateProjectPage() {
  const fields = await prisma.field.findMany({
    select: {
      id: true,
      title: true,
    },
    orderBy: {
      title: 'asc',
    },
  })

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

  const selectableFields = addSelectedProp<FieldOption>(fields) as FieldSelectable[]
  const selectablePersons = addSelectedProp<PersonOption>(persons) as PersonSelectable[]

  return (
    <ProjectForm
      action="/api/projects"
      method="POST"
      fields={selectableFields}
      persons={selectablePersons}
    />
  )
}
