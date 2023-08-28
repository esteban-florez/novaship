import Document from './Document'

export default function Archive() {
  return (
    <>
      <h3 className="text-lg text-gray-600 sm:text-xl">
        Viernes 30 de junio de 2023.
      </h3>
      <div className="flex flex-row gap-4">
        <div className="ml-1 w-1 rounded-sm bg-accent" />
        <div className="flex w-full flex-col gap-2 py-3">
          <Document />
          <Document />
        </div>
      </div>
    </>
  )
}
