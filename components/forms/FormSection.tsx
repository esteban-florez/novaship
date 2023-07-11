import React from 'react'

interface Props {
  title: string
  description: string
  children: React.ReactNode
}

export default function FormSection({ title, description, children }: Props) {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
        <p className="pe-4 text-sm">{description}</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        {children}
      </div>
    </div>
  )
}
