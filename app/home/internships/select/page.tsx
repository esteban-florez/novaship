import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import getPaginationProps from '@/lib/utils/pagination'
import prisma from '@/prisma/client'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { notFound } from 'next/navigation'
import SearchForm from './SearchForm'
import Pagination from '@/components/Pagination'
import EmptyContent from '@/components/EmptyContent'
import PersonsList from './PersonsList'
import { param } from '@/lib/utils/search-params'

export default async function SelectInternPage({ searchParams }: SearchParamsProps) {
  const { id, type } = await auth.user()
  if (type !== 'INSTITUTE') {
    notFound()
  }

  const { search, page } = searchParams
  const searchedCI = param(search)
  const pageNumber = Number(param(page) ?? 1)

  const where = {
    ci: {
      contains: searchedCI,
    },
    internships: {
      every: {
        instituteId: { not: id },
      },
    },
  }

  const totalRecords = await prisma.person.count({ where })

  const { nextPage, skip, take } = getPaginationProps({
    totalRecords, pageNumber, pageSize: 10,
  })

  const persons = await prisma.person.findMany({
    where,
    skip,
    take,
    select: {
      id: true,
      ci: true,
      name: true,
      image: true,
    },
  })

  return (
    <>
      <PageTitle
        title="Inscribir pasante"
        subtitle="Registra un nuevo estudiante como pasante de tu institución."
      />
      <section className="flex flex-col gap-2 py-1">
        <div className="bg-white p-2 md:px-4 lg:flex lg:gap-2">
          <div className="alert mb-3 flex items-center justify-start lg:w-1/2">
            <InformationCircleIcon className="h-6 w-6" />
            Introduce la cédula del estudiante:
          </div>
          <SearchForm searchedCI={searchedCI} />
        </div>
        <div className="my-3 grid gap-3 px-3 lg:grid-cols-2">
          {persons.length > 0
            ? (
              <PersonsList persons={persons} />
              )
            : (
              <EmptyContent title="No hemos encontrado resultados..." />
              )}
        </div>
        <Pagination
          nextPage={nextPage}
          pageNumber={pageNumber}
        />
      </section>
    </>
  )
}
