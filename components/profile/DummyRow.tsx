import Hour from './Hour'

type Props = React.PropsWithChildren<{
  withHour?: boolean
}>

export default function DummyRow({ withHour = false }: Props) {
  return (
    <tr className="dummy-row">
      {!withHour ? (<td />) : (<Hour>12:00 AM</Hour>)}
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
      <td />
    </tr>
  )
}
