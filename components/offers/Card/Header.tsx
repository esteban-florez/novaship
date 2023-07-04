interface Props {
  title: string
  categories: string[]
}

export default function Header({ title, categories }: Props) {
  return (
    <header className="rounded-t-lg bg-primary px-6 py-4">
      <h3 className="font-title text-lg font-bold sm:text-xl">{title}</h3>
      <ul className="-mt-2 line-clamp-2 flex flex-row flex-wrap text-sm text-neutral-300">
        {categories.map(category => {
          return (
            <li className="me-1 cursor-pointer after:text-neutral-300 after:content-[','] last:after:content-[] hover:text-accent" key={category}>
              {category}
            </li>
          )
        })}
      </ul>
    </header>
  )
}
