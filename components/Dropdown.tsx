import React from 'react' 
import { useRouter } from 'next/router'

type DropdownProps = {
    openDropdown: any
}

export default function Dropdown({ openDropdown }: DropdownProps) {
    const router = useRouter()

  return openDropdown ? (
    <div className={`absolute z-30  shadow-lg bg-white w-28  top-6 right-0`}>
        <ul className='flex flex-col items-center h-full'>
            <li className='w-full p-1 border-b border-t hover:bg-slate-200' onClick={() => router.push('/mens')}>mens</li>
            <li className='w-full p-1 border-b hover:bg-slate-200' onClick={() => router.push('/womens')}>womens</li>
            <li className='w-full p-1 border-b hover:bg-slate-200' onClick={() => router.push('/jewelery')}>jewelery</li>
            <li className='w-full p-1 border-b hover:bg-slate-200' onClick={() => router.push('/electronics')}>electronics</li>
        </ul>
    </div>
  ) : null
}
