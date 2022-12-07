import React from 'react'

type SearchProps = {
    filteredProducts: any,
    searchInput: any
}

export default function SearchDropdown({ filteredProducts, searchInput }: SearchProps) {

    

  return searchInput != '' ? (
    <div className='absolute flex flex-col h-auto w-full z-40 bg-white border top-9 rounded-lg'>
        {filteredProducts.map((item: any) => (
            <div className='bg-white p-1 truncate'>{item.title}</div>
        ))}
    </div>
  ) : null
}
