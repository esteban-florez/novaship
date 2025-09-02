import { url } from '@/lib/utils/url'
import clsx from 'clsx'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  title?: string
  className?: string
  image?: 'content' | 'files' | 'tasks'
  button?: {
    url: string
    text: string
  }
}>

// TODO -> responsive, ajustar al espacio e imagen escogible
export default function EmptyContent({
  title = 'No hemos encontrado resultados...',
  children,
  image,
  button,
  className,
}: Props) {
  return (
    <article
      className={clsx(
        'mx-auto mt-4 flex flex-col pb-0 text-center sm:mt-0 sm:p-4',
        className
      )}
    >
      <img
        src={url('/empty.webp').pathname}
        alt="Imagen representando contenido vacío."
        className="mx-auto mt-5 w-40"
      />
      <h2 className="text-xl font-bold text-gray-600 sm:text-2xl">{title}</h2>
      <p className="font-semibold text-gray-500 sm:text-lg">{children}</p>
      {button !== undefined && (
        <div className="mt-4 mx-auto">
          <Link href={button.url}>
            <button className="btn btn-primary">{button.text}</button>
          </Link>
        </div>
      )}
    </article>
  )
}
