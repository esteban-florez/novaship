type Props = React.PropsWithChildren<{
  label: string
}>

export default function Dropdown({ label, children }: Props) {
  return (
    <div className="dropdown-end dropdown z-20 w-full sm:w-auto">
      <label tabIndex={0} className="btn-block btn border-neutral-400 bg-white shadow-md sm:btn-wide hover:border-neutral-400">
        <button>{label}</button>
      </label>
      <div className="dropdown-content z-10 flex w-full flex-col gap-y-2 rounded-lg border border-base-300 bg-white p-2 shadow-lg">
        {children}
      </div>
    </div>
  )
}
