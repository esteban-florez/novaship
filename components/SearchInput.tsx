type Props = React.PropsWithChildren<{
  searchText?: string
  setSearchText?: (value: string) => void
}>

export default function SearchInput({ searchText, setSearchText }: Props) {
  const onChange = (setSearchText != null)
    ? (e: React.ChangeEvent<HTMLInputElement>) => { setSearchText(e.target.value) }
    : undefined

  return (
    <>
      <input
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={onChange}
        className="input-bordered input input-sm w-full rounded-full bg-base-300 shadow-inner outline-none transition-all focus:ring focus:ring-primary sm:w-auto"
      />
    </>
  )
}
