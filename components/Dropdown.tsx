type Props = React.PropsWithChildren<{
  label: string
}>

export default function Dropdown({ label, children }: Props) {
  return (
    <div className="w-full sm:w-auto dropdown-end dropdown z-20">
      <label tabIndex={0} className="bg-white border-neutral-400 hover:border-neutral-400 shadow-md btn sm:btn-wide btn-block">
        <button>{label}</button>
      </label>
      <div className="dropdown-content z-10 flex w-full flex-col rounded-lg border border-base-300 bg-white gap-y-2 p-2 shadow-lg">
        {children}
      </div>
    </div>
  )
}