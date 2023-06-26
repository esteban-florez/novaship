interface Props {
  description: string
}

export default function Content({ description }: Props) {
  return (
    <main className="my-4 bg-white/10 p-4 backdrop-blur-lg">
      <p className="line-clamp-3 text-sm text-white">{description}</p>
    </main>
  )
}
