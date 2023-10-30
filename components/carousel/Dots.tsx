import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  current: number
  length: number
  onClick: (number: number) => void
}>

export default function Dots({ current, length, onClick }: Props) {
  return (
    <ul className="flex-center gap-2">
      {new Array(length).fill(null).map((_, index) => (
        <li
          key={index}
          onClick={() => {
            onClick(index)
          }}
          className={clsx({
            'h-4 w-4 rounded-full cursor-pointer hover:bg-white': true,
            'bg-white/60': current !== index,
            'w-6 border border-neutral-400 bg-white not-': current === index,
          })}
        />
      ))}
    </ul>
  )
}
