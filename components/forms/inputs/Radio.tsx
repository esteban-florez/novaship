import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  name: string
  value: string
  label: string
  icon?: React.ReactNode
  active: boolean
  onInput: () => void
}>

export default function Radio({ name, value, label, children, icon, active = false, onInput }: Props) {
  return (
    <>
      <label className={clsx('label mb-2 cursor-pointer rounded-lg border border-gray-400 p-4', active && 'border-2 border-primary')}>
        <div className="flex flex-row items-center gap-3">
          <div className="rounded-full bg-primary p-2">
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{label}</span>
            <span className="text-sm">{children}</span>
          </div>
        </div>
        <input name={name} type="radio" value={value} hidden onInput={() => { onInput() }} />
      </label>
    </>
  )
}
