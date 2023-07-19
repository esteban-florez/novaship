import ChatBubble from './ChatBubble'
import ChatSearchInput from './ChatSearchInput'

export default function ChatsBar() {
  return (
    <div className="w-full rounded-xl bg-white shadow-md sm:w-2/6 sm:max-w-xs xl:max-w-xl">
      <ChatSearchInput />
      <div className="flex flex-col gap-3 px-2">
        <ChatBubble
          name="Joseph Monter"
          message="Buenos días, nos comunicamos con usted para informarle que ha sido contrado por la empresa."
          lastConnection={24}
          chatIsOpen
        />
        <ChatBubble
          isActive
          name="Maria Alvarez"
          message="Aún le falta par..."
        />
        <ChatBubble
          name="Julio Santeur"
          message="Texto largo de pruebas para los 3 puntos"
          lastConnection={10}
        />
        <ChatBubble
          name="Usuario relleno"
          message="Texto largo de pruebas para los 3 puntos"
          lastConnection={3}
        />
        <ChatBubble
          name="Usuario relleno"
          message="Texto largo de pruebas para los 3 puntos"
          lastConnection={1}
        />
      </div>
    </div>
  )
}
