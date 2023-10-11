import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import { useRouter } from 'next/navigation'
import { type Colors } from '@/lib/types'

type Props = React.PropsWithChildren<{
  color?: Colors
}>

export default function BackButton({ color }: Props) {
  const { back } = useRouter()

  return (
    <Button color={color ?? 'CANCEL'} onClick={back}>
      <ArrowLeftIcon className="h-4 w-4" />
      Cancelar
    </Button>
  )
}
