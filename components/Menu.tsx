import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

interface MenuProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu({ open, setOpen }: MenuProps) {
  const session = useSession()

  const router = useRouter()

  const [openCategories, setOpenCategories] = useState(false)

  function handleBrowse() {
    router.push('/products')
    setOpen(!open)
  }

  function handleOrders() {
    router.push('/orders')
    setOpen(!open)
  }

  //closes menu on routing
  useEffect(() => {
    setOpen(false)
    setOpenCategories(false)
  }, [router])

  return (
    <div
      className={`w-3/4 h-screen z-40 bg-white fixed top-0 flex flex-col shadow-lg transition-all duration-300 right-0 overflow-y-scroll scrollbar-hide font-NotoSans ${
        open ? ' ' : 'w-0'
      }`}
    >
      <div className="bg-[#f6f6f6] h-40 flex flex-col">
        <XMarkIcon
          className="h-10 absolute cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <div className="ml-auto flex flex-col items-center">
          <p
            className={`text-base font-semibold ml-auto pt-2 pr-2 ${
              session.data == null ? 'cursor-pointer' : ''
            }`}
            onClick={session.data == null ? () => signIn() : undefined}
          >
            {session.data != null
              ? `Hello, ${session?.data?.user?.name}`
              : 'Sign In'}
          </p>
          <p
            className="text-xs cursor-pointer"
            onClick={session.data == null ? () => signIn() : () => signOut()}
          >
            {session.data != null ? `Sign Out` : null}
          </p>
        </div>

        <p
          className=" mt-auto text-3xl p-2 font-bold cursor-pointer hover:bg-[#d7d6d6] whitespace-nowrap"
          onClick={() => handleBrowse()}
        >
          Browse Products
        </p>
      </div>
      <div className="flex flex-col p-4 text-2xl gap-6 mt-12 font-semibold cursor-pointer">
        <nav className="border-b-2 py-2 pl-1 ">
          <div
            className="flex items-center hover:bg-[#f6f6f6]"
            onClick={() => setOpenCategories(!openCategories)}
          >
            <p className="">Categories</p>
            <ChevronDownIcon className="h-8" />
          </div>

          <ul className={`${openCategories ? '' : 'h-0 hidden'}  h-40`}>
            <li
              className="pl-4 py-1 border-b hover:bg-[#f6f6f6]"
              onClick={() => router.push('/mens')}
            >
              mens
            </li>
            <li
              className="pl-4 py-1 border-b hover:bg-[#f6f6f6]"
              onClick={() => router.push('/womens')}
            >
              womens
            </li>
            <li
              className="pl-4 py-1 border-b hover:bg-[#f6f6f6]"
              onClick={() => router.push('/jewelery')}
            >
              jewelery
            </li>
            <li
              className="pl-4 py-1 hover:bg-[#f6f6f6]"
              onClick={() => router.push('/electronics')}
            >
              electronics
            </li>
          </ul>
        </nav>
        <p
          className="border-b-2 py-2 pl-1 hover:bg-[#f6f6f6]"
          onClick={() => router.push('/deals')}
        >
          Deals
        </p>
        <p
          className="py-2 pl-1 hover:bg-[#f6f6f6]"
          onClick={() => handleOrders()}
        >
          Orders
        </p>
      </div>
    </div>
  )
}
