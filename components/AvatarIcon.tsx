import { capitalizeString } from '@/utils/text'

interface Props {
  username: string
  status?: boolean
  showStatus?: boolean
  bgColor: string
}

export default function AvatarIcon({
  username,
  status = false,
  showStatus = false,
  bgColor,
}: Props) {
  return (
    <div className={`placeholder avatar ${(status !== null) ? 'relative' : ''}`}>
      <div className={`bg- h-10 w-10 rounded-full${bgColor} text-neutral-content`}>
        <span>{capitalizeString(username)}</span>
      </div>
      {showStatus && (
        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-neutral">
          <span
            className={`absolute left-0.5 top-0.5 h-3 w-3 rounded-full ${
              status ? 'bg-green-300' : 'bg-gray-200'
            }`}
          />
        </span>
      )}
    </div>
  )
}
