export default function PaginationSkeleton() {
  return (
    <div className="mt-4 bg-white">
      <div className="my-4 flex items-center justify-center">
        <div className="h-8 w-10 rounded-s-lg bg-primary" />
        <div className="h-8 w-20 rounded bg-neutral-200" />
        <div className="h-8 w-10 rounded-e-lg bg-primary" />
      </div>
    </div>
  )
}
