import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import Modal from '../Modal'
import Select from '../forms/inputs/Select'
import Input from '../forms/inputs/Input'
import { type InputOnChange } from '@/lib/types'

interface Props {
  onChange?: (event: InputOnChange) => void
}

// DEV
// Filtrar por visibilidad no funciona
export default function FilterModal({ onChange }: Props) {
  return (
    <Modal
      id="filterModal"
      label="Filtrar"
      style="DEFAULT"
      color="SECONDARY"
      hover="SECONDARY"
      icon={<AdjustmentsHorizontalIcon className="h-5 w-5" />}
      cancelLabel="Cancelar"
      acceptLabel="Aplicar"
      acceptColor="SECONDARY"
      acceptIcon={<AdjustmentsHorizontalIcon className="h-5 w-5" />}
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
