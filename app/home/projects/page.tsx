import { type Metadata } from 'next'
import PageContent from '@/components/projects/PageContent'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import getPaginationProps from '@/lib/utils/pagination'
import { getProjects } from '@/lib/data-fetching/project'
import { getPersonRelatedIds } from '@/lib/data-fetching/user'

export const metadata: Metadata = {
  title: 'Proyectos',
}

// TODO -> Mantener la pestaña escogida al regresar a /projects
export default async function ProjectsPage({ searchParams }: SearchParamsProps) {
  const { id } = await auth.user()

  // DRY Pagination
  // TODO -> arreglar el filtro por defecto
  const filter = searchParams.filter ?? 'suggested'
  const pageNumber = +(searchParams.page ?? 1)
  const totalRecords = await prisma.project.count({
    where: { visibility: 'PUBLIC' },
  })
  const { nextPage, skip, take } = getPaginationProps({ pageNumber, totalRecords })
  const { categories } = await getPersonRelatedIds({ id })

  const suggestedProjects = await getProjects({
    where: {
      categories: {
        every: {
          id: { in: categories },
        },
      },
    },
    take,
    skip,
  })

  const personalProjects = await getProjects({
    where: {
      OR: [
        { personId: id },
        {
          team: {
            leader: {
              OR: [
                { personId: id },
                { companyId: id },
              ],
            },
          },
        },
      ],
    },
    skip,
    take,
  })

  const availableProjects = await getProjects({
    where: {
      visibility: 'PUBLIC',
      team: {
        leader: {
          OR: [
            { personId: { not: id } },
            { companyId: { not: id } },
          ],
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
      suggestedProjects={suggestedProjects}
      pageNumber={pageNumber}
      nextPage={nextPage}
      filter={filter}
    />
  )
}
