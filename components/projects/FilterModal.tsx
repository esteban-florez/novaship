import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import Modal from '../Modal'
import Select from '../forms/inputs/Select'
import Input from '../forms/inputs/Input'

interface Props {
  onInput?: (event: SelectOnInputEvent | OnInputEvent) => void
}

// DEV
// Filtrar por visibilidad no funciona
export default function FilterModal({ onInput }: Props) {
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
      <Select name="privacity" label="Privacidad" onInput={onInput}>
        <option value="ALL">Todos</option>
        <option value="PRIVATE">Privado</option>
        <option value="PUBLIC">Público</option>
      </Select>
      <Input type="number" name="members" label="Miembros" placeholder="Ej: 15" onInput={onInput} />
      {/* <Input name="owner" label="Responsable" placeholder="Ej: Juan Aguilar" onInput={onInput} /> */}
    </Modal>
  )
}
