'use client'

import Carousel from '@/components/offers/Carousel'
import PageNav from '@/components/offers/PageNav'
import { type SuggestedOffersWithRelationships, type OffersTab } from '@/lib/types'
import { useState } from 'react'
import OffersList from './OffersList'
import { type UserType } from '@prisma/client'
import Pagination from '../pagination'

interface Props {
  carouselOffers: SuggestedOffersWithRelationships
  generalOffers: SuggestedOffersWithRelationships
  suggestedOffers: SuggestedOffersWithRelationships
  appliedOffers: SuggestedOffersWithRelationships
  myOffers: SuggestedOffersWithRelationships
  userType: UserType
}

export default function PageContent({ carouselOffers, generalOffers, myOffers, suggestedOffers, appliedOffers, userType }: Props) {
  const [tab, setTab] = useState<OffersTab>('All')
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
      <OffersList
        offers={OFFERS_OPTION[tab]}
        search={search}
      />
      <Pagination />
    </>
  )
}
