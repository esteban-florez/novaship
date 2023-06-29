import { HeartIcon, EyeIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="p-8">
      <div className="mb-8 mt-4 grid grid-cols-3">
        <div className="stats col-span-1 bg-neutral shadow sm:col-span-3">
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
      </div>
      <div className="flex w-full">
        <Link href="/profile" className="card rounded-box grid h-20 w-full grow place-items-center bg-neutral hover:bg-primary sm:w-3/6">
          <h5 className="font-bold">¿Tiene una empresa y desea registrarla?</h5>
          <span>Inscríbase aquí</span>
        </Link>
        <div className="divider divider-horizontal">O</div>
        <Link href="/profile" className="card rounded-box grid h-20 w-full grow place-items-center bg-neutral hover:bg-primary sm:w-3/6">
          <h5 className="font-bold">¿Es director de una institución?</h5>
          <span>Inscríbase aquí</span>
        </Link>
      </div>
    </section>
  )
}
