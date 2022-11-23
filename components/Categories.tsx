import React from 'react'

export default function Categories() {
  return (
    <div className='w-full mt-10'>
        <p className='text-2xl font-semibold ml-12'>Shop Our Top Categories</p>
        <div className='flex flex-wrap justify-between mt-8 gap-y-3'>
            <div className='flex h-40 md:h-60 w-40 md:w-48 border rounded-lg bg-slate-400 justify-center'>
                <p className='mt-2 text-white text-lg font-semibold'>Category 1</p>
            </div>
            <div className='flex h-40 md:h-60 w-40 md:w-48 border rounded-lg bg-slate-400 justify-center'>
                <p className='mt-2 text-white text-lg font-semibold'>Category 2</p>
            </div>
            <div className='flex h-40 md:h-60 w-40 md:w-48 border rounded-lg bg-slate-400 justify-center'>
                <p className='mt-2 text-white text-lg font-semibold'>Category 3</p>
            </div>
            <div className='flex h-40 md:h-60 w-40 md:w-48 border rounded-lg bg-slate-400 justify-center'>
                <p className='mt-2 text-white text-lg font-semibold'>Category 4</p>
            </div>
        </div>
    </div>
  )
}
