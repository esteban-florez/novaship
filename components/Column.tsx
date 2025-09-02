export default function Column({ children }: React.PropsWithChildren) {
  return (
    <div className="h-max bg-white p-4 rounded-lg shadow lg:w-1/2">
      {children}
    </div>
  )
}
