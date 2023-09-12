import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  items: string[]
  className?: string
}>

export default function InlineList({ items, className = '' }: Props) {
  return (
    <ul className="-mt-1 line-clamp-2 leading-none text-primary">
      {items.map((item, index, array) => {
        const isLast = index === array.length - 1

        return (
          <li key={item} className={clsx('inline text-sm font-semibold', className)}>
            {item}{isLast ? '.' : ', '}
          </li>
        )
      })}
    </ul>
  )
}
