'use client'

import Carrousel from '@/components/offers/Carrousel'
import PageNav from '@/components/offers/PageNav'
import { type Offers, type OffersTab } from '@/lib/types'
import { useState } from 'react'
import OffersList from './OffersList'

interface Props {
  carruselOffers: Offers[]
  generalOffers: Offers[]
  myOffers: Offers[]
}

export default function PageContent({ carruselOffers, generalOffers, myOffers }: Props) {
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
    Applied: myOffers,
  }

  return (
    <>
      <Carrousel offers={carruselOffers} />
      <PageNav tab={tab} onTabClick={handleChangeTab} search={search} onSearch={handleSearch} />
      <OffersList offers={OFFERS_OPTION[tab]} search={search} />
    </>
  )
}
