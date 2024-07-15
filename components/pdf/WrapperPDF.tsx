'use client'

import { useContext, useState } from 'react'
import Image from 'next/image'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { PDFContext } from './PDFProvider'
import DownloadButton from './DownloadButton'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  pageTitle: string
  description?: string
  extraImage?: string
  descriptionPosition?: 'beforeTitle' | 'afterTitle'
  note?: string | React.ReactElement
}>

export default function WrapperPDF({
  pageTitle,
  description,
  note,
  extraImage,
  descriptionPosition = 'afterTitle',
  children,
}: Props) {
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
          <section className="w-full bg-primary/10 mb-8 mx-auto grid grid-cols-6 items-center p-4">
            <Image
              alt="Logo de Novaship"
              src="/logo.ico"
              className="mx-auto"
              width={200}
              height={200}
            />
            <div
              className={clsx(
                'col-span-5 text-center',
                extraImage != null && 'col-span-4'
              )}
            >
              <div className="flex flex-col">
                <p>República Bolivariana de Venezuela</p>
                <p className="-mt-5">
                  Ministerio del Poder Popular para la Educación Universitaria
                </p>
                <p className="-mt-5">La Victoria - Edo. Aragua</p>
                <p className="-mt-5">NOVASHIP</p>
              </div>
            </div>
            {extraImage != null && (
              <Image
                alt="Logo de institución"
                src={extraImage}
                className="mx-auto"
                width={200}
                height={200}
              />
            )}
          </section>
        )}
        {isGeneratingPDF && (
          <>
            {descriptionPosition === 'beforeTitle' && description != null && (
              <p>{description}</p>
            )}
            {typeof pageTitle === 'string'
              ? (
                <h2 className="mb-4 text-2xl text-center font-bold tracking-tighter">
                  {pageTitle}
                </h2>
                )
              : (
                <div className="mb-4">{pageTitle}</div>
                )}
            {descriptionPosition === 'afterTitle' && description != null && (
              <p>{description}</p>
            )}
          </>
        )}
        {children}
        {isGeneratingPDF && (
          <div className="mt-6 flex flex-col gap-2">
            <p>
              <span className="font-bold">NOTA:</span> Registro que se expide a
              los {date.getDate()} días del mes de{' '}
              {date.toLocaleString('es', { month: 'long' })} del año{' '}
              {date.getFullYear()} a través de la plataforma Novaship.
            </p>
            {typeof note === 'string'
              ? (
                <p>
                  <span className="font-bold">NOTA</span> {note}
                </p>
                )
              : (
                  note
                )}
          </div>
        )}
      </div>
    </div>
  )
}
