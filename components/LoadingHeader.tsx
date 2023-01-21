import {
  BuildingStorefrontIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function LoadingHeader() {
  const session = useSession()

  return (
    <header className="flex sm:p-4 py-4 sm:px-1 w-full items-center justify-between shadow">
      <div className="flex items-center gap-2">
        <div>
          <BuildingStorefrontIcon className="h-8 w-8 text-[#334990]" />
        </div>
        <h1
          className="sm:text-3xl text-xl text-center font-semibold cursor-pointer"
          data-testid="12"
        >
          My Shop
        </h1>
      </div>
      <nav className="flex lg:gap-6 items-center">
        <p className="font-semibold cursor-pointer text-center lg:block hidden p-1 rounded-lg hover:bg-[#f3f1f1]">
          Shop Products
        </p>
        <div className="lg:flex  items-center relative cursor-pointer hidden ">
          <p className=" font-semibold p-1 rounded-lg hover:bg-[#f3f1f1]">
            Categories
          </p>
          <ChevronDownIcon className="h-5" />
        </div>

        <p className="hidden lg:block font-semibold cursor-pointer p-1 rounded-lg hover:bg-[#f3f1f1]">
          Deals
        </p>
        <p className="hidden lg:block cursor-pointer font-semibold p-1 rounded-lg hover:bg-[#f3f1f1]">
          Orders
        </p>
      </nav>
      <div className="relative w-1/3">
        <input
          className="w-full min-w-[80px] focus:outline-none rounded-2xl py-1 px-2 bg-[#f3f1f1] hover:bg-[#e8e5e5]"
          aria-label="search bar"
        ></input>

        <button className="absolute right-2 top-1" aria-label="search icon">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col gap-x-1 cursor-pointer items-center">
        <div className="flex ">
          <div className="sm:block hidden">
            <UserIcon className="h-6 w-6" />
          </div>
          <p className="text-sm text-center sm:block hidden font-semibold">
            {session.data != null
              ? `Hello, ${session?.data?.user?.name}`
              : 'Sign In'}
          </p>
        </div>
        <p className={`text-xs sm:block hidden`}>
          {session.data != null ? `Sign Out` : null}
        </p>
      </div>
      <div className="flex gap-2 relative sm:pr-0 pr-2 cursor-pointer">
        <span
          className={`absolute bg-[#050217] text-white text-sm text-center px-1 rounded-full -top-2 sm:right-9 left-3 min-w-[20px] `}
        ></span>
        <ShoppingCartIcon className="h-6 w-6" />
        <p className="sm:block hidden font-semibold">Cart</p>
      </div>
      <div className="space-y-2 lg:hidden block pr-4">
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div>
    </header>
  )
}
