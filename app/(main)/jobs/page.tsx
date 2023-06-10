import RouteMap from '@/components/RouteMap'

export default function JobsPage() {
  return (
    <div>
      <RouteMap
        paths={['home', 'jobs']}
        currentPath={'jobs'}
      />
      <section className="mt-4 flex flex-row gap-2 p-4">
        <div className="basis-2/6 rounded-md bg-neutral-300 p-4 text-white">
          <h5 className="mb-1 border-b px-2 font-bold">Title</h5>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eaque
            enim quam ad aspernatur soluta modi, fuga veniam nesciunt maxime
            recusandae error, ducimus blanditiis? Dignissimos neque amet tempore
            doloremque esse?
          </p>
        </div>
        <div className="basis-4/6 rounded-md bg-sky-300 p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis hic
          exercitationem voluptatem, consequuntur minima tenetur porro dolorem,
          tempore excepturi magnam quidem. Debitis possimus ea exercitationem!
          Aliquid, unde? Voluptas, eligendi ipsam?
        </div>
      </section>
    </div>
  )
}
