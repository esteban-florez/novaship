import { CloudArrowUpIcon } from '@heroicons/react/24/solid'

interface Props {
  id: string
  name: string
}

export default function InputImage({ id, name }: Props) {
  return (
    <label htmlFor={id} className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-secondary bg-base-300 hover:bg-neutral-focus">
      <div className="flex flex-col items-center justify-center pb-6 pt-5">
        <CloudArrowUpIcon className="h-10 w-10" />
        <p className="mb-2 text-xs font-semibold lg:text-sm">
          Haga clic para subir una imagen
        </p>
        <p className="text-xs">PNG o JPG (MAX. 800x400px)</p>
      </div>
      <input id={id} name={name} type="file" className="hidden" />
    </label>
  )
}
