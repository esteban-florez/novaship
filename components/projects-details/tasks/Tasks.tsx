import Task from './Task'

export default function Tasks() {
  return (
    <>
      <div className="flex flex-col rounded-lg rounded-tl-none bg-white p-6 shadow">
        <div className="flex flex-row gap-4">
          <div className="ml-1 w-1 rounded-sm bg-accent" />
          <div className="flex w-full flex-col gap-2 py-1">
            <Task nameTask="Realizar la base de datos" value="10" percentage="5%" />
            <Task nameTask="Diseñar las interfaces" value="20" percentage="10%" />
          </div>
        </div>
      </div>
    </>
  )
}
