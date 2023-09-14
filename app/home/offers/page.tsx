import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/offers/PageContent'
import collect from '@/lib/utils/collection'

export const metadata: Metadata = {
  title: 'Ofertas',
}

export default async function OffersPage({ searchParams }: SearchParamsProps) {
  const activeUser = await auth.user()

  // DRY Pagination
  const pageNumber = +(searchParams.page ?? 1)
  const pageSize = 20
  // Ignores outdated offers
  // No muestra mis ofertas (empresa)
  const totalRecords = await prisma.offer.count({
    where: {
      OR: [
        { companyId: activeUser.id },
        { expiresAt: { gte: new Date() } },
      ],
    },
  })
  const totalPages = Math.ceil(totalRecords / pageSize)
  const hasNextPage = pageNumber <= totalPages

  const user = await prisma.person.findFirst({
    where: { id: activeUser.id },
    include: {
      categories: true,
      jobs: true,
      skills: true,
    },
  })

  const offers = await prisma.offer.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
    include: {
      categories: {
        select: {
          id: true,
          title: true,
        },
      },
      job: {
        select: {
          id: true,
          title: true,
        },
      },
      skills: {
        select: {
          id: true,
          title: true,
        },
      },
      company: {
        select: {
          id: true,
          name: true,
        },
      },
      location: {
        select: {
          title: true,
        },
      },
      hiring: {
        select: {
          personId: true,
        },
      },
    },
  })

  const userCategories = collect(user?.categories ?? []).titles()
  const userJobs = collect(user?.jobs ?? []).titles()
  const userSkills = collect(user?.skills ?? []).titles()

  const suggestedOffers = offers.filter(itemQuery => {
    if (
      (itemQuery.categories.some(category => userCategories.includes(category.title))) ||
      (userJobs.includes(itemQuery.job.title)) ||
      (itemQuery.skills.some(skill => userSkills.includes(skill.title)))
    ) {
      return itemQuery
    }

    return null
  })

  const allOffers = offers.filter(offer => offer.companyId !== activeUser.id)
  const myOffers = offers.filter(offer => offer.companyId === activeUser.id)
  const appliedOffers = offers.filter(offer => {
    return offer.hiring.some(hiring => hiring.personId === activeUser.id)
  })
  const carouselOffers = allOffers.splice(0, 5)
  const userType = activeUser.type

  return (
    <PageContent
      generalOffers={allOffers}
      carouselOffers={carouselOffers}
      suggestedOffers={suggestedOffers}
      appliedOffers={appliedOffers}
      myOffers={myOffers}
      userType={userType}
      pageNumber={pageNumber}
      hasNextPage={hasNextPage}
    />
  )
}
