'use client'

import { useState } from 'react'
import AvatarIcon from '../AvatarIcon'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import { useSession } from 'next-auth/react'

export default function ProfileDropdown() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const { data, status } = useSession()
  const username = data?.user?.name ?? ''

  if (status === 'unauthenticated') {
    throw new Error('Unauthenticated user')
  }

  const handleClick = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <button
      onClick={handleClick}
      className="btn-ghost btn-circle btn sm:relative"
    >
      <AvatarIcon username={username} usernameLength={2} />
      {dropdownIsOpen && <ProfileDropdownMenu username={username} />}
    </button>
  )
}
