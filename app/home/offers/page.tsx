import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/offers/PageContent'
import collect from '@/lib/utils/collection'

export const metadata: Metadata = {
  title: 'Ofertas',
}

export default async function OffersPage() {
  const activeUser = await auth.user()

  const user = await prisma.person.findFirst({
    where: { id: activeUser.id },
    include: {
      categories: true,
      jobs: true,
      skills: true,
    },
  })

  const offers = await prisma.offer.findMany({
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
  const carouselOffers = allOffers.splice(0, 5)
  const userType = activeUser.type

  return (
    <PageContent
      generalOffers={allOffers}
      carouselOffers={carouselOffers}
      suggestedOffers={suggestedOffers}
      myOffers={myOffers}
      userType={userType}
    />
  )
}
