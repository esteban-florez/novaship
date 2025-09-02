'use client'

import { EyeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Modal from '../modal/Modal'

export default function PrevisualizeButton({
  children,
}: React.PropsWithChildren) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="btn btn-secondary mb-2"
        type="button"
        onClick={() => { setOpen(!open) }}
      >
        <EyeIcon className="h-5 w-5" />
        Ver PDF
      </button>
      {open && (
        <Modal
          forceOpen
          modalClasses="max-w-[60rem]"
        >
          <div className="flex flex-col gap-3">
            <article className="mx-auto">{children}</article>
            <button
              className="btn btn-ghost"
              onClick={() => { setOpen(false) }}
            >
              <XMarkIcon className="h-5 w-5" />
              Cerrar ventana
            </button>
          </div>
        </Modal>
      )}
    </>
  )
}
