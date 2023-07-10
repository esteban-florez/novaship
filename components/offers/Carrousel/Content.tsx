interface Props {
  description: string
}

export default function Content({ description }: Props) {
  return (
    <main className="my-4 w-full rounded-lg p-4 pl-0 sm:w-10/12 lg:w-2/4">
      <p className="line-clamp-3 text-sm text-white">{description}</p>
    </main>
  )
}
