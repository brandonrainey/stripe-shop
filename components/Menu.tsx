import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

type MenuProps = {
    open: any,
    setOpen: any
}

export default function Menu({ open, setOpen }: MenuProps) {
    const session = useSession()
    const router = useRouter()

    function handleBrowse() {
        router.push('/Products')
        setOpen(!open)
    }

    function handleOrders() {
        router.push('/orders')
        setOpen(!open)
    }


    return (
    <div className={`w-3/4 h-screen z-40 bg-white absolute top-0 flex flex-col shadow-lg transition-all duration-300 right-0 overflow-hidden ${open ? ' ' : 'w-0'}`}>
        <div className='bg-[#f6f6f6] h-40 flex flex-col'>
            <XMarkIcon className='h-10 absolute cursor-pointer' onClick={() => setOpen(!open)}/>
            <p className='text-base font-semibold ml-auto pt-2 pr-2 cursor-pointer' onClick={session.data == null ? () => signIn() : () => signOut()}>{session.data != null ? `Hello, ${session?.data?.user?.name}` : 'Sign In'}</p>
            <p className=' mt-auto text-3xl p-2 font-bold cursor-pointer hover:bg-[#d7d6d6] whitespace-nowrap' onClick={() => handleBrowse()}>Browse Products</p>
        </div>
        <div className='flex flex-col p-4 text-2xl gap-6 mt-12 font-semibold'>
            <p className='border-b-2 py-2 pl-1 hover:bg-[#f6f6f6]'>
                Categories
            </p>
            <p className='border-b-2 py-2 pl-1 hover:bg-[#f6f6f6]'>
                Deals
            </p>
            <p className='py-2 pl-1 hover:bg-[#f6f6f6]' onClick={() => handleOrders()}>
                Orders
            </p>
        </div>
    </div>
  
  )
}
