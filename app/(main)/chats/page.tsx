import Subnavbar from '@/components/layout/Subnavbar'
import ChatsBar from '@/components/chats/ChatsBar'
import CurrentChat from '@/components/chats/CurrentChat'

export default function ChatsPage() {
  return (
    <>
      <Subnavbar options={false} />
      <section className="my-8 flex min-h-[70vh] w-full gap-4 px-8">
        <ChatsBar />
        <CurrentChat />
      </section>
    </>
  )
}
