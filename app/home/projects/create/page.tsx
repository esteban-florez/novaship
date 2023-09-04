import ProjectForm from '@/components/projects/ProjectForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default async function CreateProjectPage() {
  const activeUser = await auth.user()

  const fields = await prisma.field.findMany({
    where: {
      deletedAt: null,
    },
  })
  const persons = await prisma.person.findMany({
    where: {
      id: {
        not: activeUser.id,
      },
      deletedAt: null,
    },
  })

  return (
    <ProjectForm
      action="/api/projects"
      method="POST"
      fields={fields}
      persons={persons}
      cancelRedirect="/home/projects"
    />
  )
}
