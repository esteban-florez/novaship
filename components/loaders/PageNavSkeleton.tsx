export default function PageNavSkeleton() {
  return (
    // Layout
    <div className="my-2 flex flex-col sm:flex-row sm:justify-between w-full gap-2 border-b bg-white p-4 shadow-sm">
      {/* Search */}
      <div className="basis-1/4 h-8 rounded-full bg-neutral-300 px-4 py-1" />
      {/* Dropdown */}
      <div className="basis-1/4 h-8 sm:pe-4 rounded-md bg-primary" />
    </div>
  )
}
