import React from 'react'
import { useRouter } from 'next/router'

interface DropdownProps {
  openDropdown: boolean
}

export default function Dropdown({ openDropdown }: DropdownProps) {
  const router = useRouter()

  return openDropdown ? (
    <nav
      className={`absolute z-30  shadow-lg bg-white w-full  top-8 right-0 rounded`}
    >
      <ul className="flex flex-col items-center h-full">
        <li
          className="w-full p-1 border-b border-t text-[0.95rem] rounded hover:bg-[#4b88c517]"
          onClick={() => router.push('/mens')}
        >
          Mens
        </li>
        <li
          className="w-full p-1 border-b text-[0.95rem] rounded hover:bg-[#4b88c517]"
          onClick={() => router.push('/womens')}
        >
          Womens
        </li>
        <li
          className="w-full p-1 border-b text-[0.95rem] rounded hover:bg-[#4b88c517]"
          onClick={() => router.push('/jewelery')}
        >
          Jewelery
        </li>
        <li
          className="w-full p-1 border-b text-[0.95rem] rounded hover:bg-[#4b88c517]"
          onClick={() => router.push('/electronics')}
        >
          Electronics
        </li>
      </ul>
    </nav>
  ) : null
}
