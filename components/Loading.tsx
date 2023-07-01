interface Props {
  message: string
}

export default function Loading({ message }: Props) {
  return (
    <div className="my-4 flex rounded-md bg-base-300 px-4 py-2">
      <span className="loading loading-spinner loading-sm text-accent" />
      <p className="ms-2">{message}</p>
    </div>
  )
}
