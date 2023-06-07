import RouteMap from './components/RouteMap'
import { text, title } from './fonts'

export default function Home() {
  return (
    <>
      <RouteMap
        paths={['inicio']}
        currentPath={'inicio'}
      />
      <section className='my-4 grid grid-cols-3 p-4'>
        <div className='stats col-span-3 bg-[#c8c6dc] shadow'>
          <div className='stat'>
            <div className='stat-figure text-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block h-8 w-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                ></path>
              </svg>
            </div>
            <div className={`stat-title ${title.className} text-black`}>
              Total Likes
            </div>
            <div className='stat-value text-primary'>25.6K</div>
            <div className={`stat-desc ${text.className} text-black`}>
              21% more than last month
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block h-8 w-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                ></path>
              </svg>
            </div>
            <div className={`stat-title ${title.className} text-black`}>
              Page Views
            </div>
            <div className='stat-value text-secondary'>2.6M</div>
            <div className={`stat-desc ${text.className} text-black`}>
              21% more than last month
            </div>
          </div>

          <div className='stat'>
            <div className='stat-value text-black'>86%</div>
            <div className={`stat-title ${title.className} text-black`}>
              Tasks done
            </div>
            <div className={`stat-desc ${text.className} text-secondary`}>
              31 tasks remaining
            </div>
          </div>
        </div>

        <div className='row-span-1 mt-4 grid gap-4'>
          <div className='rounded-lg border bg-[#f3f4f6] p-4'>
            <h4 className={title.className}>Title</h4>
            <p className={text.className}>Lorem ipsum lorem ipsumlorem ipsum</p>
          </div>
          <div className='rounded-lg border bg-[#f3f4f6] p-4'>
            <h4 className={title.className}>Title</h4>
            <p className={text.className}>Lorem ipsum lorem ipsumlorem ipsum</p>
          </div>
          <div className='rounded-lg border bg-[#f3f4f6] p-4'>
            <h4 className={title.className}>Title</h4>
            <p className={text.className}>Lorem ipsum lorem ipsumlorem ipsum</p>
          </div>
        </div>
      </section>
    </>
  )
}
