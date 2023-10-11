import { InformationCircleIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren<{
  title: string
  description: string
}>

export default function FormSection({ title, description, children }: Props) {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 last:mb-4 lg:px-4">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-normal">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="tooltip mx-auto sm:mx-0" data-tip={description}>
          <InformationCircleIcon className="h-6 w-6 hover:text-primary" />
        </div>
      </div>
      <div className="lg:form-control lg:mt-0">
        {children}
      </div>
    </div>
  )
}
