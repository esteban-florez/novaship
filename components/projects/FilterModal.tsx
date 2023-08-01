import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import Modal from '../Modal'
import Select from '../forms/inputs/Select'
import Input from '../forms/inputs/Input'

export default function FilterModal() {
  return (
    <Modal
      id="filterModal"
      title="Filtrar proyectos"
      accept="Filtrar"
      cancel="Cancelar"
      acceptIcon={<AdjustmentsHorizontalIcon className="h-6 w-6 sm:flex" />}
      buttonText="Filtrar"
      buttonIcon={<AdjustmentsHorizontalIcon className="h-5 w-5" />}
    >
      <Select name="privacity" label="Privacidad">
        <option value="Private">Privado</option>
        <option value="Public">Público</option>
      </Select>
      <Input type="number" name="members" label="Miembros" placeholder="Ej: 15" />
      <Input name="owner" label="Responsable" placeholder="Ej: Juan Aguilar" />
    </Modal>
  )
}
