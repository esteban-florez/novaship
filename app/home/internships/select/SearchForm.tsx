'use client'

import Input from '@/components/forms/inputs/Input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

type Props = React.PropsWithChildren<{
  searchedCI?: string
}>

export default function SearchForm({ searchedCI = '' }: Props) {
  const router = useRouter()

  const handleSubmit = () => {
    router.push(`home/internships/select?search=${searchedCI}`)
  }

  return (
    <form method="GET" onSubmit={handleSubmit} className="flex items-center gap-1 lg:w-1/2">
      <Input
        type="search"
        name="search"
        value={searchedCI}
        placeholder="Cédula de identidad..."
      />
      <button className="btn-primary btn mb-3" type="submit">
        <MagnifyingGlassIcon className="h-5 w-5" />
        <span className="hidden md:inline">Buscar</span>
      </button>
    </form>
  )
}
