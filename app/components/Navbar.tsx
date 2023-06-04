import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='navbar border-b bg-base-100'>
      <div className='navbar-start'>
        <button className='btn-ghost btn-circle btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
        <Link
          href='/'
          className='btn-ghost btn text-left text-xl normal-case'
        >
          PasantíasApp
        </Link>
      </div>
      {/* Messages */}
      <div className='navbar-end mr-4 gap-2'>
        <button className='btn-ghost btn-circle btn'>
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[2rem] w-[2rem]'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>
            <span className='badge badge-info badge-xs indicator-item right-1 top-1 border text-[10px]'></span>
          </div>
        </button>
        {/* Notification */}
        <button className='btn-ghost btn-circle btn'>
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[2rem] w-[2rem]'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
            <span className='badge badge-info badge-xs indicator-item right-1 top-1 border text-[10px]'></span>
          </div>
        </button>
        {/* Profile */}
        <button className='btn-ghost btn-circle btn'>
          <div className='placeholder avatar'>
            <div className='w-10 rounded-full bg-neutral-focus text-neutral-content'>
              <span>MX</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
