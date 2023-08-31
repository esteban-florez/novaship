type Props = React.PropsWithChildren<{
  title: string
  icon: React.ReactNode
}>

export default function Atributtes({ title, children, icon }: Props) {
  return (
    <div className="card flex flex-row items-center gap-3 bg-white p-4 shadow-lg">
      {icon}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold md:text-xl">{title}</h3>
        <h4 className="line-clamp-1 text-base md:text-lg">{children}</h4>
      </div>
    </div>
  )
}
