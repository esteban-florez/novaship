type Props = React.PropsWithChildren<{
  message: string | undefined
}>

export default function InputError({ message }: Props) {
  return (
    message !== undefined && (
      <p className="-mt-3 text-left text-sm font-semibold text-error">
        {message}
      </p>
    )
  )
}
