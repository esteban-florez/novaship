import CreateProjectForm from '@/components/projects-create/CreateProjectForm'
import collect from '@/lib/utils/collection'
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

  const selectableFields = collect(fields).toSelectable()
  const selectablePersons = collect(persons).toSelectable()

  return (
    <div className="mx-auto px-20 py-10">
      <CreateProjectForm fields={selectableFields} persons={selectablePersons} />
    </div>
  )
}
