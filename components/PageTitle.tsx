type Props = React.PropsWithChildren<{ title: string, subtitle?: string | null }>

export default function PageTitle({ title, children, subtitle = null }: Props) {
  return (
    <section className="flex items-center justify-between bg-primary p-4 text-white shadow">
      <div className="flex flex-col">
        <h1 className="font-title text-4xl font-bold tracking-tighter">
          {title}
        </h1>
        {subtitle !== null && (
          <p className="font-semibold">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
