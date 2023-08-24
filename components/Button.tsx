import { type Colors, type Styles } from '@/lib/types'
import clsx from 'clsx'
import Link from 'next/link'

// DRY
const className = {
  DEFAULT: 'px-6 py-2 inline-flex justify-center items-center rounded-md gap-x-2 border shadow-md',
  ICON: 'p-2 rounded-sm transition-colors delay-75 duration-delay-75',
  OUTLINE: 'px-6 py-2 inline-flex justify-center items-center rounded-md gap-x-2 border bg-transparent transition-colors delay-75 duration-delay-75 ',
  TAB: 'px-6 py-2 inline-flex justify-center items-center rounded-lg gap-x-2 font-semibold shadow-lg sm:text-lg transition-colors delay-75 duration-delay-75',
  DISABLED: 'px-6 py-2 inline-flex justify-center items-center rounded-md gap-x-2 border opacity-50 cursor-not-allowed ',
  colors: {
    PRIMARY: 'bg-primary text-primary-content border-primary',
    SECONDARY: 'bg-secondary text-secondary-content border-secondary',
    ACCENT: 'bg-action text-accent-content border-accent',
    CANCEL: 'bg-gray-200 text-neutral-600',
    ERROR: 'text-error',
    WHITE: 'bg-white text-neutral-600',
    GHOST: 'bg-white/20 text-white',
    EMPTY: null,
  },
  hover: {
    PRIMARY: 'hover:bg-primary hover:text-primary-content',
    SECONDARY: 'hover:bg-secondary hover:text-secondary-content',
    ACCENT: 'hover:bg-accent hover:text-accent-content',
    CANCEL: 'hover:bg-primary hover:text-primary-content',
    ERROR: 'hover:bg-error hover:text-white',
    WHITE: 'hover:bg-white hover:text-neutral-600',
    GHOST: 'hover:bg-white/20 hover:text-white',
    EMPTY: null,
  },
}

type Props = React.PropsWithChildren<{
  id?: string
  url?: string
  icon?: React.ReactElement
  type?: 'MODAL' | 'BUTTON'
  style: Styles
  color: Colors
  hover?: Colors
  width?: 'w-full'
  isDisabled?: boolean
  onClick?: () => void
}>

// DRY
// TODO -> reemplazar las clases por clases de daisy
export default function Button({ id = 'modal', type = 'BUTTON', icon, url = '', style, color, hover = 'EMPTY', width, isDisabled = false, onClick, children }: Props) {
  const hasWidth = width !== null

  if (url !== null && url !== '') {
    return (
      <Link href={url}>
        <button className={clsx(className[style], className.colors[color], className.hover[hover], hasWidth ? width : '')} disabled={isDisabled}>
          {icon}
          {children}
        </button>
      </Link>
    )
  }

  if (type !== null && type === 'MODAL' && id !== null) {
    return (
      <>
        <label htmlFor={id} className={clsx(className[style], className.colors[color], className.hover[hover], hasWidth ? width : '', 'cursor-pointer')}>
          {icon}
          {children}
        </label>
        <input type="checkbox" id={id} className="modal-toggle" />
      </>
    )
  }

  return (
    <button onClick={onClick} className={clsx(className[style], className.colors[color], className.hover[hover], hasWidth ? width : '')} disabled={isDisabled}>
      {icon}
      {children}
    </button>
  )
}
