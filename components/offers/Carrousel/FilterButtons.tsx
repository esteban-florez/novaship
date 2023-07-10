export default function FilterButtons() {
  return (
    <>
      <Btn content="Todos" isActive />
      <Btn content=" Mis ofertas de trabajo" />
      <Btn content="Trabajos aplicados" />
    </>
  )
}

interface Props {
  content: string
  isActive?: boolean
}

function Btn({ content, isActive = false }: Props) {
  const activeClasses = 'btn-active'
  const inactiveClasses = 'hover:btn-active hover:'

  return (
    <button className={`${isActive ? activeClasses : inactiveClasses} btn-ghost btn-sm btn text-sm font-semibold sm:btn-md sm:text-lg`}>
      {content}
    </button>
  )
}
