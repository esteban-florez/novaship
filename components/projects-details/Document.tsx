import { EyeIcon } from '@heroicons/react/24/outline'

export default function Document() {
  return (
    <>
      <div className="flex flex-col items-center justify-between rounded-lg border border-solid border-gray-400 p-3 px-5 md:flex-row">
        <div className="flex flex-col">
          <h3 className="text-base font-bold sm:text-lg">Archivo importante.doc</h3>
          <div className="flex flex-row gap-1">
            <div className="h-4 w-4 rounded-full bg-success" />
            <p className="line-clamp-6">Myriam Yaqueno</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <button>
            <EyeIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  )
}
