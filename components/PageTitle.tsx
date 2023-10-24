// import Link from 'next/link'
import React from 'react'
import Breadcrumbs from './layout/Breadcrumbs'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren<{
  title?: string
  subtitle?:
  | string
  | {
    label: string
    name: string
    url: string
  }
  breadcrumbs?: string[] | string
}>

// TODO -> actualizar diseño
export default function PageTitle({
  title,
  children,
  subtitle,
  breadcrumbs,
}: Props) {
  if (subtitle === 'string') {
    return (
      <p className="mt-1 font-semibold text-neutral-600 sm:-mt-1.5">
        {subtitle}
      </p>
    )
  }
  // if (subtitle === 'object') {
  //   return (
  //     <span className="mt-1 font-semibold sm:-mt-1.5">
  //       {subtitle.label}:{' '}
  //       <Link className="text-primary underline" href={subtitle.url}>
  //         {subtitle.name}
  //       </Link>
  //     </span>
  //   )
  // }

  return (
    <section className="flex flex-col justify-between gap-2 bg-white px-4 py-3 shadow-lg md:flex-row md:items-center md:gap-0">
      <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        {title != null && (
          <>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tighter">{title}</h1>
              <div
                className="tooltip mt-1"
                data-tip={subtitle}
              >
                <InformationCircleIcon className="h-6 w-6 hover:text-primary" />
              </div>
            </div>
          </>
        )}
      </div>
      {children}
    </section>
    // <section className="flex flex-col justify-between gap-2 bg-white px-4 py-2 shadow-lg md:flex-row md:items-center md:gap-0">
    //   <div className="flex flex-col">
    //     <h1 className="text-3xl font-bold tracking-tighter">
    //       {title}
    //     </h1>
    //     {typeof subtitle === 'string' && (
    //       <p className="mt-1 font-semibold text-neutral-600 sm:-mt-1.5">
    //         {subtitle}
    //       </p>
    //     )}
    //     {typeof subtitle === 'object' && (
    //       <span className="mt-1 font-semibold sm:-mt-1.5">
    //         {subtitle.label}:{' '}
    //         <Link className="text-primary underline" href={subtitle.url}>
    //           {subtitle.name}
    //         </Link>
    //       </span>
    //     )}
    //     <Breadcrumbs breadcrumbs={breadcrumbs} />
    //   </div>
    //   {children}
    // </section>
  )
}
