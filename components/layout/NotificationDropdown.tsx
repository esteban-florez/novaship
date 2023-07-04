'use client'

import { BellIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'
import NotificationDropdownMenu from './NotificationDropdownMenu'

export default function NotificationDropdown() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const notificationRef = useRef<HTMLButtonElement>(null)

  const handleOutsideClick = (e: MouseEvent) => {
    if ((notificationRef.current != null) && dropdownIsOpen && !notificationRef.current.contains(e.target as HTMLButtonElement)) {
      setDropdownIsOpen(false)
    }
  }

  document.addEventListener('mousedown', handleOutsideClick)

  const handleClick = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <button
      ref={notificationRef}
      onClick={handleClick}
      className="btn-ghost btn-circle btn sm:relative"
    >
      <div className="indicator">
        <BellIcon className="h-6 w-6 text-white" />
        {!dropdownIsOpen && <span className="badge badge-xs indicator-item right-1 top-3 border bg-secondary" />}
      </div>
      {dropdownIsOpen && <NotificationDropdownMenu />}
    </button>
  )
}
