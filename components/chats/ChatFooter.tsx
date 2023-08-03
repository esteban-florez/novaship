import { FaceSmileIcon, PaperAirplaneIcon, PhotoIcon } from '@heroicons/react/24/solid'

export default function ChatFooter() {
  return (
    <footer className="flex items-center rounded-b-lg border-t-2 border-white bg-primary px-3">
      <button type="button" className="inline-flex justify-center rounded-lg p-2 text-white transition-colors hover:bg-white hover:text-primary">
        <PhotoIcon className="h-6 w-6" />
      </button>
      <button type="button" className="rounded-lg p-2 text-white transition-colors hover:bg-white hover:text-primary">
        <FaceSmileIcon className="h-6 w-6" />
      </button>
      <textarea rows={1} className="mx-4 w-full resize-none rounded-lg border border-neutral-200 bg-base-100 p-2.5 shadow-inner focus:outline-none focus:ring focus:ring-primary" placeholder="Escribe tu mensaje aquí..." />
      <button type="submit" className="inline-flex justify-center rounded-full p-2 text-white transition-colors hover:bg-white hover:text-primary">
        <PaperAirplaneIcon className="h-6 w-6" />
      </button>
    </footer>
  )
}
