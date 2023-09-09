type Props = React.PropsWithChildren<{
  title: React.ReactNode
  bg: string
}>

export default function Collapse({ title, bg, children }: Props) {
  return (
    <div className={`collapse-arrow collapse ${bg} shadow-lg`}>
      <input type="checkbox" />
      <div className="collapse-title pr-4 text-xl font-semibold text-neutral-600">
        {title}
      </div>
      <div className="collapse-content">
        {children}
      </div>
    </div>
  )
}
