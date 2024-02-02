import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import { type LogStatus } from '@/lib/data-fetching/log'
import { format } from '@/lib/utils/date'
import getPaginationProps from '@/lib/utils/pagination'
import prisma from '@/prisma/client'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bitácora',
}

export default async function LogPage({ searchParams }: SearchParamsProps) {
  const pageNumber = +(searchParams.page ?? 1)
  const totalRecords = await prisma.log.count()
  const { nextPage, skip, take } = getPaginationProps({
    pageNumber,
    totalRecords,
  })

  const logs = await prisma.log.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      createdAt: true,
      authUser: {
        select: {
          admin: {
            select: {
              name: true,
            },
          },
          company: {
            select: {
              name: true,
            },
          },
          person: {
            select: {
              name: true,
            },
          },
          institute: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    skip,
    take,
  })

  const logStatus = {
    Success: <CheckCircleIcon className="w-5 h-5 fill-success" />,
    Warning: <ExclamationCircleIcon className="w-5 h-5 fill-warning" />,
    Info: <InformationCircleIcon className="w-5 h-5 fill-info" />,
    Error: <XCircleIcon className="w-5 h-5 fill-error" />,
  }

  return (
    <>
      <PageTitle
        title="Bitácora"
        subtitle="Listado de todas las acciones registradas en la aplicación"
      />
      <section className="my-5 sm:mx-5 card bg-white">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Estado</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => {
                return (
                  <tr
                    key={l.id}
                    className="hover"
                  >
                    <th>
                      <p className="ms-2">{logStatus[l.status as LogStatus]}</p>
                    </th>
                    <td>{l.title}</td>
                    <td>{l.description}</td>
                    <td>
                      {format({
                        date: l.createdAt,
                        config: { shortMonth: true },
                      })}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
      <Pagination nextPage={nextPage} />
    </>
  )
}
