import { ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import Button from '../modal/Button'
import FilterModal from './FilterModal'
import { type TabProp } from '@/lib/types'
import clsx from 'clsx'
import Link from 'next/link'
import SeachFilter from './SearchFilter'

interface Props {
  active: TabProp
  onInput: (event: OnInputEvent | SelectOnInputEvent) => void
  onTabClick: (tabOption?: TabProp) => void
}

// DRY Filter
export default function Filter({ active, onInput, onTabClick }: Props) {
  return (
    <section className="-mt-2 flex flex-col flex-wrap gap-2 rounded-lg xl:flex-row xl:items-center">
      <div className="flex w-full flex-col items-center justify-between gap-3 sm:ms-auto sm:flex-row sm:pb-3">
        <SeachFilter name="title" onInput={onInput} />
        <div className="flex flex-row justify-between gap-2 pb-2 sm:w-auto sm:pb-0">
          <FilterModal onInput={onInput} />
          <Link href="/home/projects/create">
            <Button className="btn-primary btn px-6 py-2">
              <PlusIcon className="h-5 w-5" />
              Agregar
            </Button>
          </Link>
        </div>
      </div>
      <div className="tabs text-sm sm:text-base">
        <Button
          className={clsx({
            'tab tab-md sm:tab-lg tab-lifted': true,
            'tab-active': active === 'All',
          })}
          onClick={() => { onTabClick('All') }}
        >
          <ListBulletIcon className="h-6 w-6" />
          Todos
        </Button>
        <Button
          className={clsx({
            'tab tab-md sm:tab-lg tab-lifted': true,
            'tab-active': active === 'Mine',
          })}
          onClick={() => { onTabClick('Mine') }}
        >
          <StarIcon className="h-6 w-6" />
          Mis proyectos
        </Button>
      </div>
    </section>
  )
}
