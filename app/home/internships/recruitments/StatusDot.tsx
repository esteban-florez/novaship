import { type Status } from '@prisma/client'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  status: Status
}>

const colors = {
  PENDING: 'bg-warning',
  REJECTED: 'bg-error',
  ACCEPTED: 'bg-success',
} as const

export default function StatusDot({ status }: Props) {
  return (
    <div className={clsx('w-3 h-3 rounded-full', colors[status])} />
  )
}
