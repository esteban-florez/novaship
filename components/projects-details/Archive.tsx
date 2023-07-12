import { EyeIcon } from '@heroicons/react/24/outline'

function Doc() {
  return (
    <>
      <div className="flex flex-col items-center justify-between rounded-lg border border-solid border-gray-400 p-3 px-5 md:flex-row">
        <div className="flex flex-col">
          <h3 className="font-title text-base font-bold sm:text-lg">Archivo importante.doc</h3>
          <div className="flex flex-row gap-1">
            <div className="h-4 w-4 rounded-full bg-success" />
            <p className="line-clamp-6 text-sm">Myriam Yaqueno</p>
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

export default function Archive() {
  return (
    <>
      <div className="flex flex-col rounded-lg rounded-tl-none bg-white p-6 shadow">
        <h3 className="font-title text-lg font-bold sm:text-xl">
          Viernes / 30-06-2023
        </h3>
        <div className="flex flex-row gap-4">
          <div className="ml-1 w-1 rounded-sm bg-accent" />
          <div className="flex w-full flex-col gap-2 py-3">
            <Doc />
            <Doc />
          </div>
        </div>
      </div>
    </>
  )
}
