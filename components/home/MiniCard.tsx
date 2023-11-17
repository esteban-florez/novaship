import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  title: string
  count: number
  percentage?: number
  graph?: boolean
  positive?: boolean
}>

export default function MiniCard({
  title,
  count,
  percentage,
  graph = false,
  positive = true,
  children,
}: Props) {
  return (
    <div className="relative col-span-1 bg-white border border-zinc-300 border-t-4 border-t-primary rounded-b-md shadow-md p-4">
      <div className="flex flex-col">
        <h6 className="uppercase text-sm font-semibold text-neutral-600">
          {title}
        </h6>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <p className="text-2xl">{count}</p>
            {!graph && percentage != null && (
              <small
                className={clsx(
                  'py-3 badge rounded-md',
                  positive && 'bg-success/60',
                  !positive && 'bg-error/60'
                )}
              >
                +{percentage.toFixed(2)}%
              </small>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
