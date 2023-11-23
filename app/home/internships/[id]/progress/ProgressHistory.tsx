'use client'

import { useContext } from 'react'
import { PDFContext } from './PDFProvider'

type Props = React.PropsWithChildren

export default function ProgressHistory({ children }: Props) {
  const { targetRef } = useContext(PDFContext)

  return (
    <div className="bg-white px-8 py-4 rounded-lg shadow" ref={targetRef}>
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-2xl font-bold tracking-tighter">
          Actividades de la pasantía
        </h2>
      </div>
      {children}
    </div>
  )
}
