import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'
import { PhotoIcon } from '@heroicons/react/24/outline'

export default function InstituteCreateRequestList() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-auto">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Director</th>
            <th>RIF</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <AvatarIcon username="US" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Universidad Santander</div>
                </div>
              </div>
            </td>
            <td>Pepe Gómez</td>
            <td>
              <PhotoIcon className="h-12 w-12" />
            </td>
            <td>
              <div className="tooltip" data-tip="Aceptar">
                <button className="btn-sm btn">
                  <CheckIcon className="h-6 w-6 fill-success" />
                </button>
              </div>
              <div className="tooltip" data-tip="Rechazar">
                <button className="btn-sm btn">
                  <XMarkIcon className="h-6 w-6 fill-error" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="hover">
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <AvatarIcon username="UC" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Universidad de Caracas</div>
                </div>
              </div>
            </td>
            <td>Andrea Valles</td>
            <td>
              <PhotoIcon className="h-12 w-12" />
            </td>
            <td>
              <div className="tooltip" data-tip="Aceptar">
                <button className="btn-sm btn">
                  <CheckIcon className="h-6 w-6 fill-success" />
                </button>
              </div>
              <div className="tooltip" data-tip="Rechazar">
                <button className="btn-sm btn">
                  <XMarkIcon className="h-6 w-6 fill-error" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="hover">
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <AvatarIcon username="TC" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Tecnológico Central de Vargas</div>
                </div>
              </div>
            </td>
            <td>Marta Torres</td>
            <td>
              <PhotoIcon className="h-12 w-12" />
            </td>
            <td>
              <div className="tooltip" data-tip="Aceptar">
                <button className="btn-sm btn">
                  <CheckIcon className="h-6 w-6 fill-success" />
                </button>
              </div>
              <div className="tooltip" data-tip="Rechazar">
                <button className="btn-sm btn">
                  <XMarkIcon className="h-6 w-6 fill-error" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
