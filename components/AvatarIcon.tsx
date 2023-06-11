import { getCapitalize } from "@/utils/text"

interface Props {
  username: string
  status?: boolean
  width?: string
  showStatus?: boolean
}

export default function AvatarIcon({
  username,
  status,
  width,
  showStatus,
}: Props) {
  return (
    <div
      className={`placeholder avatar ${status ? "relative" : ""} ${
        width !== undefined ? `w-${width}/6` : ""
      }`}
    >
      <div className="h-10 w-10 rounded-full bg-white text-neutral-content">
        <span>{getCapitalize(username)}</span>
      </div>
      {showStatus && (
        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-neutral">
          <span
            className={`absolute left-0.5 top-0.5 h-3 w-3 rounded-full ${
              status ? "bg-green-300" : "bg-gray-200"
            }`}
          ></span>
        </span>
      )}
    </div>
  )
}
