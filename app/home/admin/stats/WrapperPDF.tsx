'use client'

import { useContext } from 'react'
import { PDFContext } from './PDFProvider'
import { format } from '@/lib/utils/date'

type Props = React.PropsWithChildren

export default function WrapperPDF({ children }: Props) {
  const { targetRef } = useContext(PDFContext)

  return (
    <div
      className="sm:px-8 sm:py-4"
      ref={targetRef}
    >
      <div className="flex ms-4 mt-4 sm:mt-0 mb-4 items-center">
        <h2 className="text-2xl font-bold tracking-tighter">
          Estadísticas del sistema ({format(new Date())})
        </h2>
      </div>
      {children}
    </div>
  )
}
