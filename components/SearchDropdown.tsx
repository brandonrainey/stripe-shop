import React from 'react'

type SearchProps = {
    filteredProducts: any,
    searchInput: any
}

export default function SearchDropdown({ filteredProducts, searchInput }: SearchProps) {

    

  return searchInput?.length > 0 ? (
    <div className={`absolute flex flex-col h-auto w-full z-40 bg-white shadow-md border rounded-lg top-[32px]  `}>
        {filteredProducts?.map((item: any, index: any) => (
            <div className='bg-white p-1 truncate rounded-lg hover:bg-slate-200 cursor-pointer text-sm' key={index}>{item.title}</div>
        ))}
        <div className={`${filteredProducts.length === 0 ? '' : 'hidden'} p-1 text-sm`}>No matching results</div>
    </div>
  ) : null
}
