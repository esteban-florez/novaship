import { HeartIcon, EyeIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <>
      <section className="my-4 grid grid-cols-3 p-4">
        <div className="stats col-span-3 bg-neutral shadow">
          <div className="stat">
            <div className="stat-figure">
              <HeartIcon className="h-8 w-8 stroke-primary stroke-2" />
            </div>
            <div className="stat-title font-title">Total Likes</div>
            <div className="stat-value">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat">
            <div className="stat-figure">
              <EyeIcon className="h-8 w-8 stroke-primary stroke-2" />
            </div>
            <div className="stat-title font-title">Page Views</div>
            <div className="stat-value">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat">
            <div className="stat-figure">
              <ClipboardDocumentListIcon className="h-8 w-8 stroke-primary stroke-2" />
            </div>
            <div className="stat-title font-title">Tasks done</div>
            <div className="stat-value">86%</div>
            <div className="stat-desc">31 tasks remaining</div>
          </div>
        </div>
      </section>
    </>
  )
}
