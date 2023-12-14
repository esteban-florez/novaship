'use client'

import { useState } from 'react'
import { type TeamsFull } from '@/lib/types'
import PageNav from '../PageNav'
import TeamsList from './TeamsList'

type Props = React.PropsWithChildren<{
  teams: TeamsFull[]
  dropdownLabel: string
  userId: string
}>

export default function PageContent({
  userId,
  teams,
  dropdownLabel,
  children,
}: Props) {
  const [search, setSearch] = useState('')

  return (
    <>
      <PageNav
        dropdownLabel={dropdownLabel}
        search={search}
        onSearch={setSearch}
      >
        {children}
      </PageNav>
      <TeamsList
        search={search}
        teams={teams}
        userId={userId}
      />
    </>
  )
}
