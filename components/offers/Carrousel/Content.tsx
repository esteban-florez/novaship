interface Props {
  description: string
}

export default function Content({ description }: Props) {
  return (
    <main className="my-4 w-2/4 rounded-lg bg-white/10 p-4">
      <p className="line-clamp-3 text-sm">{description}</p>
    </main>
  )
}
