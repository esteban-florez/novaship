'use client'

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useState } from 'react'

type Props = React.PropsWithChildren

export default function ChatsBarDropdown({ children }: Props) {
  const [open, setOpen] = useState(true)

  return (
    <details className={clsx('dropdown border-b border-neutral-300 shadow')} open={open}>
      <summary onClick={() => { setOpen(!open) }} className="btn w-full items-center justify-start border-none bg-white p-0 text-base font-normal hover:bg-white">
        <ChevronRightIcon className={clsx('h-5 w-5 transition-all', open && 'rotate-90', !open && '-rotate-90')} />
        Tareas
      </summary>
      {children}
    </details>
  )
}
