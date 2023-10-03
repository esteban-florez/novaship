type Props = React.PropsWithChildren<{
  title: string
  description: string
}>

export default function FormSection({ title, description, children }: Props) {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 last:mb-4 lg:px-4">
      <div className="lg:form-control">
        <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
        <p className="pe-4">{description}</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0">
        {children}
      </div>
    </div>
  )
}
