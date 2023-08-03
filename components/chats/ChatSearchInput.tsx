import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function ChatSearchInput() {
  return (
    <div className="mb-2 flex w-full flex-row justify-around gap-2 p-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Buscar conversación"
          className="input input-sm w-full rounded-full bg-base-200 pl-8 font-semibold shadow-inner outline-none transition-colors delay-150 focus:ring focus:ring-primary"
        />
        <span className="absolute left-2 top-1.5 mx-auto">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </span>
      </div>
    </div>
  )
}
