import { type Metadata } from 'next'
import PageContent from '@/components/projects/PageContent'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'

export const metadata: Metadata = {
  title: 'Proyectos',
}

export const revalidate = 10

// TODO -> Añadir pagination
// TODO -> Mantener la pestaña escogida al regresar a /projects
export default async function ProjectsPage() {
  const activeUser = await auth.person()
  const projects = await prisma.project.findMany({
    // where: {
    //   person: {
    //     authUserId: activeUser.authUserId,
    //   },
    // },
    include: {
      person: true,
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

  const personalProjects = projects.filter(project => {
    return project.personId === activeUser.id
  })

  return (
    <div className="px-4">
      <PageContent projects={projects} personalProjects={personalProjects} />
    </div>
  )
}
