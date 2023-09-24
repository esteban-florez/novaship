export default function PageTitleSkeleton() {
  return (
    <div className="flex w-full flex-col gap-y-2 border-b bg-white p-4 shadow-sm">
      <div className="h-8 w-2/6 rounded-md bg-neutral-300" />
      <div className="h-6 w-4/6 rounded-md bg-neutral-300" />
      <div className="mt-3 grid grid-cols-4 gap-x-2">
        <div className="col-span-1 h-4 rounded bg-neutral-300" />
        <div className="col-span-1 h-4 rounded bg-primary" />
        <div className="col-span-1 h-4 rounded bg-neutral-300" />
        <div className="col-span-1 h-4 rounded bg-primary" />
      </div>
    </div>
  )
}
