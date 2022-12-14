import React from 'react'

interface SearchProps {
  filteredProducts: {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {
      count: number
      rate: number
    }
    title: string
  }[]
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
  setProductId: React.Dispatch<React.SetStateAction<number>>
  products: {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {
      count: number
      rate: number
    }
    title: string
  }[]
  openProductPage: boolean
  setOpenProductPage: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchDropdown({
  filteredProducts,
  setProductId,
  products,
  openProductPage,
  setOpenProductPage,
  setSearchInput,
}: SearchProps) {
  function handleProductId(index: number) {
    setProductId(
      products.findIndex(
        (product: any) => product.id === filteredProducts[index].id
      )
    )
    setOpenProductPage(!openProductPage)
    setSearchInput('')
  }

  return (
    <nav
      className={`absolute flex flex-col h-auto sm:w-full w-[300px] z-40 bg-white shadow-md border rounded-lg top-[32px] -right-20 sm:right-0  `}
    >
      {filteredProducts.map((item: any, index: number) => (
        <div
          className="bg-white p-1 truncate rounded-lg hover:bg-slate-200 cursor-pointer text-sm"
          key={index}
          onClick={() => handleProductId(index)}
        >
          {item.title}
        </div>
      ))}
      <div
        className={`${
          filteredProducts.length === 0 ? '' : 'hidden'
        } p-1 text-sm`}
      >
        No matching results
      </div>
    </nav>
  )
}
