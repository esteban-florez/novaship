export default function BarGraphSkeleton() {
  return (
    <div className="max-w-sm rounded p-4 shadow md:p-6">
      <div className="mx-auto h-2.5 w-32 rounded-full bg-primary" />
      <div className="flex items-baseline mt-8">
        <div className="w-full bg-gray-200 rounded-t-lg h-72" />
        <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg" />
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6" />
        <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg" />
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6" />
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6" />
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6" />
      </div>
    </div>
  )
}
