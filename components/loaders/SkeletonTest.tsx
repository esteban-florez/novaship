import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  className?: string
}>

export default function SkeletonTest({ children, className }: Props) {
  return (
    <section className={clsx('animate-pulse', className)}>{children}</section>
  )
}
