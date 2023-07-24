interface Props {
  title: string
  categories: string
}

export default function Header({ title, categories }: Props) {
  return (
    <header>
      <h3 className="font-title text-lg font-bold text-white sm:text-2xl">
        {title}
      </h3>
      <h6 className="-mt-2 line-clamp-1 text-sm font-semibold text-neutral-200 sm:text-base">
        {categories}
      </h6>
    </header>
  )
}
