import AvatarIcon from '@/components/AvatarIcon'
import GoBackBtn from '@/components/GoBackBtn'
import { AcademicCapIcon, EnvelopeIcon, PlusCircleIcon, StarIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil empresarial',
}

export default function ViewCompanyProfilePage() {
  // RANT 1 -> ejemplo de inconsistencia en nombres
  return (
    <>
      <div className="m-4 flex justify-end rounded-md bg-white p-4">
        <GoBackBtn>Volver al perfil</GoBackBtn>
      </div>
      <div className="m-4 rounded-md bg-white p-4">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="mt-4 flex w-full items-start text-center md:w-1/4 md:flex-col">
            <div className="flex-center h-36 w-full rounded-md border bg-neutral shadow">
              <button className="btn-ghost btn text-white">
                <PlusCircleIcon className="h-6 w-6" />
                <p className="text-sm">Añadir imagen</p>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-3/4">
            <div className="p-4">
              <h4 className="border-b text-lg font-bold">Comercializadora Bolívar</h4>
              <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nemo dolores ab quasi dolorum sapiente autem veritatis eius dicta eos, aperiam id praesentium quisquam fuga illo, nam maxime placeat porro.</p>
            </div>
            <div className="flex flex-col gap-4 p-4 md:flex-row">
              <div className="flex w-full flex-col gap-y-2 md:w-2/4">
                <div className="flex rounded-md border bg-gray-100 p-4 shadow">
                  <div className="flex-center flex-col">
                    <StarIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div className="ms-4 flex-col">
                    <h6 className="text-sm font-semibold md:text-base">Gerente</h6>
                    <span className="text-xs md:text-base">José Álvarez</span>
                  </div>
                </div>
                <div className="flex rounded-md border bg-gray-100 p-4 shadow">
                  <div className="flex-center flex-col">
                    <EnvelopeIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div className="ms-4 flex-col">
                    <h6 className="text-sm font-semibold md:text-base">Correo electrónico</h6>
                    <span className="text-xs md:text-base">empresarial@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-2 md:w-2/4">
                <div className="flex rounded-md border bg-gray-100 p-4 shadow">
                  <div className="flex-center flex-col">
                    <UsersIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div className="ms-4 flex-col">
                    <h6 className="text-sm font-semibold md:text-base">Empleados</h6>
                    <span className="text-xs md:text-base">53</span>
                  </div>
                </div>
                <div className="flex rounded-md border bg-gray-100 p-4 shadow">
                  <div className="flex-center flex-col">
                    <AcademicCapIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div className="ms-4 flex-col">
                    <h6 className="text-sm font-semibold md:text-base">Instituciones afiliadas</h6>
                    <span className="text-xs md:text-base">11</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 border-t p-4">
          <div className="flex items-center justify-between">
            <div className="flex-col">
              <h4 className="font-semibold">Instituciones</h4>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-auto">
              <thead>
                <tr>
                  <th className="w-12">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Nombre</th>
                  <th>Gerente</th>
                  <th>Empleados</th>
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
                          <AvatarIcon username="DC" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Distribuidora Carcy</div>
                      </div>
                    </div>
                  </td>
                  <td>Pepe Gómez</td>
                  <td>102</td>
                  <td>
                    <div className="tooltip" data-tip="Remover">
                      <button className="btn-ghost btn">
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </td>
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
                          <AvatarIcon username="FU" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Farmacéutica Unión</div>
                      </div>
                    </div>
                  </td>
                  <td>Andrea Valles</td>
                  <td>49</td>
                  <td>
                    <div className="tooltip" data-tip="Remover">
                      <button className="btn-ghost btn">
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </td>
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
                          <AvatarIcon username="CA" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Comercializadora Almíbar</div>
                      </div>
                    </div>
                  </td>
                  <td>Marta Torres</td>
                  <td>67</td>
                  <td>
                    <div className="tooltip" data-tip="Remover">
                      <button className="btn-ghost btn">
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
