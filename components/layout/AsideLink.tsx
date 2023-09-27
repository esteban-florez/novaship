import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  link: {
    href: string
    title: string
    icon: React.ReactNode
  }
  active: boolean
  iconOnly: boolean
}>

export default function AsideLink({ link, active, iconOnly }: Props) {
  return (
    <li className="rounded-l-xl font-bold even:sm:my-2">
      <Link href={link.href} className={`py-4 ${iconOnly ? '' : 'mx-auto'} ${active ? 'active pointer-events-auto cursor-pointer hover:active' : ''}`}>
        {link.icon}
        <span className={clsx(iconOnly ? '' : 'hidden')}>{link.title}</span>
      </Link>
    </li>
  )
}
