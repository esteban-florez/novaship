'use client'

import clsx from 'clsx'
import { useState } from 'react'

type Props = React.PropsWithChildren<{
  title: string
}>

export default function Collapse({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="collapse collapse-arrow">
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => { setIsOpen(!isOpen) }}
      />
      <div className={clsx('collapse-title', isOpen && 'text-primary')}>
        <h6 className="mb-1 font-semibold">{title}</h6>
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  )
}
