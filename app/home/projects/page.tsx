import { type Metadata } from 'next'
import PageContent from '@/components/projects/PageContent'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'

export const metadata: Metadata = {
  title: 'Proyectos',
}

// TODO -> no parece funcionar para hacer un re-fetch.
export const fetchCache = 'force-no-store'

export const revalidate = 0

// TODO -> Añadir pagination
// TODO -> Mantener la pestaña escogida al regresar a /projects
export default async function ProjectsPage() {
  const activeUser = await auth.user()

  const projects = await prisma.project.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      person: true,
      company: true,
      memberships: {
        include: {
          person: true,
        },
      },
    },
    orderBy: {
      title: 'asc',
    },
  })

  const availableProjects = projects.filter(project => {
    return project.personId !== activeUser.id || project.companyId !== activeUser.id
  })

  const personalProjects = projects.filter(project => {
    return project.personId === activeUser.id || project.companyId === activeUser.id
  })

  return <PageContent projects={availableProjects} personalProjects={personalProjects} />
}
