type Props = React.PropsWithChildren<{
  title: string
  icon: React.ReactNode
}>

export default function Atributtes({ title, children, icon }: Props) {
  return (
    <div className="card flex-row items-center gap-3 rounded-xl bg-white p-4 shadow-lg">
      {icon}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
        <h4 className="-mt-1 line-clamp-1 text-base md:text-lg">{children}</h4>
      </div>
    </div>
  )
}
