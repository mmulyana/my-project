'use client'

import { useState } from 'react'
import HChevronUp from '../icon/h-chevron-up'

export default function TaskList() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='bg-[#191925] rounded-lg overflow-hidden h-fit w-full duration-150 ease-in'>
      <div className='w-full h-14 bg-[#2e2e3d] px-4 flex justify-between items-center'>
        <div>
          <p className='text-sm text-white'>Project Name</p>
        </div>
        <button
          className={[
            'text-gray-400 duration-75 ease-in',
            !isOpen ? 'rotate-180' : '',
          ].join(' ')}
          onClick={() => setIsOpen(!isOpen)}
        >
          <HChevronUp />
        </button>
      </div>
      {!!isOpen && (
        <div className='space-y-4 p-4'>
          <div className='flex items-center gap-2'>
            <p>Task Name</p>
          </div>
          <div className='flex items-center gap-2'>
            <p>Task Name</p>
          </div>
          <div className='flex items-center gap-2'>
            <p>Task Name</p>
          </div>
        </div>
      )}
    </div>
  )
}
