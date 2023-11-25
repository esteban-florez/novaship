export default function Progress({
  condition,
  percentage,
}: {
  condition: boolean
  percentage: number
}) {
  return (
    <div className="-mt-1 w-full flex items-center gap-2">
      {condition && <progress className="progress h-2 w-full" />}
      {!condition && (
        <progress
          className="progress w-full h-2"
          value={percentage}
          max="100"
        />
      )}
      <small>{percentage}%</small>
    </div>
  )
}
