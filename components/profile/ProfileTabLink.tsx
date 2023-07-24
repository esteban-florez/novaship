import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  currentPath: string
  href: string
}>

export default function ProfileTabLink({ currentPath, href, children }: Props) {
  const isActive = currentPath === href

  return (
    <Link
      href={href} className={clsx('tab tab-lg border-none transition-all', {
        'tab-active btn normal-case font-bold': isActive,
        'hover:tab-active': !isActive,
      })}
    >
      {children}
    </Link>
  )
}
