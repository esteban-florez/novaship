export default function NumberSteps() {
  const numberSteps = [1, 2, 3, 4]

  return (
    <div className="flex w-full justify-between px-10 pb-4">
      {numberSteps.map(number => {
        return (
          <div key={number} className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-black">
            <p className="text-xl font-bold">{number}</p>
          </div>
        )
      })}
    </div>
  )
}
