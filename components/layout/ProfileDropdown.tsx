'use client'

import { useRef, useState } from 'react'
import AvatarIcon from '../AvatarIcon'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import { useSession } from 'next-auth/react'

export default function ProfileDropdown() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const { data } = useSession()
  const username = data?.user?.name ?? ''
  const profileRef = useRef<HTMLButtonElement>(null)

  const handleOutsideClick = (e: MouseEvent) => {
    if (profileRef.current === null) return

    const notClickedOnButton = !profileRef.current.contains(e.target as HTMLButtonElement)

    if (dropdownIsOpen && notClickedOnButton) {
      setDropdownIsOpen(false)
    }
  }

  document.addEventListener('mousedown', handleOutsideClick)

  const handleClick = (): void => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <button
      ref={profileRef}
      onClick={handleClick}
      className="btn-ghost btn-circle btn sm:relative"
    >
      <AvatarIcon username={username} usernameLength={2} />
      {dropdownIsOpen && <ProfileDropdownMenu username={username} />}
    </button>
  )
}
