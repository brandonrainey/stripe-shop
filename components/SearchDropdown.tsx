import React from 'react'

type SearchProps = {
    filteredProducts: any,
    searchInput: any,
    setSearchInput: any,
    productId: any,
    setProductId: any,
    products: any,
    openProductPage: any,
    setOpenProductPage: any
}

export default function SearchDropdown({ filteredProducts, searchInput, productId, setProductId, products, openProductPage, setOpenProductPage, setSearchInput }: SearchProps) {

    function handleProductId(index: any) {
     setProductId(products.findIndex((product: any) => product.id === filteredProducts[index].id)) 
     setOpenProductPage(!openProductPage)
     setSearchInput('')
    }

  return (
    <div className={`absolute flex flex-col h-auto sm:w-full w-[300px] z-40 bg-white shadow-md border rounded-lg top-[32px] -right-20 sm:right-0  `}>
        {filteredProducts.map((item: any, index: any) => (
            <div className='bg-white p-1 truncate rounded-lg hover:bg-slate-200 cursor-pointer text-sm' key={index} onClick={() => handleProductId(index)}>{item.title}</div>
        ))}
        <div className={`${filteredProducts.length === 0 ? '' : 'hidden'} p-1 text-sm`}>No matching results</div>
    </div>
  )
}
