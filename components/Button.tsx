import { BUTTON_DEFAULT } from '@/lib/constants/button'
import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  id?: string
  url?: string
  icon: React.ReactElement
  type?: 'MODAL' | 'BUTTON'
  extendClass?: boolean
  className?: string
  onClick?: () => void
}>

export default function Button({ id = 'modal', type = 'BUTTON', icon, url = '', className, extendClass = false, onClick, children }: Props) {
  const defaultClasses = clsx({
    [BUTTON_DEFAULT as string]: className === null || className === undefined,
    [className as string]: className !== null && className !== undefined,
  })

  if (url !== null && url !== '') {
    return (
      <Link href={url}>
        <button className={clsx(defaultClasses)}>
          {icon}
          {children}
        </button>
      </Link>
    )
  }

  if (type !== null && type === 'MODAL' && id !== null) {
    return (
      <>
        <label htmlFor={id} className={clsx(defaultClasses, 'cursor-pointer')}>
          {icon}
          {children}
        </label>
        <input type="checkbox" id={id} className="modal-toggle" />
      </>
    )
  }

  return (
    <button onClick={onClick} className={defaultClasses}>
      {icon}
      {children}
    </button>
  )
}
