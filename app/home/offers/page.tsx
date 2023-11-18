import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/offers/PageContent'
import { getOffers } from '@/lib/data-fetching/offer'
import getPaginationProps from '@/lib/utils/pagination'
import { getPersonRelatedIds } from '@/lib/data-fetching/user'
import { type Prisma } from '@prisma/client'
import Pagination from '@/components/Pagination'
import PageTitle from '@/components/PageTitle'
import Link from 'next/link'
import {
  BookmarkIcon,
  BriefcaseIcon,
  LightBulbIcon,
  ListBulletIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import Carousel from '@/components/carousel/Carousel'
import clsx from 'clsx'
import { type OffersFull, type OffersTab } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Ofertas',
}

interface FilterQueries {
  all: Prisma.OfferWhereInput
  applied: Prisma.OfferWhereInput
  personal: Prisma.OfferWhereInput
  suggested: Prisma.OfferWhereInput
}

export default async function OffersPage({ searchParams }: SearchParamsProps) {
  const { id, type } = await auth.user()
  const { jobs, categories, skills } = await getPersonRelatedIds({ id })

  // DRY Pagination
  const filter =
    type === 'COMPANY' ? 'personal' : searchParams.filter ?? 'suggested'
  const pageNumber = +(searchParams.page ?? 1)
  const FILTER_QUERIES: FilterQueries = {
    suggested: {
      expiresAt: {
        gt: new Date(),
      },
      limit: {
        gt: 0,
      },
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
    personal: { companyId: id },
    applied: { hiring: { some: { personId: id } } },
    all: {
      AND: [{ companyId: { not: id } }, { expiresAt: { gte: new Date() } }],
    },
  }
  const totalRecords = await prisma.offer.count({
    where: FILTER_QUERIES[filter as keyof FilterQueries],
  })
  const { nextPage, skip, take } = getPaginationProps({
    pageNumber,
    totalRecords,
  })

  let offers: OffersFull[] = []
  const carouselOffers = await getOffers({
    where: { companyId: { not: id } },
    skip: 0,
    take: 5,
  })

  if (filter === 'suggested') {
    offers = await getOffers({ where: FILTER_QUERIES.suggested, take, skip })
  }

  if (filter === 'personal') {
    offers = await getOffers({ where: FILTER_QUERIES.personal, take, skip })
  }

  if (filter === 'applied') {
    offers = await getOffers({
      where: FILTER_QUERIES.applied,
      skip,
      take,
    })
  }

  if (filter === 'all') {
    offers = await getOffers({ where: FILTER_QUERIES.all, skip, take })
  }

  const OFFERS_TAB_TRANSLATION = {
    all: 'Todas',
    suggested: 'Ofertas sugeridas',
    personal: 'Mis ofertas',
    applied: 'Ofertas aplicadas',
  }

  const links = [
    {
      title: 'all',
      content: 'Todas',
      icon: <ListBulletIcon className="h-5 w-5" />,
      query: 'all',
      condition: true,
    },
    {
      title: 'personal',
      content: 'Mis ofertas',
      icon: <BriefcaseIcon className="h-5 w-5" />,
      query: 'personal',
      condition: type === 'COMPANY',
    },
    {
      title: 'applied',
      content: 'Ofertas aplicadas',
      icon: <BookmarkIcon className="h-5 w-5" />,
      query: 'applied',
      condition: type === 'PERSON',
    },
    {
      title: 'suggested',
      content: 'Ofertas sugeridas',
      icon: <LightBulbIcon className="h-5 w-5" />,
      query: 'suggested',
      condition: type === 'PERSON',
    },
  ]

  return (
    <>
      <PageTitle
        title="Ofertas laborales"
        subtitle="Encuentra ofertas que se adapten a tus habilidades y experiencias."
      >
        {type === 'COMPANY' && (
          <Link href="/home/offers/create">
            <button className="btn-primary btn hover:border-primary hover:bg-white hover:text-neutral-600">
              <PlusIcon className="h-6 w-6" />
              Agregar
            </button>
          </Link>
        )}
      </PageTitle>
      <Carousel items={carouselOffers} />
      <PageContent
        dropdownLabel={`Categorías - ${
          OFFERS_TAB_TRANSLATION[filter as OffersTab]
        }`}
        offers={offers}
      >
        {links.map((link) => {
          if (link.condition) {
            return (
              <Link
                key={link.title}
                href={{
                  pathname: '/home/offers',
                  query: { filter: link.query },
                }}
                className={clsx(
                  'btn',
                  link.title === filter
                    ? 'btn-primary hover:btn-ghost'
                    : 'hover:btn-primary'
                )}
              >
                {link.icon}
                {link.content}
              </Link>
            )
          }

          return null
        })}
      </PageContent>
      <Pagination
        nextPage={nextPage}
      />
    </>
  )
}
