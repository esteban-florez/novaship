import Link from 'next/link'

type Props = React.PropsWithChildren<{
  color: string
}>

type NavButtonProps = React.PropsWithChildren<{
  isActive?: boolean
  url: string
}>

export function NavButton({ children, isActive = false, url }: NavButtonProps) {
  const activeClasses = 'btn-active bg-white border-none hover:bg-zinc-400'
  const inactiveClasses = 'hover:btn-active btn-ghost hover:'

  return (
    <Link className={`${isActive ? activeClasses : inactiveClasses} btn-md btn rounded-b-none text-sm font-semibold normal-case sm:text-lg`} href={url}>
      {children}
    </Link>
  )
}

export function ActionButton({ children, color }: Props) {
  return (
    <button className={`${color} btn-sm btn border-none px-6`}>
      {children}
    </button>
  )
}
