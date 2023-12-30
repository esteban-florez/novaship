import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  link: SidebarLinkWithSubmenu
  onClick: (link: string) => void
  openDropdown: string | null
}>

export default function AsideLink({ link, onClick, openDropdown }: Props) {
  return (
    <li className="rounded-l-xl font-bold even:sm:my-2">
      {link.submenu === undefined && link.visible === true && (
        <Link
          href={link.href}
          onClick={() => {
            onClick(link.href)
          }}
          className={clsx({
            'rounded-r-none px-6 py-4 gap-4': true,
            'bg-base-300 hover:bg-primary': openDropdown === link.href,
          })}
        >
          {link.icon}
          <span>{link.title}</span>
        </Link>
      )}
      {link.submenu !== undefined && link.visible === true && (
        <>
          <div
            onClick={() => {
              onClick(link.href)
            }}
            className={clsx({
              'rounded-r-none px-6 py-4': true,
              'bg-base-300': openDropdown === link.href,
            })}
          >
            {link.icon}
            <span>{link.title}</span>
            <ChevronDownIcon className="h-6 w-6 self-end" />
          </div>
          <ul
            className={clsx({
              'transition-all delay-75 duration-75': true,
              'hidden h-0': openDropdown !== link.href,
              'gap-y-4 h-auto': openDropdown === link.href,
            })}
          >
            {link.submenu
              .filter((link) => {
                link.visible ??= true
                return link.visible
              })
              .map((item) => (
                <li
                  key={item.title}
                  className="rounded-l-xl font-bold first:mt-4 even:sm:my-2"
                >
                  <Link
                    href={item.href}
                    className={`rounded-r-none ${
                      openDropdown === link.href
                        ? ' pointer-events-auto cursor-pointer'
                        : ''
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </>
      )}
    </li>
  )
}
