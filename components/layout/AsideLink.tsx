import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

type Props = React.PropsWithChildren<{
  link: SidebarLinkWithSubmenu
  active: boolean
  iconOnly: boolean
  onClick: () => void
}>

export default function AsideLink({ link, active, iconOnly, onClick }: Props) {
  const [openDropdown, setOpenDropdown] = useState(false)
  // link.visible ??= true

  return (
    <li className="rounded-l-xl font-bold even:sm:my-2">
      {link.submenu === undefined && link.visible === true &&
        <Link
          href={link.href} onClick={onClick} className={clsx({
            'rounded-r-none px-6 py-4 gap-4': true,
            'bg-base-300 hover:bg-primary': active,
          })}
        >
          {link.icon}
          <span className={clsx(iconOnly ? '' : 'hidden')}>{link.title}</span>
        </Link>}
      {link.submenu !== undefined && link.visible === true &&
        <>
          <div onClick={() => { setOpenDropdown(!openDropdown) }} className={`rounded-r-none px-6 py-4 ${iconOnly ? '' : 'mx-auto'} ${active ? 'active hover:active' : ''}`}>
            {link.icon}
            <span className={clsx(iconOnly ? '' : 'hidden')}>{link.title}</span>
            <ChevronDownIcon className="h-6 w-6 self-end" />
          </div>
          <ul className={clsx({
            'transition-all delay-75 duration-75': true,
            hidden: !openDropdown,
            'gap-y-4': openDropdown,
          })}
          >
            {link.submenu
              .filter(link => {
                link.visible ??= true
                return link.visible
              })
              .map(item => (
                <li key={item.title} className="rounded-l-xl font-bold first:mt-4 even:sm:my-2">
                  <Link href={item.href} onClick={onClick} className={`rounded-r-none ${active ? ' pointer-events-auto cursor-pointer' : ''}`}>
                    {item.icon}
                    <span className={clsx(iconOnly ? '' : 'hidden', 'text-sm')}>{item.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </>}
    </li>
  )
}
