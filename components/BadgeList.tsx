type Props = React.PropsWithChildren<{
  items: Array<{ id: string, title: string }>
}>

export default function BadgeList({ items }: Props) {
  return (
    <div className="flex flex-wrap gap-1">
      {items.map(item => (
        <span key={item.id} className="rounded-3xl w-fit text-primary text-sm px-4 font-semibold border-primary border bg-primary/10">
          {item.title}
        </span>
      ))}
    </div>
  )
}
