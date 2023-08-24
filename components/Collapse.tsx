type Props = React.PropsWithChildren<{
  title: React.ReactNode
}>

export default function Collapse({ title, children }: Props) {
  return (
    <div className="collapse bg-white shadow-lg">
      <input type="checkbox" />
      <div className="collapse-title pr-4 text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        {children}
      </div>
    </div>
  )
}
