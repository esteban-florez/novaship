import { type Colors, type Styles } from '@/lib/types'
import clsx from 'clsx'
import Link from 'next/link'

// DRY classname
const className = {
  DEFAULT: 'px-6 py-2 inline-flex justify-center items-center rounded-md gap-x-2 border shadow-md text-sm font-semibold transition-colors',
  ICON: 'p-2 rounded-sm transition-colors delay-75 duration-delay-75 text-sm font-semibold',
  OUTLINE: 'px-6 py-2 inline-flex justify-center items-center rounded-md gap-x-2 border bg-transparent transition-colors delay-75 duration-delay-75 shadow-md text-sm font-semibold',
  TAB: 'px-6 py-2 inline-flex justify-center items-center rounded-lg gap-x-2 font-semibold shadow-lg sm:text-lg transition-colors delay-75 duration-delay-75 text-sm',
  DISABLED: 'px-6 py-2 inline-flex justify-center items-center rounded-md gap-x-2 border opacity-50 cursor-not-allowed',
  colors: {
    PRIMARY: 'bg-primary text-primary-content border-primary focus:bg-primary focus:text-primary-content',
    SECONDARY: 'bg-secondary text-secondary-content border-secondary focus:bg-secondary focus:text-secondary-content',
    ACCENT: 'bg-accent text-accent-content border-accent focus:bg-accent focus:text-accent-content',
    CANCEL: 'bg-gray-200 text-neutral-600 focus:bg-gray-200 focus:text-neutral-600',
    ERROR: 'bg-error text-white border-error focus:bg-error focus:text-white-content',
    WHITE: 'bg-white text-neutral-600 focus:bg-white focus:text-neutral-600-content',
    NEUTRAL: 'bg-neutral text-neutral-content border-neutral focus:bg-neutral focus:text-neutral-content',
    EMPTY: null,
  },
  hover: {
    PRIMARY: 'hover:bg-primary hover:text-primary-content',
    SECONDARY: 'hover:bg-secondary hover:text-secondary-content',
    ACCENT: 'hover:bg-accent hover:text-accent-content',
    CANCEL: 'hover:bg-primary hover:text-primary-content',
    ERROR: 'hover:bg-error hover:text-white',
    WHITE: 'hover:bg-white hover:text-neutral-600',
    NEUTRAL: 'hover:bg-neutral hover:text-neutral-content',
    EMPTY: null,
  },
}

type Props = React.PropsWithChildren<{
  id?: string
  url?: string
  type?: 'MODAL' | 'BUTTON'
  style?: Styles
  color: Colors
  hover?: Colors
  isDisabled?: boolean
  onClick?: () => void
}>

// DRY
// TODO -> reemplazar las clases por clases de daisy ?
export default function Button({ id = 'modal', type = 'BUTTON', url = '', style = 'DEFAULT', color, hover = 'EMPTY', isDisabled = false, onClick, children }: Props) {
  if (url !== null && url !== '') {
    return (
      <Link href={url}>
        <button className={clsx(className[style], 'w-full', className.colors[color], className.hover[hover])} disabled={isDisabled}>
          {children}
        </button>
      </Link>
    )
  }

  if (type !== null && type === 'MODAL' && id !== null) {
    return (
      <>
        <label htmlFor={id} className={clsx(className[style], className.colors[color], className.hover[hover], 'cursor-pointer')}>
          {children}
        </label>
        <input type="checkbox" id={id} className="modal-toggle" />
      </>
    )
  }

  return (
    <button onClick={onClick} className={clsx(className[style], className.colors[color], className.hover[hover])} disabled={isDisabled}>
      {children}
    </button>
  )
}
