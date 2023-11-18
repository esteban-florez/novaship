import { type SelectableCategory } from '@/lib/types'
import FieldOption from './CategoryOption'
import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import SelectedItems from '@/components/forms/inputs/SelectedItems'

type Props = React.PropsWithChildren<{
  searchText: string
}>

export default function CategoriesSelect({ searchText }: Props) {
  const { categories, setCategories, selectedCategories } = useContext(SignUpContext)
  const filteredCategories = categories.filter(filterBySearch)

  function filterBySearch(category: SelectableCategory) {
    const title = category.title.toLowerCase()
    return title.includes(searchText.toLowerCase())
  }

  function handleCategoryInput(id: string) {
    const newCategories = categories.map(category => {
      const canBeSelected = !category.selected && selectedCategories.length < 5
      const canBeUnselected = category.selected

      if (id === category.id && (canBeSelected || canBeUnselected)) {
        return {
          ...category,
          selected: !category.selected,
        }
      }

      return category
    })

    setCategories(newCategories)
  }

  return (
    <div className="my-4">
      <SelectedItems
        limit={5} items={selectedCategories} itemsName="Áreas" onRemove={handleCategoryInput}
      />
      <div className="grid h-60 grid-cols-2 gap-x-3 gap-y-2 scrollbar p-4 shadow-inner">
        {filteredCategories.length !== 0
          ? filteredCategories.map(category => {
            return (
              <FieldOption
                key={category.id}
                category={category}
                handleCategoryInput={handleCategoryInput}
              />
            )
          })
          : (
            <div className="col-span-2 grid h-full place-items-center">
              <p className="text-lg font-semibold">
                No se encontraron áreas con el nombre: "{searchText}".
              </p>
            </div>
            )}
      </div>
    </div>
  )
}
