import { statuses } from '@/lib/translations'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  status: MessageStatus
  alignEnd: boolean
  time: string
}>

export default function MessageInfo({ status, alignEnd, time }: Props) {
  const currentStatus = statuses[status]

  return (
    <div className={clsx('mt-1 flex flex-row gap-1', alignEnd && 'text-end')}>
      <span className="text-xs font-semibold">{currentStatus}</span>
      <span className="text-xs font-semibold">{time}.</span>
    </div>
  )
}
