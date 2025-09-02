type Props = React.PropsWithChildren<{
  icon: React.FC
  label: string
  data: React.ReactNode
}>

export default function IconData({ icon, label, data }: Props) {
  const Icon = icon
  return (
    <div className="flex gap-1 items-center">
      {/* @ts-expect-error Leave me alone TS */}
      <Icon className="h-8 w-8 bg-primary text-white stroke-2 rounded-full p-1 shrink-0" />
      <div>
        <span className="text-sm text-neutral-700">{label}</span>
        <p className="font-semibold -mt-1 leading-tight">{data}</p>
      </div>
    </div>
  )
}
