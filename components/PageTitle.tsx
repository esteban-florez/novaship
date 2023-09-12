import Link from 'next/link'
import React from 'react'

type Props = React.PropsWithChildren<{
  title: string
  subtitle?: string | {
    label: string
    name: string
    url: string
  }
}>

export default function PageTitle({ title, children, subtitle }: Props) {
  return (
    <section className="flex items-center justify-between bg-white p-4 shadow">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tighter">
          {title}
        </h1>
        {typeof subtitle === 'string' && (
          <p className="font-semibold">
            {subtitle}
          </p>
        )}
        {typeof subtitle === 'object' && (
          <span className="font-semibold">
            {subtitle.label}:{' '}
            <Link className="text-primary underline" href={subtitle.url}>
              {subtitle.name}
            </Link>
          </span>
        )}
      </div>
      {children}
    </section>
  )
}
