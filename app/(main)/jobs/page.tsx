import Subnavbar from '@/components/layout/Subnavbar'

export default function JobsPage() {
  return (
    <>
      <Subnavbar options={true} />
      <section className="flex">
        <section className="mt-4 flex flex-row gap-2 p-4">
          <div className="basis-full rounded-md bg-neutral-300 p-4 text-white">
            <h5 className="mb-1 border-b px-2 font-bold">Title</h5>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              eaque enim quam ad aspernatur soluta modi, fuga veniam nesciunt
              maxime recusandae error, ducimus blanditiis? Dignissimos neque
              amet tempore doloremque esse?
            </p>
          </div>
        </section>
      </section>
    </>
  )
}
