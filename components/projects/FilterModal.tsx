import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import Modal from '../Modal'
import Select from '../forms/inputs/Select'
import Input from '../forms/inputs/Input'
import { type InputOnChange } from '@/lib/types'
import { BUTTON_DEFAULT } from '@/lib/constants/button'
import clsx from 'clsx'

interface Props {
  onChange?: (event: InputOnChange) => void
}

// DEV
// Filtrar por visibilidad "Private" no funciona
export default function FilterModal({ onChange }: Props) {
  return (
    <Modal
      id="filterModal"
      buttonText="Filtrar"
      buttonClassName={clsx(BUTTON_DEFAULT, 'bg-secondary text-secondary-content')}
      buttonIcon={<AdjustmentsHorizontalIcon className="h-5 w-5" />}
      buttonActionText="Filtrar"
      buttonCancelText="Cancelar"
      buttonActionIcon={<AdjustmentsHorizontalIcon className="h-5 w-5" />}
      buttonActionClassName="bg-secondary text-secondary-content"
    >
      <Select name="privacity" label="Privacidad" onChange={onChange}>
        <option value="ALL">Todos</option>
        <option value="PRIVATE">Privado</option>
        <option value="PUBLIC">Público</option>
      </Select>
      <Input type="number" name="members" label="Miembros" placeholder="Ej: 15" onChange={onChange} />
      {/* <Input name="owner" label="Responsable" placeholder="Ej: Juan Aguilar" onChange={onChange} /> */}
    </Modal>
  )
}
