type Props = React.PropsWithChildren<{
  icon: React.ReactElement
  title: string
}>

export default function MiniCard({ title, icon, children }: Props) {
  return (
    <div className="group flex flex-col items-center justify-center border border-neutral-300 bg-neutral-100 p-2 text-center text-neutral shadow hover:shadow-xl md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-gray-100 text-primary ">
        {icon}
      </div>
      <h5 className="mb-2 text-xl font-bold">{title}</h5>
      {children}
    </div>
  )
}
