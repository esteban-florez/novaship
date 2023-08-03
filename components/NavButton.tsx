import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  isActive?: boolean
  url: string
}>

export default function NavButton({ children, isActive = false, url }: Props) {
  return (
    <Link
      className={clsx({
        'btn-md btn rounded-b-none font-semibold normal-case sm:text-lg': true,
        'btn-active border-none bg-white hover:bg-zinc-400': isActive,
        'btn-ghost hover:btn-active': !isActive,
      })} href={url}
    >
      {children}
    </Link>
  )
}
