import SearchInput from './SearchInput'
import Dropdown from './Dropdown'

type Props = React.PropsWithChildren<{
  dropdownLabel: string
  search: string
  onSearch: (value: string) => void
}>

export default function PageNav({ dropdownLabel, children, search, onSearch }: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 p-4 sm:flex-row lg:gap-0">
      <SearchInput searchText={search} setSearchText={onSearch} />
      <Dropdown label={dropdownLabel}>
        {children}
      </Dropdown>
    </div>
  )
}
