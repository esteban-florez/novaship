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

// TODO -> Mantener la pestaña escogida al regresar a /projects
export default async function ProjectsPage({ searchParams }: SearchParamsProps) {
  const activeUser = await auth.user()

  // DRY Pagination
  const pageNumber = +(searchParams.page ?? 1)
  const pageSize = 20
  const totalRecords = await prisma.project.count({
    where: { visibility: 'PUBLIC' },
  })
  const totalPages = Math.ceil(totalRecords / pageSize)
  const hasNextPage = pageNumber < totalPages

  const projects = await prisma.project.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
    include: {
      categories: {
        select: {
          id: true,
          title: true,
        },
      },
      team: {
        include: {
          memberships: {
            include: {
              person: {
                select: {
                  id: true,
                  name: true,
                },
              },
              company: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      title: 'asc',
    },
  })

  // TODO -> Estos algoritmos son: O(n^2), hay que mejorarlos.
  const availableProjects = projects.filter(project => {
    return project.team.memberships.filter(member => {
      return (member.companyId ?? member.personId) !== activeUser.id && project.visibility === 'PUBLIC'
    }).length > 0
  })

  const personalProjects = projects.filter(project => {
    return project.team.memberships.filter(member => {
      return (member.companyId ?? member.personId) === activeUser.id
    }).length > 0
  })

  return (
    <PageContent
      projects={availableProjects}
      personalProjects={personalProjects}
      pageNumber={pageNumber}
      hasNextPage={hasNextPage}
    />
  )
}
