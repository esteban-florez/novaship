import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  name: string
  value: string
  label: string
  active: boolean
  onInput: () => void
}>

export default function Radio({ name, value, label, children, active = false, onInput }: Props) {
  return (
    <>
      <label className={clsx('label mb-2 cursor-pointer rounded-lg border border-gray-300 p-4', active && 'border-primary')}>
        <div className="flex flex-col">
          <span className="text-base">{label}</span>
          <span className="">{children}</span>
        </div>
        <input name={name} type="radio" value={value} hidden onInput={() => { onInput() }} />
      </label>
    </>
  )
}
