import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  items: string[]
  className?: string
  hideList?: boolean
}>

export default function InlineList({
  items,
  className = '',
  hideList = false,
}: Props) {
  return (
    <ul
      className={clsx(
        '-mt-1 leading-none text-primary',
        hideList && 'truncate'
      )}
    >
      {items.map((item, index, array) => {
        const isLast = index === array.length - 1

        return (
          <li
            key={item}
            className={clsx('inline text-sm font-semibold', className)}
          >
            {item}
            {isLast ? '.' : ', '}
          </li>
        )
      })}
    </ul>
  )
}
