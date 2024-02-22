import EmptyContent from '@/components/EmptyContent'
import FilterBar from '@/components/FilterBar'
import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import { auth } from '@/lib/auth/pages'
import { type Model, type LogStatus, logModels } from '@/lib/data-fetching/log'
import { models } from '@/lib/translations'
import getPaginationProps from '@/lib/utils/pagination'
import prisma from '@/prisma/client'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import { type Prisma } from '@prisma/client'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Bitácora',
}

export default async function LogPage({
  searchParams: { page, filtered, search },
}: SearchParamsProps) {
  const { authUserId } = await auth.user()
  if (authUserId == null) {
    notFound()
  }

  const searchFilter = (
    (Array.isArray(search) ? search[0] : search) ?? ''
  ).replace('%40', '@')
  const modelFilter = (Array.isArray(filtered) ? filtered[0] : filtered) ?? ''
  const pageNumber = +(Array.isArray(page) ? page[0] : page ?? 1)

  const whereCondition: Prisma.LogWhereInput = {
    OR: [
      {
        model: {
          contains: modelFilter,
        },
      },
      {
        authUser: {
          OR: [
            {
              admin: {
                OR: [
                  {
                    name: {
                      contains: searchFilter,
                      mode: 'insensitive',
                    },
                  },
                  {
                    email: {
                      contains: searchFilter,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
            {
              company: {
                OR: [
                  {
                    name: {
                      contains: searchFilter,
                      mode: 'insensitive',
                    },
                  },
                  {
                    email: {
                      contains: searchFilter,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
            {
              person: {
                OR: [
                  {
                    name: {
                      contains: searchFilter,
                      mode: 'insensitive',
                    },
                  },
                  {
                    email: {
                      contains: searchFilter,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
            {
              institute: {
                OR: [
                  {
                    name: {
                      contains: searchFilter,
                      mode: 'insensitive',
                    },
                  },
                  {
                    email: {
                      contains: searchFilter,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  }

  const totalRecords = await prisma.log.count({
    where: whereCondition,
    orderBy: {
      createdAt: 'desc',
    },
  })
  const { nextPage, skip, take } = getPaginationProps({
    pageNumber,
    totalRecords,
  })

  const logs = await prisma.log.findMany({
    where: whereCondition,
    select: {
      id: true,
      action: true,
      model: true,
      status: true,
      createdAt: true,
      authUser: {
        select: {
          admin: {
            select: {
              name: true,
              email: true,
            },
          },
          company: {
            select: {
              name: true,
              email: true,
            },
          },
          person: {
            select: {
              name: true,
              email: true,
            },
          },
          institute: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      },
    },
    skip,
    take,
    orderBy: {
      createdAt: 'desc',
    },
  })

  const logStatus = {
    Success: <CheckCircleIcon className="w-5 h-5 fill-success" />,
    Warning: <ExclamationCircleIcon className="w-5 h-5 fill-warning" />,
    Info: <InformationCircleIcon className="w-5 h-5 fill-info" />,
    Error: <XCircleIcon className="w-5 h-5 fill-error" />,
  }

  const logOptions = logModels
    .map((l) => ({
      id: l,
      name: models[l],
    }))
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <PageTitle
        title="Bitácora"
        subtitle="Listado de todas las acciones registradas en la aplicación"
      />

      <FilterBar
        filterLabel="Módulo"
        filterOptions={logOptions}
        searchLabel="Correo"
      />

      <section className="my-5 sm:mx-5 card bg-white">
        <div className="overflow-x-auto">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Estado</th>
                <th>Módulo</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => {
                const user =
                  l.authUser?.admin ??
                  l.authUser?.person ??
                  l.authUser?.company ??
                  l.authUser?.institute

                return (
                  <tr
                    key={l.id}
                    className="hover select-none"
                  >
                    <th>
                      <p className="ms-2">{logStatus[l.status as LogStatus]}</p>
                    </th>
                    <td>{models[l.model as Model]}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>
                      {new Intl.DateTimeFormat('es', {
                        dateStyle: 'short',
                      }).format(l.createdAt)}
                    </td>
                    <td>
                      {new Intl.DateTimeFormat('es', {
                        timeStyle: 'medium',
                        hourCycle: 'h12',
                      }).format(l.createdAt)}
                    </td>
                    <td>{l.action}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {logs.length === 0 && (
            <EmptyContent title="Módulo vacío">
              No hay registros en el módulo seleccionado.
            </EmptyContent>
          )}
        </div>
      </section>
      <Pagination
        nextPage={nextPage}
        filterParam="filtered"
        filterSearch={modelFilter}
      />
    </>
  )
}
