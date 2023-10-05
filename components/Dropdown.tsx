import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"

type Props = React.PropsWithChildren<{
  label: string
}>

// TODO -> transicion o usar el swap de daisy y alinear el icon
export default function Dropdown({ label, children }: Props) {
  return (
    <div className="w-full sm:w-auto dropdown-end dropdown">
      <label tabIndex={0} className="group bg-white border-neutral-400 hover:border-neutral-400 shadow-md btn sm:btn-wide btn-block transition-all delay-75 duration-75 ">
        <button className="peer">{label}</button>
        <ChevronDownIcon className="w-6 h-6 block peer-focus:hidden" />
        <ChevronUpIcon className="w-6 h-6 hidden peer-focus:block" />
      </label>
      <div className="dropdown-content z-10 flex w-full flex-col rounded-lg border border-base-300 bg-white gap-y-2 p-2 shadow-lg">
        {children}
      </div>
    </div>
  )
}