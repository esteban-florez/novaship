import Message from './Message'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'

export default function CurrentChat() {
  return (
    <div className="chat-grid hidden flex-col bg-white sm:grid sm:w-full md:rounded-l-xl md:rounded-r-none">
      <ChatHeader />
      <div className="h-full overflow-y-scroll px-4 pe-4">
        <Message fromCurrentUser message="This is a test" status="read" />
        <Message message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tenetur" status="sent" />
        <Message message="This is a test" status="read" />
        <Message fromCurrentUser message="Prueba #1" status="received" />
        <Message fromCurrentUser message="Prueba #2" status="sent" />
        <Message fromCurrentUser message="Prueba #2" status="sent" />
        <Message fromCurrentUser message="Prueba #2" status="sent" />
        <Message fromCurrentUser message="Prueba #2" status="sent" />
        <Message fromCurrentUser message="Prueba #2" status="sent" />
        <Message fromCurrentUser message="Prueba #2" status="sent" />
        <Message fromCurrentUser message="Prueba #2" status="sent" />
      </div>
      <ChatFooter />
    </div>
  )
}
