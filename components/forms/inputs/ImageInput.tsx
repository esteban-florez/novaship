import { type SharedInputProps } from '@/lib/types'
import { CloudArrowUpIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useState } from 'react'

type Props = SharedInputProps & {
  rounded?: boolean
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
}

// DRY inputs
export default function ImageInput({
  name, errors, register, inputRef,
  config = {}, rounded = false,
}: Props) {
  config.required = config.required !== undefined ? config.required : true
  const errorMessage = errors?.[name]?.message as string | undefined
  const hasError = errorMessage !== undefined
  const registerProps = register !== undefined ? { ...register(name, config) } : {}
  const [source, setSource] = useState<string | null>(null)

  function handleFileLoad(event: React.BaseSyntheticEvent) {
    const file = event.target.files.item(0) as File
    const url = URL.createObjectURL(file)
    setSource(url)
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={clsx('flex h-60 w-60 flex-col items-center justify-center border-2 border-dashed border-secondary bg-base-300 lg:h-72 lg:w-72', rounded && 'rounded-full')}
      >
        {source !== null && (
          <img
            src={source}
            alt="Previsualización de imagen de perfil"
            className={clsx('z-10 h-full w-full object-cover', rounded && 'rounded-full')}
          />
        )}
        {source === null && (
          <div className="flex flex-col items-center justify-center p-4">
            <CloudArrowUpIcon className="h-10 w-10" />
            <p className="text-center font-semibold">Has click abajo para subir una imagen de perfil</p>
          </div>
        )}
      </div>
      <input id={name} name={name} type="file" className="file-input-bordered file-input-primary file-input mt-4 w-full" onInput={handleFileLoad} {...registerProps} ref={inputRef} />
      {hasError && (
        <p className="-mt-3 text-sm font-semibold text-error">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
