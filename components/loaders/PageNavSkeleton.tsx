export default function PageNavSkeleton() {
  return (
    <div className="mb-8 mt-4 grid w-full grid-cols-5 gap-2 border-b bg-white p-4 shadow-sm">
      <div className="col-span-1 h-8 rounded-full bg-neutral-300 px-4 py-1" />
      <div className="col-span-3 row-start-2 h-8 rounded-md bg-primary" />
    </div>
  )
}
