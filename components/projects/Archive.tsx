function Doc() {
  return (
    <>
      <div className="rounded-xl bg-base-300 px-6 py-3">
        <div className="flex flex-col">
          <h3 className="font-title text-lg font-bold sm:text-xl">Archivo importante.doc</h3>
          <div className="flex flex-row items-center gap-1">
            <div className="h-4 w-4 rounded-full bg-success" />
            <p className="line-clamp-6 text-sm">Myriam Yaqueno</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Archive() {
  return (
    <>
      <div className="flex flex-col gap-2 rounded-lg bg-white p-5 shadow">
        <h3 className="font-title text-lg font-bold sm:text-xl">
          Viernes / 30-06-2023
        </h3>
        <div className="flex flex-row gap-4">
          <div className="w-1 rounded-sm bg-white" />
          <div className="flex w-full flex-col gap-2 py-2">
            <Doc />
            <Doc />
          </div>
        </div>
        <h3 className="font-title text-lg font-bold sm:text-xl">
          Miércoles / 28-06-2023
        </h3>
        <div className="flex flex-row gap-4">
          <div className="w-1 rounded-sm bg-white" />
          <div className="flex w-full flex-col gap-2 py-2">
            <Doc />
            <Doc />
          </div>
        </div>
      </div>
    </>
  )
}
