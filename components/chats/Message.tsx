import MessageInfo from './MessageInfo'

interface Props {
  status: MessageStatus
  fromCurrentUser?: boolean
  message: string
}

export default function Message({ status, fromCurrentUser = false, message }: Props) {
  return (
    <div className={`chat first:mt-4 last:mb-4 ${fromCurrentUser ? 'chat-end' : 'chat-start'}`}>
      <div className={`chat-bubble ${fromCurrentUser ? 'bg-primary' : 'bg-base-300 text-black'}`}>
        <p className="flex-row text-sm">
          {message}
        </p>
        <MessageInfo status={status} alignEnd={fromCurrentUser} time="6:00 pm" />
      </div>
    </div>
  )
}
