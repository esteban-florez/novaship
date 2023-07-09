type Props = React.PropsWithChildren<{
  color: string
}>

type NavButtonProps = React.PropsWithChildren<{
  isActive?: boolean
}>

export function NavButton({ children, isActive = false }: NavButtonProps) {
  const activeClasses = 'btn-active bg-white hover:bg-neutral-300'
  const inactiveClasses = 'hover:btn-active btn-ghost hover:'

  return (
    <button className={`${isActive ? activeClasses : inactiveClasses} btn-sm btn text-sm font-semibold normal-case sm:btn-md sm:text-lg`}>
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
