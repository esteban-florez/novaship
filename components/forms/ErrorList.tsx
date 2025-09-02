type Props = React.PropsWithChildren<{
  errors: string[] | undefined
}>

export default function ErrorList({ errors }: Props) {
  return (
    <ul className="list-disc pl-4 text-sm">
      {errors?.map(error => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )
}
