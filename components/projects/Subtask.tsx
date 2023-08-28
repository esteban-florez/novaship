import { type TaskStatus } from '@prisma/client'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  status: TaskStatus
}>

export default function Subtask({ status, children }: Props) {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="checkbox" name="checked-demo" value="1" checked={status === 'DONE'} className={clsx({
          'h-4 w-4 appearance-none rounded-lg border border-zinc-400 checked:border-transparent focus:outline-none': true,
          'checked:bg-success': status === 'DONE',
          'checked:bg-warning': status === 'PENDING',
          'checked:bg-secondary': status === 'REVIEW',
          'checked:bg-primary': status === 'PROGRESS',
        })}
      />
      <span className="text-neutral-700">{children}</span>
    </div>
  )
}
