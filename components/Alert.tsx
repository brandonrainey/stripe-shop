import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, selectOpenAlert, setOpenAlert } from '../slices/cartSlice'

export default function Alert() {
  const items = useSelector(selectItems)

  const dispatch = useDispatch()
  
  const openAlert = useSelector(selectOpenAlert)

  //timer for add to cart popup
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setOpenAlert(false))
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return openAlert ? (
    <div
      className={`fixed bottom-0 pb-4 pl-4 transition-all duration-300 opacity-1 ${
        openAlert ? 'opacity-1' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-blue-100 border border-slate-400 text-black px-4 py-3 pr-8 rounded relative w-full sm:w-[400px] truncate shadow `}
        role="alert"
      >
        <p className="block sm:inline font-semibold w-[250px] truncate">
          Added to Cart - {items.at(-1)?.title}
        </p>
        <span
          className="absolute top-0 bottom-0 -right-1 px-4 py-3"
          onClick={() => dispatch(setOpenAlert(false))}
        >
          <svg
            className="fill-current h-6 w-6 text-slate-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            aria-label='close'
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  ) : null
}
