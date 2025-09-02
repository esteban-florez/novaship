type Props = React.PropsWithChildren<{
  title: React.ReactNode
  bg?: string
}>

export default function Collapse({ title, bg = 'bg-white', children }: Props) {
  return (
    <div className={`collapse-arrow border collapse ${bg} shadow-lg`}>
      <input type="checkbox" />
      <div className="collapse-title pr-4 text-xl font-semibold text-neutral-600">
        {title}
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  )
}
