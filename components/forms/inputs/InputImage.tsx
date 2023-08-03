import { CloudArrowUpIcon } from '@heroicons/react/24/solid'

type Props = React.PropsWithChildren<{
  id: string
  name: string
  message?: string
}>

export default function InputImage({ id, name, message = 'Haga clic para subir una imagen' }: Props) {
  return (
    <label htmlFor={id} className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-secondary bg-base-300 hover:bg-neutral-focus">
      <div className="flex flex-col items-center justify-center pb-6 pt-5">
        <CloudArrowUpIcon className="h-10 w-10" />
        <p className="lg: mb-2 text-sm font-semibold">
          {message}
        </p>
        <p className="text-sm">PNG o JPG (MAX. 800x400px)</p>
      </div>
      <input id={id} name={name} type="file" className="hidden" />
    </label>
  )
}
