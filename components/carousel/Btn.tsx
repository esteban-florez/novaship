import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid'

interface Props {
  direction: 'left' | 'right'
  onClick: () => void
}

export default function Btn({ direction, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group mx-2 rounded-full transition-colors hover:bg-white"
    >
      {direction === 'left' && (
        <ArrowLeftCircleIcon className="h-8 w-8 fill-white group-hover:fill-primary" />
      )}
      {direction === 'right' && (
        <ArrowRightCircleIcon className="h-8 w-8 fill-white group-hover:fill-primary" />
      )}
    </button>
  )
}
