import { EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Props {
  nameTask: string
  value: string
  percentage: string
}

export default function Task({ nameTask, value, percentage }: Props) {
  return (
    <>
      <div className="flex flex-row items-center justify-between rounded-lg border border-solid border-gray-400 p-3 px-5">
        <div className="flex flex-col">
          <h3 className="font-title text-base font-bold sm:text-lg">{nameTask}</h3>
          <div className="flex flex-row items-center gap-2">
            <progress className="progress-accent progress w-52 md:w-80" value={value} max="100" />
            <p className="line-clamp-6 text-sm">{percentage}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Link href="/home/projects/tasks/task">
            <EyeIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </>
  )
}
