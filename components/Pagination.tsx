export default function Pagination() {
  return (
    <div className="join mb-10 w-full justify-center">
      <div className="card flex-row rounded-lg border border-solid border-zinc-300 shadow-md">
        <button className="join-item btn bg-white">«</button>
        <button className="join-item btn bg-white">1</button>
        <button className="btn-primary btn-active join-item btn">2</button>
        <button className="join-item btn bg-white">3</button>
        <button className="join-item btn bg-white">4</button>
        <button className="join-item btn bg-white">»</button>
      </div>
    </div>
  )
}
