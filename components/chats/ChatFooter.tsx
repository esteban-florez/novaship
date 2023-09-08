import { FaceSmileIcon, PaperAirplaneIcon, PhotoIcon } from '@heroicons/react/24/solid'

export default function ChatFooter() {
  return (
    <footer className="flex items-center border-t-2 border-neutral-300 px-3">
      <button type="button" className="inline-flex justify-center rounded-lg p-2 text-primary transition-colors hover:bg-primary hover:text-white">
        <PhotoIcon className="h-7 w-7" />
      </button>
      <button type="button" className="rounded-lg p-2 text-primary transition-colors hover:bg-primary hover:text-white">
        <FaceSmileIcon className="h-7 w-7" />
      </button>
      <textarea rows={1} className="mx-4 w-full resize-none rounded-lg border border-neutral-200 bg-base-200 p-2 shadow-inner focus:outline-none focus:ring focus:ring-primary" placeholder="Escribe tu mensaje aquí..." />
      <button type="submit" className="inline-flex justify-center rounded-full p-2 text-primary transition-colors hover:bg-primary hover:text-white">
        <PaperAirplaneIcon className="h-7 w-7" />
      </button>
    </footer>
  )
}
