'use client'

import { useState } from 'react'
import { type InvitationData } from '@/lib/types'
import PageNav from '../PageNav'
import Invitations from './Invitations'

type Props = React.PropsWithChildren<{
  invitations: InvitationData[]
  dropdownLabel: string
  type: 'data' | 'invitation'
}>

export default function PageContent({ invitations, type, dropdownLabel, children }: Props) {
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
      <Invitations
        invitations={invitations}
        search={search}
        type={type}
        side="owner"
      />
    </>
  )
}
