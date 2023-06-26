import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export interface Props {
  left?: boolean
  right?: boolean
  onClick: () => void
}

export default function Btn({ left = false, right = false, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group btn-ghost btn-md btn-circle btn flex items-center justify-center p-2 transition-colors hover:bg-white/30"
    >
      {left && <ArrowLeftCircleIcon className="h-8 w-8 fill-white group-hover:fill-purple-300" />}
      {right && <ArrowRightCircleIcon className="h-8 w-8 fill-white group-hover:fill-purple-300" />}
    </button>
  )
}
