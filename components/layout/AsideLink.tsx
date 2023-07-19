import Link from 'next/link'

type Props = React.PropsWithChildren<{
  link: {
    href: string
    title: string
    icon: React.ReactNode
  }
  active: boolean
}>

export default function AsideLink({ link, active }: Props) {
  return (
    <li className="rounded-l-xl font-bold">
      <Link href={link.href} className={`py-4 ${active ? 'active pointer-events-none' : ''}`}>
        {link.icon}
        {link.title}
      </Link>
    </li>
  )
}
