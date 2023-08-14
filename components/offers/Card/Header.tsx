type Props = React.PropsWithChildren<{
  title: string
  categories: string[]
}>

export default function Header({ title, categories }: Props) {
  return (
    <header className="relative flex flex-col rounded-t-xl p-4 pb-0 text-white">
      <h3 className="text-lg font-bold text-black sm:text-xl">{title}</h3>
      <ul className="-mt-1 line-clamp-2 flex flex-row flex-wrap font-semibold text-neutral-700">
        {categories.map(category => {
          return (
            <li className="me-1 cursor-pointer text-sm after:text-neutral-800 after:content-[','] last:after:content-[] hover:text-primary" key={category}>
              {category}
            </li>
          )
        })}
      </ul>
    </header>
  )
}
