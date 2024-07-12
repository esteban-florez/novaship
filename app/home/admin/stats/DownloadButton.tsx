'use client'

import { useContext } from 'react'
import { PDFContext } from './PDFProvider'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

interface Props {
  onClick?: () => void
}

export default function DownloadButton({ onClick }: Props) {
  const { toPDF } = useContext(PDFContext)
  return (
    <button
      className="btn btn-secondary"
      type="button"
      onClick={() => {
        if (onClick != null) {
          onClick()
        }

        setTimeout(() => {
          toPDF()
        }, 1000)
      }}
    >
      <ArrowDownIcon className="h-5 w-5" />
      Descargar PDF
    </button>
  )
}
