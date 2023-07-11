type Props = React.PropsWithChildren<{
  color: string
}>

type NavButtonProps = React.PropsWithChildren<{
  isActive?: boolean
}>

export function NavButton({ children, isActive = false }: NavButtonProps) {
  const activeClasses = 'btn-active bg-white border-none hover:bg-zinc-400'
  const inactiveClasses = 'hover:btn-active btn-ghost hover:'

  return (
    <button className={`${isActive ? activeClasses : inactiveClasses} btn-md btn rounded-b-none text-sm font-semibold normal-case sm:text-lg`}>
      {children}
    </button>
  )
}

export function ActionButton({ children, color }: Props) {
  return (
    <button className={`${color} btn-sm btn border-none px-6`}>
      {children}
    </button>
  )
}
