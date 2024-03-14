export default function Hour({ children }: React.PropsWithChildren) {
  return (
    <td className="relative w-20">
      <span className="absolute -top-3 bg-white">{children}</span>
    </td>
  )
}
