import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  id?: string
  icon: React.ReactElement
  bgColor: string
  textColor: string
  url?: string
  type?: 'MODAL' | 'BUTTON'
  onClick?: () => void
}>

export default function Button({ id = 'modal', type = 'BUTTON', bgColor, textColor, icon, url = '', onClick, children }: Props) {
  const className = 'px-6 py-2 inline-flex justify-center items-center rounded-md gap-x-2'

  if (url !== null && url !== '') {
    return (
      <Link href={url}>
        <button className={clsx(className, bgColor, textColor)}>
          {icon}
          {children}
        </button>
      </Link>
    )
  }

  if (type !== null && type === 'MODAL' && id !== null) {
    return (
      <>
        <label htmlFor={id} className={clsx(className, bgColor, textColor, 'cursor-pointer')}>
          {icon}
          {children}
        </label>
        <input type="checkbox" id={id} className="modal-toggle" />
      </>
    )
  }

  return (
    <button onClick={onClick} className={clsx(className, bgColor, textColor)}>
      {icon}
      {children}
    </button>
  )
}
