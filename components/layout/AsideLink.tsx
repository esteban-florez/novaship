import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

type Props = React.PropsWithChildren<{
  link: {
    href: string
    title: string
    icon: React.ReactNode
    submenu?: undefined | Array<{
      href: string
      title: string
      icon: JSX.Element
    }>
  }
  active: boolean
  iconOnly: boolean
  onClick: () => void
}>

// TODO -> submenu pero bien
export default function AsideLink({ link, active, iconOnly, onClick }: Props) {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <li className="rounded-l-xl font-bold even:sm:my-2">
      {link.submenu === undefined &&
        <Link href={link.href} onClick={onClick} className={`rounded-r-none px-6 py-4 ${active ? 'pointer-events-auto cursor-pointer bg-base-300 px-8 hover:bg-primary' : ''}`}>
          {link.icon}
          <span className={clsx(iconOnly ? '' : 'hidden')}>{link.title}</span>
        </Link>}
      {'submenu' in link &&
        // TODO -> Hacer que se pueda ir al listado sin tener que abrir el submenu
        <>
          <div className={`flex items-center justify-between rounded-r-none px-6 py-2 ${active ? 'bg-base-300 pl-8' : ''}`}>
            <Link href={link.href} className="flex gap-2 py-2">
              {link.icon}
              <span className={clsx(iconOnly ? '' : 'hidden')}>{link.title}</span>
            </Link>
            <ChevronDownIcon onClick={() => { setOpenDropdown(!openDropdown) }} className="h-10 w-10 self-end py-2" />
          </div>
          <ul className={clsx({
            'transition-all delay-75 duration-75': true,
            hidden: !openDropdown,
            'gap-y-4': openDropdown,
          })}
          >
            {link.submenu?.map(item => {
              return (
                <li key={item.title} className="rounded-l-xl font-bold first:mt-4 even:sm:my-2">
                  <Link href={item.href} onClick={onClick} className={`rounded-r-none ${active ? ' pointer-events-auto cursor-pointer' : ''}`}>
                    {item.icon}
                    <span className={clsx(iconOnly ? '' : 'hidden', 'text-sm')}>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </>}
    </li>
  )
}
