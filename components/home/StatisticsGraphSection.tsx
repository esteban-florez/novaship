import NoData from '../graphics/NoData'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  noData: {
    title: string
    content: string
  }
  valid: boolean
  options?: {
    title?: boolean
    center?: boolean
    height?: string
  }
}>

export default function StatisticsGraphSection({
  noData,
  valid,
  options,
  children,
}: Props) {
  return (
    <div className="h-full p-4 card bg-white border border-zinc-300 rounded-none sm:rounded-md shadow-md">
      {options?.title != null && (
        <h3 className="mb-4 text-xl font-bold text-primary">Estadísticas</h3>
      )}
      <div
        className={clsx(
          'pb-2 max-h-96 items-center',
          options?.height,
          options?.center != null && 'mx-auto'
        )}
      >
        {!valid
          ? (
            <>{children}</>
            )
          : (
            <NoData title={noData.title}>{noData.content}</NoData>
            )}
      </div>
    </div>
  )
}
