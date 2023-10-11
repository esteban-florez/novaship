'use client'

import { type SuggestedOffersWithRelationships, type OffersTab } from '@/lib/types'
import { useState } from 'react'
import OffersList from './OffersList'
import { type UserType } from '@prisma/client'
import Pagination from '../Pagination'
import PageTitle from '../PageTitle'
import Carousel from '../carousel/Carousel'
import Link from 'next/link'
import Button from '../Button'
import { BookmarkIcon, BriefcaseIcon, LightBulbIcon, ListBulletIcon, PlusIcon } from '@heroicons/react/24/outline'
import PageNav from '../PageNav'
import clsx from 'clsx'

interface Props {
  carouselOffers: SuggestedOffersWithRelationships
  generalOffers: SuggestedOffersWithRelationships
  suggestedOffers: SuggestedOffersWithRelationships
  appliedOffers: SuggestedOffersWithRelationships
  myOffers: SuggestedOffersWithRelationships
  userType: UserType
  pageNumber: number
  nextPage: boolean
  filter: string | string[]
}

// TODO -> arreglar la paginacion para varias pestañas, tabs o filtros
export default function PageContent({ carouselOffers, generalOffers, myOffers, suggestedOffers, appliedOffers, userType, pageNumber, nextPage, filter }: Props) {
  const [search, setSearch] = useState('')
  const OFFER_TABS = {
    all: generalOffers,
    personal: myOffers,
    suggested: suggestedOffers,
    applied: appliedOffers,
  }
  const OFFERS_TAB_TRANSLATION = {
    all: 'Todas',
    suggested: 'Ofertas sugeridas',
    personal: 'Mis ofertas',
    applied: 'Ofertas aplicadas',
  }

  const links = [{
    title: 'all',
    content: 'Todas',
    icon: <ListBulletIcon className="h-5 w-5" />,
    query: 'all',
    condition: true,
  }, {
    title: 'personal',
    content: 'Mis ofertas',
    icon: <BriefcaseIcon className="h-5 w-5" />,
    query: 'personal',
    condition: userType === 'COMPANY',
  }, {
    title: 'applied',
    content: 'Ofertas aplicadas',
    icon: <BookmarkIcon className="h-5 w-5" />,
    query: 'applied',
    condition: userType === 'PERSON',
  }, {
    title: 'suggested',
    content: 'Ofertas sugeridas',
    icon: <LightBulbIcon className="h-5 w-5" />,
    query: 'suggested',
    condition: userType === 'PERSON',
  }]

  return (
    <>
      <PageTitle
        title="Ofertas laborales"
        subtitle="Encuentra ofertas que se adapten a tus habilidades y experiencias."
      >
        {userType === 'COMPANY' &&
          <Link href="/home/offers/create">
            <Button
              color="PRIMARY"
            >
              <PlusIcon className="h-6 w-6" />
              Agregar
            </Button>
          </Link>}
      </PageTitle>
      <Carousel items={carouselOffers} />
      <PageNav dropdownLabel={`Categorías - ${OFFERS_TAB_TRANSLATION[filter as OffersTab]}`} search={search} onSearch={setSearch}>
        {links.map((link) => {
          if (link.condition) {
            return (
              <Link
                key={link.title}
                href={{
                  pathname: '/home/offers',
                  query: { filter: link.query },
                }}
                className={clsx('btn', link.title === filter ? 'btn-primary hover:btn-ghost' : 'hover:btn-primary')}
              >
                {link.icon}
                {link.content}
              </Link>
            )
          }

          return null
        })}
      </PageNav>
      <OffersList
        offers={OFFER_TABS[filter as OffersTab]}
        search={search}
      />
      {filter === 'all' &&
        <Pagination
          url="/home/offers"
          pageNumber={pageNumber}
          nextPage={nextPage}
        />}
    </>
  )
}
