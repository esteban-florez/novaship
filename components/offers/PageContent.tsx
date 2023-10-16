'use client'

import { useState } from 'react'
import { type OffersFull } from '@/lib/types'
import PageNav from '../PageNav'
import OffersList from './OffersList'

type Props = React.PropsWithChildren<{
  offers: OffersFull[]
  dropdownLabel: string
}>

export default function PageContent({ offers, dropdownLabel, children }: Props) {
  const [search, setSearch] = useState('')

  return (
    <>
      <PageNav dropdownLabel={dropdownLabel} search={search} onSearch={setSearch}>
        {children}
      </PageNav>
      <OffersList
        search={search}
        offers={offers}
      />
    </>
  )
}
