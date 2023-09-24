export default function CardSkeleton() {
  const items = [''].fill('x')

  return (
    <div className="flex flex-col gap-x-4 px-2 sm:flex-row">
      {items.map(item => {
        return (
          <div key={item} className="flex w-2/6 flex-col rounded-lg bg-white">
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
              <div className="h-6 w-16 rounded-md bg-purple-300" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
