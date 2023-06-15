import Breadcrumbs from '@/components/Breadcrumbs'
import SearchInput from '@/components/SearchInput'
import FilterOptions from '@/components/FilterOptions'

interface NavbarProps {
  options: boolean
}

export default function Subnavbar({ options }: NavbarProps) {
  return (
    <section className="flex items-center justify-between bg-primary/25">
      <Breadcrumbs width={options} />
      {options && (
        <div className="flex w-3/6 items-center justify-end gap-2 p-4 text-sm">
          <SearchInput />
          <FilterOptions />
        </div>
      )}
    </section>
  )
}
