type Props = React.PropsWithChildren<{
  title: string
}>

export default function Container({ title, children }: Props) {
  return (
    <>
      <h3 className="font-bold mb-2">
        {title}
      </h3>
      <div className="p-4 rounded-lg border-neutral-300 border shadow-inner">
        {/* <span className="font-semibold text-lg mb-4">
          {title}
        </span> */}
        {children}
      </div>
    </>
  )
}
