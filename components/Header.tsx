import React, { useState } from 'react'
import { ShoppingCartIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/cartSlice'
import { useRouter } from 'next/router'
import Menu from './Menu'

export default function Header() {
  const items = useSelector(selectItems)
  const session = useSession()
  const router = useRouter()

  const [open, setOpen] = useState(false)

  
  return (
    <div className="flex sm:p-4 py-4 sm:px-1 w-full items-center justify-between shadow">
      <div className="flex items-center gap-2">
        <div>
          <BuildingStorefrontIcon className='h-8 w-8 '/>
        </div>
        <p className="sm:text-3xl text-xl text-center font-bold cursor-pointer" onClick={() => router.push('/')}>My Shop</p>
      </div>
      <nav className="flex gap-8 ">
        <p className='font-semibold cursor-pointer text-center sm:block hidden' onClick={() => router.push('/Products')}>Shop Products</p>
        <p className='hidden xl:block'>Categories</p>
        <p className='hidden xl:block'>Deals</p>
        <p className='hidden xl:block cursor-pointer' onClick={() => router.push('/orders')}>Orders</p>
        
      </nav>
      <div className="relative w-1/3">
        <input className="w-full min-w-[80px] focus:outline-none rounded-2xl py-1 px-2 bg-[#f3f1f1] hover:bg-[#e8e5e5]"></input>
        <button className="absolute right-2 top-1">
          <MagnifyingGlassIcon className='h-6 w-6'/>
        </button>
      </div>
      <div className="flex gap-1 cursor-pointer" onClick={session.data == null ? () => signIn() : () => signOut()}>
        <div className='sm:block hidden'>
          <UserIcon className='h-6 w-6'/>
        </div>
        <p className='text-sm text-center sm:block hidden'>{session.data != null ? `Hello, ${session?.data?.user?.name}` : 'Sign In'}</p>
      </div>
      <div className='flex gap-2 relative sm:pr-0 pr-2 cursor-pointer' onClick={() => router.push('/cart')}>
        <span className={`absolute bg-[#050217] text-white text-sm text-center px-1 rounded-full -top-2 sm:right-9 left-3 min-w-[20px] ${items.length === 0 ? 'hidden' : ''}`}>{items.length}</span>
        <ShoppingCartIcon className='h-6 w-6'/>
        <p className='sm:block hidden' >Cart</p>
      </div>
      <div className="space-y-2 sm:hidden block pr-4" onClick={() => setOpen(!open)}>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div>
      <Menu open={open} setOpen={setOpen}/>
    </div>
  )
}
