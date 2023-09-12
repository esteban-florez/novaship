import clsx from 'clsx'
import Button from './Button'

type Props = React.PropsWithChildren<{
  title: string
  className?: string
  image?: 'content' | 'files' | 'tasks'
  button?: {
    url: string
    text: string
  }
}>

// TODO -> responsive, ajustar al espacio e imagen escogible
export default function EmptyContent({ title, children, image, button, className }: Props) {
  const hasButton = button !== null && button !== undefined

  return (
    <article className={clsx('mx-auto mt-4 flex flex-col pb-0 text-center sm:mt-0 sm:p-4', className)}>
      <img src="/empty.webp" alt="Imagen representando contenido vacío." className="mx-auto mt-5 w-40" />
      <h2 className="text-xl font-bold text-gray-600 sm:text-2xl">{title}</h2>
      <p className="font-semibold text-gray-500 sm:text-lg">{children}</p>
      {hasButton &&
        <div className="mx-auto">
          <Button
            url={button.url}
            style="DEFAULT"
            color="PRIMARY"
            hover="WHITE"
          >
            {button.text}
          </Button>
        </div>}
    </article>
  )
}
