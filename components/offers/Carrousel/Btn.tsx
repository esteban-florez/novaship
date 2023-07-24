import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'

interface Props {
  direction: 'left' | 'right'
  onClick: () => void
}

export default function Btn({ direction, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group btn-ghost btn-md btn-circle btn flex items-center justify-center p-2 transition-colors hover:bg-white/30"
    >
      {direction === 'left' && <ArrowLeftCircleIcon className="h-8 w-8 fill-white group-hover:fill-purple-300" />}
      {direction === 'right' && <ArrowRightCircleIcon className="h-8 w-8 fill-white group-hover:fill-purple-300" />}
    </button>
  )
}
