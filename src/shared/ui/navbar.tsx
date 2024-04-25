'use client'

import Link from 'next/link'
import HInbox from '../icon/h-inbox'
import HFolder from '../icon/h-folder'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className='fixed top-0 left-0 w-full h-16 bg-[#262633] shadow shadow-gray-900/20 px-4'>
      <div className='container mx-auto h-full flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <Link
              href='/inbox'
              className={[
                'text-sm hover:text-white flex gap-2.5 items-center pl-3 pr-3.5 py-1.5 rounded-full',
                pathname == '/inbox'
                  ? 'bg-gray-300/[0.05] backdrop-blur-md text-white'
                  : 'hover:bg-gray-300/[0.05] text-white/40',
              ].join(' ')}
            >
              <HInbox />
              Inbox
            </Link>
            {pathname == '/inbox' && (
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-blue-600 shadow-xl shadow-blue-500 -z-[1] rounded-full' />
            )}
            {pathname == '/inbox' && (
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-blue-600 shadow-xl shadow-blue-500 z-[1] rounded-full' />
            )}
          </div>
          <div className='relative'>
            <Link
              href='/group'
              className={[
                'text-sm flex gap-2.5 items-center pl-3 pr-3.5 py-1.5 rounded-full',
                pathname == '/group'
                  ? 'bg-gray-300/[0.05] backdrop-blur-md text-white'
                  : 'hover:bg-gray-300/[0.05] text-white/40',
              ].join(' ')}
            >
              <HFolder />
              Group
            </Link>
            {pathname == '/group' && (
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-blue-600 shadow-xl shadow-blue-500 -z-[1] rounded-full' />
            )}
            {pathname == '/group' && (
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-blue-600 shadow-xl shadow-blue-500 z-[1] rounded-full' />
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
