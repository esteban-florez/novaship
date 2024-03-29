import PageTitle from '@/components/PageTitle'
import VerifyButton from '@/components/admin/VerifyButton'
import Modal from '@/components/modal/Modal'
import { auth } from '@/lib/auth/pages'
import { userTypes } from '@/lib/translations'
import prisma from '@/prisma/client'
import { type UserType } from '@prisma/client'
import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Verificaciones',
}

export default async function VerificationsPage(ctx: SearchParamsProps) {
  const { authUserId } = await auth.user()
  if (authUserId == null) {
    notFound()
  }

  const { selected } = ctx.searchParams
  const selectedId = Array.isArray(selected) ? selected[0] : selected

  const query = { where: { verifiedAt: null } }

  const institutes = (await prisma.institute.findMany(query)).map((i) => ({
    ...i,
    type: 'INSTITUTE' as UserType,
  }))

  const companies = (await prisma.company.findMany(query)).map((c) => ({
    ...c,
    type: 'COMPANY' as UserType,
  }))

  const users = institutes.concat(companies).sort(mostRecent)

  const selectedUser = users.find((user) => user.id === selectedId)

  function mostRecent<T extends { createdAt: Date }>(a: T, b: T) {
    return a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds()
  }

  return (
    <>
      <PageTitle title="Usuarios pendientes" />
      <section className="p-2">
        <div className="overflow-x-auto rounded-lg bg-white p-2">
          <h2 className="mb-2 text-center text-xl font-semibold">
            Empresas e instituciones por verificar
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th />
                <th>Nombre</th>
                <th>Tipo</th>
                <th>RIF</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                return (
                  <tr key={user.id}>
                    <th>{i + 1}</th>
                    <td>{user.name}</td>
                    <td>{userTypes[user.type]}</td>
                    <td>{user.rif}</td>
                    <td className="flex gap-1">
                      <Link
                        className="btn-secondary btn-sm btn"
                        href={`/home/admin/verifications?selected=${user.id}`}
                      >
                        Ver RIF
                      </Link>
                      <VerifyButton
                        id={user.id}
                        type={user.type}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {selectedUser !== undefined && (
          <Modal forceOpen>
            <div className="-mt-4 flex flex-col">
              <h2 className="text-center text-lg font-semibold">
                Detalles del usuario
              </h2>
              <div className="mt-2 flex w-full flex-wrap justify-between">
                <p>
                  Nombre: <b>{selectedUser.name}</b>
                </p>
                <p>
                  Tipo: <b>{userTypes[selectedUser.type]}</b>
                </p>
                <p>
                  RIF: <b>{selectedUser.rif}</b>
                </p>
              </div>
              <img
                className="mx-auto my-2 h-auto w-full"
                src={selectedUser.certification}
                alt="Rif del usuario"
              />
              <Link
                className="self-center btn btn-wide bg-neutral-200 text-neutral-600 hover:bg-neutral-300 border-neutral-300 hover:border-neutral-500"
                scroll={false}
                href="/home/admin/verifications"
              >
                Cerrar
              </Link>
            </div>
          </Modal>
        )}
      </section>
    </>
  )
}
