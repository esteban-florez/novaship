type Props = React.PropsWithChildren<{
  title: string
}>

export default function NoData({ title, children }: Props) {
  return (
    <>
      <h6 className="mt-7 text-lg text-center font-bold text-primary">
        {title}
      </h6>
      <div className="pb-8 flex flex-col items-center justify-center my-auto">
        <p className="px-4 text-center font-semibold text-neutral-500">
          {children}
        </p>
      </div>
    </>
  )
}
