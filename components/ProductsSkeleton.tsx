import React from 'react'

export default function ProductsSkeleton() {
  return (
    <div>
      <h1 className="text-3xl font-bold pl-6 pt-6 font-NotoSans">All Products</h1>
      <div className="w-full self-center gap-y-4 gap-x-4 px-4 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array(20)
          .fill(undefined)
          .map((_, index) => (
            <article className="flex justify-center animate-pulse" key={index}>
              <div className="flex flex-col  w-full h-96 gap-1  pb-1 mt-8 rounded-xl self-center justify-end ">
                <div className="w-full h-full flex justify-center bg-slate-200 rounded-lg"></div>
                <div className="flex flex-col bg-[#f6f6f6] p-1 rounded-lg h-40">
                  <div className="flex w-full  ">
                    <p className="font-semibold text-medium mr-6">{}</p>
                    <p className="ml-auto text-2xl font-bold"></p>
                  </div>

                  <p className="text-xs line-clamp-2 ">{}</p>
                  <div className="flex "></div>

                  <button
                    className=" w-28 p-1 bg-slate-300 rounded-2xl self-center border-2 font-semibold text-sm h-8 mt-auto"
                    aria-label="add to cart"
                  ></button>
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  )
}
