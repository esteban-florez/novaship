import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  step: number
}>

export default function StepIndicator({ step }: Props) {
  return (
    <div className="flex w-full justify-between px-10 pb-4">
      {[1, 2, 3, 4, 5].map(number => {
        const isActive = number === (step + 1)
        return (
          <div key={number} className={clsx('flex h-14 w-14 items-center justify-center rounded-full border-4 border-black', isActive && 'bg-black font-semibold text-white')}>
            <p className="text-xl font-bold">{number}</p>
          </div>
        )
      })}
    </div>
  )
}
