import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/offers/PageContent'
import { getOffers } from '@/lib/data-fetching/offer'
import getPaginationProps from '@/lib/utils/pagination'
import { getPersonRelatedIds } from '@/lib/data-fetching/user'

export const metadata: Metadata = {
  title: 'Ofertas',
}

// TODO -> dividir las categorias y asignar una paginacion individual.
export default async function OffersPage({ searchParams }: SearchParamsProps) {
  const { id, type } = await auth.user()

  // DRY Pagination
  const pageNumber = +(searchParams.page ?? 1)
  const totalRecords = await prisma.offer.count({
    // where: { expiresAt: { gte: new Date() } },
  })
  const { nextPage, skip, take } = getPaginationProps({ pageNumber, totalRecords })

  const { jobs, categories, skills } = await getPersonRelatedIds({ id })
  const offers = await getOffers({
    where: {
      AND: [
        { companyId: { not: id } },
        // { expiresAt: { gte: new Date() } }
      ],
    },
    skip: pageNumber === 1 ? 5 : skip,
    take,
  })
  const carouselOffers = await getOffers({ where: { companyId: { not: id } }, skip: 0, take: 5 })
  const myOffers = await getOffers({ where: { companyId: id }, skip, take })
  const appliedOffers = await getOffers({
    where: {
      hiring: { some: { personId: id } },
    },
    skip,
    take,
  })
  const suggestedOffers = await getOffers({
    where: {
      OR: [
        {
          categories: {
            some: {
              id: { in: categories },
            },
          },
        },
        {
          jobId: {
            in: jobs,
          },
        },
        {
          skills: {
            some: {
              id: { in: skills },
            },
          },
        },
      ],
    },
    take,
    skip,
  })

  return (
    <PageContent
      generalOffers={offers}
      carouselOffers={carouselOffers}
      suggestedOffers={suggestedOffers}
      appliedOffers={appliedOffers}
      myOffers={myOffers}
      userType={type}
      pageNumber={pageNumber}
      nextPage={nextPage}
    />
  )
}
