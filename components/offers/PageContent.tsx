'use client'

import Carousel from '@/components/offers/Carousel'
import PageNav from '@/components/offers/PageNav'
import { type SuggestedOffersWithRelationships, type OffersTab } from '@/lib/types'
import { useState } from 'react'
import OffersList from './OffersList'
import { type UserType } from '@prisma/client'
import Pagination from '../Pagination'
import PageTitle from '../PageTitle'

interface Props {
  carouselOffers: SuggestedOffersWithRelationships
  generalOffers: SuggestedOffersWithRelationships
  suggestedOffers: SuggestedOffersWithRelationships
  appliedOffers: SuggestedOffersWithRelationships
  myOffers: SuggestedOffersWithRelationships
  userType: UserType
  pageNumber: number
  nextPage: boolean
}

// TODO -> arreglar la paginacion para varias pestañas, tabs o filtros
export default function PageContent({ carouselOffers, generalOffers, myOffers, suggestedOffers, appliedOffers, userType, pageNumber, nextPage }: Props) {
  const [tab, setTab] = useState<OffersTab>(userType === 'PERSON' ? 'Suggested' : 'All')
  const [search, setSearch] = useState('')

  const handleChangeTab = (tabOption?: OffersTab) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const OFFERS_OPTION = {
    All: generalOffers,
    Mine: myOffers,
    Applied: appliedOffers,
    Suggested: suggestedOffers,
  }

  return (
    <>
      <PageTitle
        title="Ofertas laborales"
        subtitle="Encuentra ofertas que se adapten a tus habilidades y experiencias."
      />
      <Carousel
        offers={carouselOffers}
      />
      <PageNav
        tab={tab}
        onTabClick={handleChangeTab}
        search={search}
        onSearch={handleSearch}
        userType={userType}
      />
      {tab === 'All' &&
        <Pagination
          url="/home/offers"
          pageNumber={pageNumber}
          nextPage={nextPage}
        />}
      <OffersList
        offers={OFFERS_OPTION[tab]}
        search={search}
      />
    </>
  )
}
