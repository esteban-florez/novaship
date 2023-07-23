import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  current: number
  length: number
}>

export default function Dots({ current, length }: Props) {
  return (
    <ul className="flex-center gap-2">
      {new Array(length).fill(null).map((_, index) => (
        <li
          key={index}
          className={clsx('h-4 w-4 rounded-full bg-white/70', current === index && 'w-6 border border-white')}
        />
      ))}
    </ul>
  )
}
