'use client'

import clsx from 'clsx'
import { type RefObject } from 'react'

export default function SelectionBox({ styles, refobj, menuOpen, menuClass }: React.PropsWithChildren<{
  styles: Rec
  refobj: RefObject<HTMLDivElement>
  menuOpen: boolean
  menuClass: string
}>) {
  const dropdownStyles = { ...styles }
  dropdownStyles.display = ''
  dropdownStyles.opacity = ''

  return (
    <>
      <div style={styles} ref={refobj} className="border border-blue-500 bg-blue-300 opacity-75 absolute z-50 pointer-events-none hidden" />
      <div className={clsx('dropdown z-50 absolute', menuOpen ? 'dropdown-open' : 'pointer-events-none', menuClass)} style={dropdownStyles}>
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </>
  )
}
