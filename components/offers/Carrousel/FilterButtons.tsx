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
  const activeClasses = 'btn-active bg-white border-none hover:bg-zinc-400'
  const inactiveClasses = 'hover:btn-active btn-ghost hover:'

  return (
    <button className={`${isActive ? activeClasses : inactiveClasses} btn-md btn rounded-b-none text-sm font-semibold sm:text-lg`}>
      {content}
    </button>
  )
}
