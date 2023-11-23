'use client'

import { useContext } from 'react'
import { PDFContext } from './PDFProvider'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function DownloadButton() {
  const { toPDF } = useContext(PDFContext)
  return (
    <button className="btn btn-secondary" type="button" onClick={() => { toPDF() }}>
      <ArrowDownIcon className="h-5 w-5" />
      Ver PDF
    </button>
  )
}
