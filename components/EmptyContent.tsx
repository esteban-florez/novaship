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
    <article className={clsx('mx-auto mt-4 flex flex-col gap-y-4 pb-0 text-center sm:mt-0 sm:p-4', className)}>
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
      <img src="/empty.webp" alt="Imagen representando contenido vacío." className="mt-5 h-40 w-full" />
    </article>
  )
}
