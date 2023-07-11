import AvatarIcon from '@/components/AvatarIcon'
import GoBackBtn from '@/components/GoBackBtn'
import InputSimple from '@/components/forms/inputs/Input'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { BuildingOfficeIcon, EnvelopeIcon, StarIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function ViewUserInstituteProfilePage() {
  return (
    <>
      <div className="m-4 flex justify-end rounded-md bg-white p-4">
        <GoBackBtn>Volver al perfil</GoBackBtn>
      </div>
      <div className="m-4 rounded-md bg-white p-4">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex-center flex w-full flex-row text-center md:w-1/4 md:flex-col">
            <div className="flex-center w-full rounded-md border shadow">
              <PhotoIcon className="h-64 w-64" />
            </div>
          </div>
          <div className="flex w-full flex-col md:w-3/4">
            <div className="p-4">
              <h4 className="border-b text-lg font-bold">Universidad Santander</h4>
              <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nemo dolores ab quasi dolorum sapiente autem veritatis eius dicta eos, aperiam id praesentium quisquam fuga illo, nam maxime placeat porro.</p>
            </div>
            <div className="flex flex-col gap-4 p-4 md:flex-row">
              <div className="flex w-full flex-col gap-y-2 md:w-2/4">
                <div className="flex rounded-md border bg-gray-100 p-4 shadow">
                  <div className="flex-center flex-col">
                    <StarIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div className="ms-4 flex-col">
                    <h6 className="text-sm font-semibold md:text-base">Director</h6>
                    <span className="text-xs md:text-base">Fredy Gómez</span>
                  </div>
                </div>
                <div className="flex rounded-md border bg-gray-100 p-4 shadow">
                  <div className="flex-center flex-col">
                    <EnvelopeIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div className="ms-4 flex-col">
                    <h6 className="text-sm font-semibold md:text-base">Correo electrónico</h6>
                    <span className="text-xs md:text-base">institucional@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-2 md:w-2/4">
                <div className="flex rounded-md border bg-gray-100 p-4 shadow">
                  <div className="flex-center flex-col">
                    <UsersIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div className="ms-4 flex-col">
                    <h6 className="text-sm font-semibold md:text-base">Pasantes afiliadas</h6>
                    <span className="text-xs md:text-base">109</span>
                  </div>
                </div>
                <div className="flex rounded-md border bg-gray-100 p-4 shadow">
                  <div className="flex-center flex-col">
                    <BuildingOfficeIcon className="h-6 w-6 fill-secondary" />
                  </div>
                  <div className="ms-4 flex-col">
                    <h6 className="text-sm font-semibold md:text-base">Empresas afiliadas</h6>
                    <span className="text-xs md:text-base">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 border-t p-4">
          <div className="flex items-center justify-between">
            <div className="flex-col">
              <h4 className="font-semibold">Pasantes</h4>
            </div>
            <div className="flex-col">
              <label htmlFor="addIntern" className="btn-primary btn">Añadir pasantes</label>
              <input type="checkbox" id="addIntern" className="modal-toggle" />
              <div className="modal p-0">
                <div className="modal-box p-0">
                  <h3 className="bg-primary p-4 text-center text-lg font-bold text-white">Listado de pasantes</h3>
                  <div className="px-4 py-2">
                    <InputSimple id="" label="Pasantes" name="" placeholder="José Gómez" />
                    <h6 className="mt-4 font-semibold">Pasantes seleccionados (3)</h6>
                    <div className="mt-2 flex items-center justify-between rounded-md border bg-gray-100 p-2">
                      <p>Juan Montes</p>
                      <XMarkIcon className="h-6 w-6" />
                    </div>
                    <div className="mt-2 flex items-center justify-between rounded-md border bg-gray-100 p-2">
                      <p>Andrea Silva</p>
                      <XMarkIcon className="h-6 w-6" />
                    </div>
                    <div className="mt-2 flex items-center justify-between rounded-md border bg-gray-100 p-2">
                      <p>Lucas Gómez</p>
                      <XMarkIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="modal-action p-4">
                    <label htmlFor="addIntern" className="btn">Cerrar</label>
                  </div>
                </div>
              </div>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <AvatarIcon username="AT" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Andrés Torres</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <AvatarIcon username="AA" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Andrea Alvarado</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <AvatarIcon username="LM" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Lucía Montes</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <AvatarIcon username="PG" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Pedro Gómez</div>
                      </div>
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
