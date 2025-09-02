import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  title: string
  circle?: string
  borders: string
  className?: string
}>

export default function CardComment({ title, circle = 'bg-primary', borders, className = '', children }: Props) {
  return (
    <div className={clsx('card flex max-w-lg flex-col rounded-md border shadow-xl', className, borders)}>
      <div className={clsx('flex items-center gap-x-2 border-b bg-white p-4', borders)}>
        <span className={clsx('h-5 w-5 rounded-full border', circle)} />
        <h5 className="text-base font-semibold">{title}</h5>
      </div>
      <div className="bg-neutral-50">{children}</div>
    </div>
  )
}
