interface Props {
  title: string
  jobs: string
}

export default function Header({ title, jobs }: Props) {
  return (
    <header>
      <h3 className="font-title text-lg font-bold text-white sm:text-2xl">
        {title}
      </h3>
      <h6 className="-mt-2 text-sm font-semibold text-neutral-300 hover:text-accent sm:text-base">
        {jobs}
      </h6>
    </header>
  )
}
