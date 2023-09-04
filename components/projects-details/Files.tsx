import { EyeIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'

interface Props {
  title: string
  participation?: string
  date: Date
}

export default function Files({ title, participation, date }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-between rounded-lg border border-solid border-gray-400 p-3 px-5 md:flex-row">
        <div className="flex flex-col">
          <h3 className="text-base font-bold sm:text-lg">{title}</h3>
          <div className="flex flex-row gap-1">
            <AvatarIcon username={participation ?? ''} className="h-6 w-6" />
            <div className="flex flex-col">
              <p className="text-base">{participation}</p>
              <p className="text-sm">Hace {date.getDate()} días</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <button>
            <EyeIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  )
}
