export default function FormSkeleton() {
  return (
    // Layout
    <div className="w-full mt-2 sm:mx-auto sm:mt-0 sm:px-20 sm:py-10">
      {/* Form */}
      <div className="w-full flex flex-col bg-base-100 p-4 shadow-xl sm:rounded-lg gap-4">
        {/* Section */}
        <div className="mb-8 mt-4 flex flex-col gap-4 last:mb-4 lg:px-4">
          <div className="mb-2 h-8 w-3/6 rounded-md bg-neutral-500" />
          <div className="h-2 w-2/6 rounded-md bg-neutral-500" />
          <div className="h-8 w-full rounded-md bg-neutral-200" />
          <div className="mt-2 h-2 w-2/6 rounded-md bg-neutral-500" />
          <div className="h-24 w-full rounded-md bg-neutral-200" />
          <div className="mt-2 h-2 w-2/6 rounded-md bg-neutral-500" />
          <div className="h-8 w-full rounded-md bg-neutral-200" />
        </div>
        {/* Section */}
        <div className="mb-8 mt-4 flex flex-col gap-4 last:mb-4 lg:px-4">
          <div className="mb-2 h-8 w-3/6 rounded-md bg-neutral-500" />
          <div className="h-2 w-2/6 rounded-md bg-neutral-500" />
          <div className="h-8 w-full rounded-md bg-neutral-200" />
          <div className="mt-2 h-2 w-2/6 rounded-md bg-neutral-500" />
          <div className="h-8 w-full rounded-md bg-neutral-200" />
        </div>
        {/* Footer */}
        <div className="border-t" />
        <div className="flex items-center justify-center sm:justify-end gap-2">
          <div className="h-8 w-24 bg-neutral-300 rounded-md" />
          <div className="h-8 w-24 bg-primary rounded-md" />
        </div>
      </div>
    </div>
  )
}
