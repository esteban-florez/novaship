import BubbleMessage from './BubbleMessage'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'

export default function CurrentChat() {
  return (
    <div className="chat-grid hidden flex-col rounded-xl bg-white sm:grid sm:w-full">
      <ChatHeader />
      <div className="h-full overflow-y-scroll px-4 pe-4">
        <BubbleMessage fromCurrentUser message="This is a test" status="isRead" />
        <BubbleMessage message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur" status="isSent" />
        <BubbleMessage message="This is a test" status="isRead" />
        <BubbleMessage fromCurrentUser message="Prueba #1" status="isReceived" />
        <BubbleMessage fromCurrentUser message="Prueba #2" status="isSent" />
        <BubbleMessage fromCurrentUser message="Prueba #2" status="isSent" />
        <BubbleMessage fromCurrentUser message="Prueba #2" status="isSent" />
        <BubbleMessage fromCurrentUser message="Prueba #2" status="isSent" />
        <BubbleMessage fromCurrentUser message="Prueba #2" status="isSent" />
        <BubbleMessage fromCurrentUser message="Prueba #2" status="isSent" />
        <BubbleMessage fromCurrentUser message="Prueba #2" status="isSent" />
      </div>
      <ChatFooter />
    </div>
  )
}
