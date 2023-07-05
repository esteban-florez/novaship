interface Props {
  description: string
}

export default function Content({ description }: Props) {
  return (
    <main className="my-4 w-full rounded-lg bg-white/50 p-4 lg:w-2/4">
      <p className="line-clamp-3 text-sm">{description}</p>
    </main>
  )
}
