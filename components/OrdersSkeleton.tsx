import React from 'react'

export default function OrdersSkeleton() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 font-NotoSans">
      <h1
        className={`sm:text-3xl text-2xl pt-4 pl-4 font-bold mb-2 self-start`}
      >
        Your Orders
      </h1>

      {Array(3)
        .fill(undefined)
        .map((_, index) => (
          <article
            className=" flex flex-col w-11/12 sm:w-3/4 h-62 border shadow-lg rounded-lg self-center animate-pulse"
            key={index}
          >
            <div className="flex w-full h-20 bg-[#f6f6f6] p-1 sm:px-2 relative ">
              <div className="flex flex-col mr-4 sm:mr-12 self-center gap-1">
                <p className="font-semibold text-[0.8rem] sm:text-[1rem] h-[24px] w-[115px] bg-slate-300 rounded-xl"></p>
                <p className="text-[0.75rem] sm:text-[0.9rem] whitespace-nowrap h-[24px] w-[100px] bg-slate-300 rounded-xl"></p>
              </div>
              <div className="flex flex-col self-center gap-1">
                <p className="font-semibold text-[0.8rem] sm:text-[1rem] h-[24px] w-[100px] bg-slate-300 rounded-xl"></p>
                <p className="text-[0.75rem] sm:text-[0.9rem] whitespace-nowrap h-[24px] w-[80px] bg-slate-300 rounded-xl">
                  <span className="sm:block hidden"></span>
                </p>
              </div>

              <div className="flex flex-col ml-auto justify-center">
                <p className="truncate  text-[0.8rem] absolute top-1 right-2 h-[24px] w-[256px] bg-slate-300 rounded-xl"></p>
                <p className="self-end sm:text-xl text-[#445dc2] font-semibold h-[30px] w-[72px] bg-slate-300 rounded-xl mt-4"></p>
              </div>
            </div>

            <div className="flex p-2 px-4 gap-8 sm:h-44 h-32 items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full bg-slate-200">
              <div className="h-20 object-contain sm:h-32" />
            </div>
          </article>
        ))}
    </div>
  )
}
