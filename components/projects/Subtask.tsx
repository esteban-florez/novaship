type Props = React.PropsWithChildren<{ subtask: string }>

export default function Subtask({ subtask }: Props) {
  // RANT -> mal nombramiento de prop
  return (
    <>
      <div className="flex items-center space-x-3">
        <input type="checkbox" name="checked-demo" value="1" className="h-5 w-5 appearance-none rounded-lg border border-zinc-400 checked:border-transparent checked:bg-primary focus:outline-none" />
        <span className="line-clamp-6 text-base text-gray-900">{subtask}</span>
      </div>
    </>
  )
}
