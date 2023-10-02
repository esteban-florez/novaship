'use client'

import PageNav from '@/components/offers/PageNav'
import { type SuggestedOffersWithRelationships, type OffersTab } from '@/lib/types'
import { useState } from 'react'
import OffersList from './OffersList'
import { type UserType } from '@prisma/client'
import Pagination from '../Pagination'
import PageTitle from '../PageTitle'
import Carousel from '../carousel/Carousel'
import Link from 'next/link'
import Button from '../Button'
import { PlusIcon } from '@heroicons/react/24/outline'

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
  const OFFER_TABS = {
    all: generalOffers,
    personal: myOffers,
    suggested: suggestedOffers,
    applied: appliedOffers,
  }
  const [search, setSearch] = useState('')

  const handleSearch = (value: string) => {
    setSearch(value)
  }

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
      <PageNav
        filter={filter}
        search={search}
        onSearch={handleSearch}
        userType={userType}
      />
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
