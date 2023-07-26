export default function Title({ children }: React.PropsWithChildren) {
  return (
    <h2 className="my-8 pb-8 text-center text-3xl font-bold text-primary">
      {children}
    </h2>
  )
}
