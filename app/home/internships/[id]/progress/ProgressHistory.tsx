import { type Progress as ProgressModel } from '@prisma/client'
import Progress from './Progress'

type Props = React.PropsWithChildren<{
  progresses: ProgressModel[]
}>

export default function ProgressHistory({ progresses }: Props) {
  return (
    <div className="bg-white px-8 py-4 rounded-lg shadow">
      <ol className="relative border-s space-y-8">
        {progresses.map(progress => (
          <Progress key={progress.id} progress={progress} />
        ))}
      </ol>
    </div>
  )
}
