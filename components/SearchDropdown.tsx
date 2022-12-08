import React from 'react'

type SearchProps = {
    filteredProducts: any,
    searchInput: any
}

export default function SearchDropdown({ filteredProducts, searchInput }: SearchProps) {

    

  return searchInput?.length > 0 ? (
    <div className={`absolute flex flex-col h-auto w-full z-40 bg-white shadow-md border rounded-lg top-[32px]  `}>
        {filteredProducts?.map((item: any) => (
            <div className='bg-white p-1 truncate rounded-lg hover:bg-slate-200 cursor-pointer text-sm'>{item.title}</div>
        ))}
    </div>
  ) : null
}
