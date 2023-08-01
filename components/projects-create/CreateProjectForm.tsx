import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'

export default function CreateProjectForm() {
  return (
    <form className="w-full rounded-lg bg-base-100 p-4" method="POST" action="">
      <FormSection title="Información del proyecto" description="Asigna un título que explique de que trata el proyecto, así como una descripción del mismo para tener una mejor idea y por último la privacidad de este.">
        <Input name="title" label="Título" placeholder="Ej: Página web administrativa" />
        <Textarea name="description" label="Descripción" placeholder="Ej: Página web de carácter administrativo para la empresa..." />
        <Select name="visibility" label="Selecciona la privacidad">
          <option value="PRIVATE">Privado</option>
          <option value="PUBLIC">Público</option>
        </Select>
      </FormSection>
      <FormButtons url="home/projects" />
    </form>
  )
}
