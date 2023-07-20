import Document from './Document'

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
            <Document />
            <Document />
          </div>
        </div>
      </div>
    </>
  )
}
