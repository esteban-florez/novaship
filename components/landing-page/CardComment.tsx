import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  title: string
  color?: string
  className?: string
}>

export default function CardComment({ title, color = 'bg-primary', className = '', children }: Props) {
  return (
    <div className={clsx('flex max-w-lg flex-col rounded-md border shadow', className)}>
      <div className="flex items-center gap-x-2 border-b bg-gray-100 p-4">
        <span className={clsx('h-5 w-5 rounded-full border', color)} />
        <h5 className="text-base font-semibold">{title}</h5>
      </div>
      <div className="p-4 text-sm">{children}</div>
    </div>
  )
}
