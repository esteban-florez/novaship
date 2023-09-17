import { type Metadata } from 'next'
import PageContent from '@/components/projects/PageContent'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import getPaginationProps from '@/lib/utils/pagination'
import { getProjects } from '@/lib/data-fetching/project'

export const metadata: Metadata = {
  title: 'Proyectos',
}

// TODO -> Mantener la pestaña escogida al regresar a /projects
export default async function ProjectsPage({ searchParams }: SearchParamsProps) {
  const { id } = await auth.user()

  // DRY Pagination
  const pageNumber = +(searchParams.page ?? 1)
  const totalRecords = await prisma.project.count({
    where: { visibility: 'PUBLIC' },
  })
  const { nextPage, skip, take } = getPaginationProps({ pageNumber, totalRecords })

  const personalProjects = await getProjects({
    where: {
      team: {
        memberships: {
          some: {
            OR: [
              { companyId: id },
              { personId: id },
            ],
          },
        },
      },
    },
    skip,
    take,
  })

  const availableProjects = await getProjects({
    where: {
      visibility: 'PUBLIC',
      team: {
        memberships: {
          some: {
            OR: [
              { companyId: { not: id } },
              { personId: { not: id } },
            ],
          },
        },
      },
    },
    skip,
    take,
  })

  return (
    <PageContent
      projects={availableProjects}
      personalProjects={personalProjects}
      pageNumber={pageNumber}
      nextPage={nextPage}
    />
  )
}
