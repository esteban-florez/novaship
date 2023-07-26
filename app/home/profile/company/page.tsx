import AvatarIcon from '@/components/AvatarIcon'
import { EyeIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Perfil empresarial',
}

export default function CompanyProfilePage() {
  return (
    <div className="w-full bg-base-100 p-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Mis empresas registradas</h2>
        <Link href="/home/profile/company/create" className="btn-secondary btn-sm btn border-none px-6">
          <PlusIcon className="h-6 w-6" />
          Registrar
        </Link>
      </div>
      <div className="divider divider-vertical mt-2" />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <AvatarIcon username="DF" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Distribuidora Fedora</div>
                  </div>
                </div>
              </td>
              <td>fedora@empresa.com</td>
              <td>
                <div className="tooltip" data-tip="En espera para ser validada">
                  <span className="badge badge-warning badge-sm">En revisión</span>
                </div>
              </td>
              <th>
                <button className="btn-ghost btn-xs btn">
                  <div className="tooltip" data-tip="Ver perfil">
                    <Link href="/home/user/profile/company">
                      <EyeIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </button>
              </th>
            </tr>
            <tr className="hover">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <AvatarIcon username="ES" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Electrodomésticos Samara</div>
                  </div>
                </div>
              </td>
              <td>samarasdomestica@empresa.com</td>
              <td>
                <div className="tooltip" data-tip="Visible al público">
                  <span className="badge badge-success badge-sm">Aprovado</span>
                </div>
              </td>
              <th>
                <button className="btn-ghost btn-xs btn">
                  <div className="tooltip" data-tip="Ver perfil">
                    <Link href="/home/user/profile/company">
                      <EyeIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </button>
              </th>
            </tr>
            <tr className="hover">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <AvatarIcon username="MD" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Metalúrgica Diore</div>
                  </div>
                </div>
              </td>
              <td>metalesdiore@empresa.com</td>
              <td>
                <div className="tooltip" data-tip="En espera para ser validada">
                  <span className="badge badge-warning badge-sm">En revisión</span>
                </div>
              </td>
              <th>
                <button className="btn-ghost btn-xs btn">
                  <div className="tooltip" data-tip="Ver perfil">
                    <Link href="/home/user/profile/company">
                      <EyeIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </button>
              </th>
            </tr>
            <tr className="hover">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <AvatarIcon username="CJ" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Comercializadora Jons</div>
                  </div>
                </div>
              </td>
              <td>jonscc@empresa.com</td>
              <td>
                <div className="tooltip" data-tip="Visible al público">
                  <span className="badge badge-success badge-sm">Aprovado</span>
                </div>
              </td>
              <th>
                <button className="btn-ghost btn-xs btn">
                  <div className="tooltip" data-tip="Ver perfil">
                    <Link href="/home/user/profile/company">
                      <EyeIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </button>
              </th>
            </tr>
            <tr className="hover">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <AvatarIcon username="DA" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Distribuidora Aragua</div>
                  </div>
                </div>
              </td>
              <td>distribuidoraragua@empresa.com</td>
              <td>
                <div className="tooltip" data-tip="Documento inválido">
                  <span className="badge badge-error badge-sm">Denegado</span>
                </div>
              </td>
              <th>
                <button className="btn-ghost btn-xs btn">
                  <div className="tooltip" data-tip="Ver perfil">
                    <Link href="/home/user/profile/company">
                      <EyeIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
