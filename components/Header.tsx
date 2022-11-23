import React from 'react'
import { ShoppingCartIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex sm:p-4 py-4 px-1 w-full items-center justify-between shadow">
      <div className="flex items-center gap-2">
        <div>
          <BuildingStorefrontIcon className='h-8 w-8 sm:block hidden'/>
        </div>
        <p className="sm:text-3xl font-semibold"><Link href='/'>My Shop</Link></p>
      </div>
      <nav className="xl:flex hidden gap-8 ">
        <p className='font-semibold'><Link href='/Products'>Shop Products</Link></p>
        <p>Categories</p>
        <p>Deals</p>
        <p>What's New</p>
        
      </nav>
      <div className="relative w-1/3">
        <input className="w-full min-w-[80px] focus:outline-none rounded-2xl py-1 px-2 bg-[#f3f1f1] hover:bg-[#e8e5e5]"></input>
        <button className="absolute right-2 top-1">
          <MagnifyingGlassIcon className='h-6 w-6'/>
        </button>
      </div>
      <div className="flex gap-1">
        <div>
          <UserIcon className='h-6 w-6'/>
        </div>
        <p>Account</p>
      </div>
      <div className='flex gap-2 relative'>
        <span className='absolute bg-[#050217] text-white text-sm first-letter: px-1 rounded-full -top-2 right-9'>0</span>
        <ShoppingCartIcon className='h-6 w-6'/>
        <p>Cart</p>
      </div>
    </div>
  )
}
