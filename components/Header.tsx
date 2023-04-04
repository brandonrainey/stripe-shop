import React, { useState } from 'react'
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import {
  BuildingStorefrontIcon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/cartSlice'
import { useRouter } from 'next/router'
import Menu from './Menu'
import Dropdown from './Dropdown'
import SearchDropdown from './SearchDropdown'
import ProductPage from './ProductPage'

interface HeaderProps {
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
}

export default function Header({ products }: HeaderProps) {
  const items = useSelector(selectItems)

  const session = useSession()

  const router = useRouter()

  const [searchInput, setSearchInput] = useState('')

  const [filteredProducts, setFilteredProducts] = useState<any>()

  const [open, setOpen] = useState(false)

  const [openDropdown, setOpenDropdown] = useState(false)

  const [openProductPage, setOpenProductPage] = useState(false)

  const [productId, setProductId] = useState(0)


  function handleChange(e: any) {
    setSearchInput(e.target.value)
    const localSearch = e.target.value
    const copyArr = [...products]
    const filtered = copyArr.filter((item) => {
      return item.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .includes(localSearch.toLowerCase())
    })

    setFilteredProducts([...filtered])
  }

  return (
    <header className="flex sm:p-4 py-4 sm:px-1 w-full items-center justify-between shadow">
      {openProductPage ? (
        <ProductPage
          products={products}
          productId={productId}
          openProductPage={openProductPage}
          setOpenProductPage={setOpenProductPage}
        />
      ) : null}

      <div className="flex items-center gap-2" onClick={() => router.push('/')}>
        <div>
          <BuildingStorefrontIcon className="h-8 w-8 text-[#334990]" />
        </div>
        <h1 className="sm:text-4xl text-xl text-center font-semibold cursor-pointer" data-testid='12'>
          My Shop
        </h1>
      </div>
      <nav className="flex lg:gap-6 items-center">
        <a
          className="font-semibold cursor-pointer text-center lg:block hidden p-1 rounded-lg hover:bg-[#1a76ff0d] text-lg"
          onClick={() => router.push('/Products')}
        >
          Shop Products
        </a>
        <div
          className="lg:flex  items-center relative cursor-pointer hidden "
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <p className=" font-semibold p-1 rounded-lg hover:bg-[#1a76ff0d] text-lg">
            Categories
          </p>
          <ChevronDownIcon className="h-5" />
          <Dropdown openDropdown={openDropdown} />
        </div>

        <a
          className="hidden lg:block font-semibold cursor-pointer p-1 rounded-lg hover:bg-[#1a76ff0d] text-lg"
          onClick={() => router.push('/deals')}
          data-testid='deals-link'
        >
          Deals
        </a>
        <a
          className="hidden lg:block cursor-pointer font-semibold p-1 rounded-lg hover:bg-[#1a76ff0d] text-lg"
          onClick={() => router.push('/orders')}
        >
          Orders
        </a>
      </nav>
      <div className="relative w-1/3">
        <input
          className="w-full min-w-[80px] focus:outline-none rounded-2xl py-1 px-2 bg-[#1a76ff0d] hover:bg-[#e8e5e5]"
          value={searchInput}
          onChange={handleChange}
          disabled={products == undefined ? true : false}
          aria-label='search bar'
          placeholder='Search...'
        ></input>
        {searchInput != '' ? (
          <button
            className="absolute top-2 right-9"
            onClick={() => setSearchInput('')}
            aria-label='close'
          >
            <XMarkIcon className="h-5 hover:bg-[#ddddeb] rounded-lg" />
          </button>
        ) : null}
        <button className="absolute right-2 top-1" aria-label='search icon'>
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
        {searchInput.length > 0 && filteredProducts != undefined ? (
          <SearchDropdown
            filteredProducts={filteredProducts}
            setSearchInput={setSearchInput}
            setProductId={setProductId}
            products={products}
            openProductPage={openProductPage}
            setOpenProductPage={setOpenProductPage}
          />
        ) : null}
      </div>
      <div
        className="flex flex-col gap-x-1 cursor-pointer items-center"
        onClick={session.data == null ? () => signIn() : undefined}
      >
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
        <p
          className={`text-xs sm:block hidden`}
          onClick={session.data == null ? () => signIn() : () => signOut()}
        >
          {session.data != null ? `Sign Out` : null}
        </p>
      </div>
      <div
        className="flex gap-2 relative sm:pr-0 pr-2 cursor-pointer"
        onClick={() => router.push('/cart')}
        data-testid='cart'
      >
        <span
          className={`absolute bg-[#050217] text-white text-sm text-center px-1 rounded-full -top-2 sm:right-9 left-3 min-w-[20px] ${
            items.length === 0 ? 'hidden' : ''
          }`}
        >
          {items.length}
        </span>
        <ShoppingCartIcon className="h-6 w-6" />
        <p className="sm:block hidden font-semibold">Cart</p>
      </div>
      <div
        className="space-y-2 lg:hidden block pr-4"
        onClick={() => setOpen(!open)}
      >
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </header>
  )
}
