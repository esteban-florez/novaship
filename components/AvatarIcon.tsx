import { capitalizeString } from '@/utils/text'

interface Props {
  username: string
  status?: boolean
  width?: number | null
  showStatus?: boolean
}

export default function AvatarIcon({
  username,
  status = false,
  width = null,
  showStatus = false,
}: Props) {
  const widths = [
    'w-1/6', 'w-2/6', 'w-3/6',
    'w-4/6', 'w-5/6', 'w-6/6',
  ]

  return (
    <div
      className={`placeholder avatar ${(status !== null) ? 'relative' : ''} ${
        width !== null ? `${widths[width + 1]}` : ''
      }`}
    >
      <div className="h-10 w-10 rounded-full bg-white text-neutral-content">
        <span>{capitalizeString(username)}</span>
      </div>
      {showStatus && (
        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-neutral">
          <span
            className={`absolute left-0.5 top-0.5 h-3 w-3 rounded-full ${
              status ? 'bg-green-300' : 'bg-gray-200'
            }`}
          ></span>
        </span>
      )}
    </div>
  )
}
