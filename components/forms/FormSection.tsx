import { InformationCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  title: string
  description: string
  tooltipOrientation?: 'tooltip-bottom' | 'tooltip-left' | 'tooltip-right'
}>

export default function FormSection({
  title,
  description,
  tooltipOrientation,
  children,
}: Props) {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 last:mb-4 lg:px-4 divide-x-2 divide-primary">
      <div className="flex items-center justify-normal gap-1 sm:gap-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div
          className={clsx('tooltip tooltip-right mt-1', tooltipOrientation)}
          data-tip={description}
        >
          <InformationCircleIcon className="h-6 w-6 hover:text-primary" />
        </div>
      </div>
      <div className="lg:form-control lg:mt-0 pl-5">{children}</div>
    </div>
  )
}
