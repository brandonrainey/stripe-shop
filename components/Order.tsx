import React from 'react'
import moment from 'moment'
import ScrollContainer from 'react-indiana-drag-scroll'

interface OrderProp {
  order: any
}

export default function Order({ order }: OrderProp) {
  
  return (
    <div className=" flex flex-col w-11/12 sm:w-3/4 h-62 border shadow-lg rounded-lg">
      <div className="flex w-full h-20 bg-[#f6f6f6] p-1 sm:px-2 relative">
        <div className="flex flex-col mr-4 sm:mr-12 self-center">
          <p className="font-semibold text-[0.8rem] sm:text-[1rem]">
            ORDER PLACED
          </p>
          <p className="text-[0.75rem] sm:text-[0.9rem] whitespace-nowrap">
            {moment.unix(order.timestamp).format('DD MMM YYYY')}
          </p>
        </div>
        <div className="flex flex-col self-center">
          <p className="font-semibold text-[0.8rem] sm:text-[1rem]">TOTAL</p>
          <p className="text-[0.75rem] sm:text-[0.9rem] whitespace-nowrap">
            {`$${order.amount}`}
            <span className="sm:block hidden">{` - Next-Day Delivery $${order.amountShipping}`}</span>
          </p>
        </div>

        <div className="flex flex-col ml-auto gap-1 justify-center">
          <p className="truncate sm:w-64 w-40 text-[0.8rem] absolute top-1 right-2">{`ORDER # ${order.id}`}</p>
          <p className="self-end sm:text-xl text-[#445dc2] font-semibold">
            {order.items.length} items
          </p>
        </div>
      </div>

      <ScrollContainer
        className="flex p-2 px-4 gap-8 sm:h-44 h-32 items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        hideScrollbars={false}
      >
        {order.images.map((image: string, index: number) => (
          <img
            src={image}
            className="h-20 object-contain sm:h-32"
            alt={'product image'}
            key={index}
          />
        ))}
      </ScrollContainer>
    </div>
  )
}
