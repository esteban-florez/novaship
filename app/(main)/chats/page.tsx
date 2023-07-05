import ChatsBar from '@/components/chats/ChatsBar'
import CurrentChat from '@/components/chats/CurrentChat'

export default function ChatsPage() {
  return (
    <>
      <section className="chat-height mb-8 mt-4 flex w-full gap-4 px-8">
        <ChatsBar />
        <CurrentChat />
      </section>
    </>
  )
}
