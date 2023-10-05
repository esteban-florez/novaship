import PageTitle from '@/components/PageTitle'
import { userTypes } from '@/lib/translations'
import prisma from '@/prisma/client'
import { type UserType } from '@prisma/client'

export default async function AdminPage() {
  const query = { where: { verifiedAt: null } }
  const institutes = (await prisma.institute.findMany(query)).map(i => ({ ...i, type: 'INSTITUTE' as UserType }))
  const companies = (await prisma.company.findMany(query)).map(c => ({ ...c, type: 'COMPANY' as UserType }))
  const users = institutes.concat(companies).sort(mostRecent)

  function mostRecent<T extends { createdAt: Date }>(a: T, b: T) {
    return a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds()
  }

  return (
    <>
      <PageTitle title="Administración del sistema" />
      <section className="p-2">
        <div className="overflow-x-auto rounded-lg bg-white p-2">
          <h2 className="mb-2 text-center text-xl font-semibold">Empresas e instituciones por verificar</h2>
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
                      <button className="btn-secondary btn-sm btn">
                        Ver RIF
                      </button>
                      <button className="btn-success btn-sm btn">
                        Verificar
                      </button>
                      <button className="btn-error btn-sm btn">
                        Rechazar
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
