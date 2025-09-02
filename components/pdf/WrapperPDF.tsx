'use client'

import { useContext, useState } from 'react'
import Image from 'next/image'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { PDFContext } from './PDFProvider'
import DownloadButton from './DownloadButton'
import clsx from 'clsx'
import { url } from '@/lib/utils/url'

type Props = React.PropsWithChildren<{
  pageTitle: string
  header: React.ReactNode
  footer: string
  description?: string
  extraImage?: string
  descriptionPosition?: 'beforeTitle' | 'afterTitle'
  render?: 'saving' | 'always'
  sign?: boolean
  signResponsable?: string
  preview?: boolean
  qr?: React.ReactNode
}>

export default function WrapperPDF({
  pageTitle,
  header,
  footer,
  description,
  extraImage,
  descriptionPosition = 'afterTitle',
  render = 'always',
  sign = false,
  signResponsable,
  children,
  preview = false,
  qr,
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
      <DownloadButton onClick={handleGeneratePDF} />
      <div
        className="sm:px-8 sm:py-4"
        ref={targetRef}
        style={isGeneratingPDF || preview ? { width: '800px' } : undefined}
      >
        {(isGeneratingPDF || preview) && (
          <section className="w-full bg-primary/10 mb-8 mx-auto grid grid-cols-6 items-center p-4">
            <Image
              alt="Logo de Novaship"
              src="/novaship/logo.ico"
              className="mx-auto"
              width={200}
              height={200}
            />
            <div
              className={clsx(
                'text-center',
                extraImage != null && 'col-span-4',
                extraImage == null && 'col-span-5'
              )}
            >
              <div className="flex flex-col justify-center">{header}</div>
            </div>
            {extraImage != null && (
              <Image
                alt="Logo de institución"
                src={url(extraImage).pathname}
                className="mx-auto"
                width={200}
                height={200}
              />
            )}
          </section>
        )}
        {isGeneratingPDF && !preview && <div className="mt-52" />}
        {(isGeneratingPDF || preview) && (
          <>
            {descriptionPosition === 'beforeTitle' && description != null && (
              <p>{description}</p>
            )}
            {typeof pageTitle === 'string'
              ? (
                <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter">
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
        {render === 'always' && children}
        {(isGeneratingPDF || preview) && (
          <>
            {render === 'saving' && children}
            <div className="mt-6 flex flex-col gap-2">
              {sign && signResponsable != null && (
                <div className="pt-16 mt-16 mx-auto w-fit flex flex-col gap-2">
                  <div className="px-8 border-t-2 border-black" />
                  <p className="mx-auto px-8">{signResponsable}</p>
                </div>
              )}
              <p>
                <span className="font-bold">NOTA:</span> Registro que se expide
                a los {date.getDate()} días del mes de{' '}
                {date.toLocaleString('es', { month: 'long' })} del año{' '}
                {date.getFullYear()} a través de la plataforma Novaship.
              </p>
            </div>
            {isGeneratingPDF && !preview && <div className="mt-[16.5rem]" />}
            <footer className="bg-primary text-white text-center w-full p-4 pb-6 mb-8">
              <p>{footer}</p>
            </footer>
            {qr}
          </>
        )}
      </div>
    </div>
  )
}
