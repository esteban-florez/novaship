export default function CardSkeleton() {
  const items = Array.from({ length: 6 }, String)

  return (
    <div className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1
      md:columns-2 lg:columns-3 xl:rounded-tl-none"
    >
      {items.map(item => {
        return (
          <div key={item} className="mb-4 break-inside-avoid">
            <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
              <div className="h-14 w-full rounded-t-lg bg-neutral-300" />
              <div className="mx-4 mb-1 mt-4 h-4 w-1/3 rounded-lg bg-neutral-300" />
              <div className="ms-4 h-4 w-4/6 rounded-lg bg-neutral-300" />
              <div className="mx-auto mt-4 h-16 w-5/6 rounded-lg bg-neutral-200" />
              <div className="m-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="z-0 h-8 w-8 rounded-full border-2 border-white bg-neutral-300" />
                  <div className="z-10 h-8 w-8 rounded-full border-2 border-white bg-neutral-300" />
                  <div className="z-20 h-8 w-8 rounded-full border-2 border-white bg-neutral-300" />
                </div>
                <div className="h-6 w-16 rounded-md bg-primary" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
