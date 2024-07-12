'use client'

import { useContext, useState } from 'react'
import { PDFContext } from './PDFProvider'
import { format } from '@/lib/utils/date'
import Image from 'next/image'
import DownloadButton from './DownloadButton'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren

export default function WrapperPDF({ children }: Props) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const { targetRef } = useContext(PDFContext)

  const handleGeneratePDF = () => {
    setIsGeneratingPDF(true)
    setTimeout(() => {
      setIsGeneratingPDF(false)
    }, 2000)
  }

  const date = new Date()

  return (
    <div className="relative">
      {isGeneratingPDF && (
        <div className="z-50 absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white">
          <div className="w-full flex items-center justify-center">
            <div className="absolute top-[30%] left-[42%]">
              <ArrowPathIcon className="w-24 h-24 animate-spin text-primary" />
            </div>
            <p className="absolute top-[40%] left-[45%] -translate-x-1/2">
              Se está descargando el pdf...
            </p>
          </div>
        </div>
      )}
      <div className="mt-4 me-4 flex justify-end">
        <DownloadButton onClick={handleGeneratePDF} />
      </div>
      <div
        className="sm:px-8 sm:py-4"
        ref={targetRef}
      >
        {isGeneratingPDF && (
          <section className="w-full bg-primary/10 mb-8 mx-auto grid grid-cols-6 items-center">
            <div className="flex-col gap-3">
              <Image
                alt="Logo de Novaship"
                src="/logo.ico"
                className="mx-auto"
                width={200}
                height={200}
              />
              <p className="font-bold text-2xl text-center">NOVASHIP</p>
            </div>
            <div className="col-span-5 text-center">
              <div className="flex flex-col gap-0 -space-x-5">
                <p>República Bolivariana de Venezuela</p>
                <p>
                  Ministerio del Poder Popular para la Educación Universitaria
                </p>
                <p>La Victoria - Edo. Aragua</p>
              </div>
            </div>
          </section>
        )}
        {isGeneratingPDF
          ? (
            <h2 className="text-2xl text-center font-bold tracking-tighter">
              Estadísticas del sistema ({format({ date: new Date() })})
            </h2>
            )
          : (
            <div className="flex ms-4 mt-4 sm:mt-0 mb-4 items-center">
              <h2 className="text-2xl text-center font-bold tracking-tighter">
                Estadísticas del sistema ({format({ date: new Date() })})
              </h2>
            </div>
            )}
        {children}
        {isGeneratingPDF && (
          <div className="mt-6">
            <p>
              <span className="font-bold">NOTA</span> Registro que se expide a
              los {date.getDate()} días del mes de {date.getMonth()} del año{' '}
              {date.getFullYear()}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
