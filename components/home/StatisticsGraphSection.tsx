import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  options?: {
    center?: boolean
    height?: string
    border?: boolean
    shadow?: boolean
  }
}>

export default function StatisticsGraphSection({
  options = { border: true, shadow: true },
  children,
}: Props) {
  return (
    <div
      className={clsx(
        'h-full p-4 card bg-white rounded-none sm:rounded-md',
        options?.border != null && 'border border-zinc-300',
        options?.shadow != null && 'shadow-md'
      )}
    >
      <div
        className={clsx(
          'pb-2 max-h-96 items-center',
          options?.height,
          options?.center != null && 'mx-auto'
        )}
      >
        <>{children}</>
      </div>
    </div>
  )
}
