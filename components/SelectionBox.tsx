'use client'

import clsx from 'clsx'
import { type RefObject } from 'react'

export default function SelectionBox({ styles, refobj, menuOpen, menuClass, menuRef, onCancel }: React.PropsWithChildren<{
  styles: Rec
  refobj: RefObject<HTMLDivElement>
  menuOpen: boolean
  menuClass: string
  menuRef: RefObject<HTMLUListElement>
  onCancel: () => void
}>) {
  const dropdownStyles = { ...styles }
  dropdownStyles.display = ''
  dropdownStyles.opacity = ''

  return (
    <tr className="menu-row">
      <td>
        <div style={styles} ref={refobj} className="border border-blue-500 bg-blue-300 absolute z-50 pointer-events-none hidden" />
        <div className={clsx('dropdown z-50 absolute', menuOpen ? 'dropdown-open' : 'pointer-events-none', menuClass)} style={dropdownStyles}>
          <ul className="dropdown-content border border-base-300 menu p-2 shadow bg-base-100 rounded-box" ref={menuRef}>
            <li>
              <a role="button">Marcar como <span className="text-primary font-bold">Disponible</span></a>
            </li>
            <li>
              <a role="button">Marcar como <span className="font-bold">Ocupado</span></a>
            </li>
            <li>
              <a className="text-error font-bold" role="button" onClick={onCancel}>Cancelar</a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  )
}
