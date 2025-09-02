type Props = React.PropsWithChildren<{
  title: string
  icon: React.ReactNode
}>

export default function Atributtes({ title, children, icon }: Props) {
  return (
    <div className="flex w-full columns-1 flex-col items-center gap-1 sm:border-r-2 sm:last:border-none p-4 lg:flex-row lg:px-4 lg:py-4">
      <span className="h-8 w-8 text-primary">{icon}</span>
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-base lg:text-lg">{title}</h3>
        <h4 className="-mt-1 text-base font-bold">{children}</h4>
        {children === null && (
          <div className="-mt-1 text-sm font-bold text-neutral-400">
            no especificado
          </div>
        )}
      </div>
    </div>
  )
}
