export default function Column({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-white p-4 rounded-lg shadow lg:w-1/2 flex flex-col w-full justify-center">
      <div className="h-max">
        {children}
      </div>
    </div>
  )
}
