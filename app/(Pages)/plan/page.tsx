import React from 'react'
import { IoCheckmarkCircleOutline, IoDiamondOutline } from 'react-icons/io5'

const PlanPage = () => {
  return (
   <div className="w-full px-3 text-white py-4">
      
      <h2 className='text-2xl md:text-3xl px-5 font-semibold md:px-[5vw] lg:px-[7vw] xl:px-[11vw] xlg:px-[13vw]'>Plans</h2>
      <div className="py-4 px-7 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"> 

        {/* 1. Basic Plan */}
        <div className='bg-[#1C1917] border rounded-md border-white/5 w-full py-4 px-3'>
          <div className='flex flex-col gap-4'>
            {/* Added gap-2 and items-center to give breathing room in the header */}
            <div className='flex items-center justify-between gap-2 w-full'>
              <p className='font-semibold text-lg'>Basic</p>
              {/* Added whitespace-nowrap and shrink-0 so it never squishes */}
              <button className='border border-orange-500 bg-black text-orange-500 hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out flex items-center justify-center gap-1 py-1 px-3 rounded-md text-xs font-medium whitespace-nowrap shrink-0'>
                <IoDiamondOutline size={14} /> 50% OFF
              </button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mt-2'>
              <p className='text-gray-300'>Nrs <span className='text-2xl font-bold text-white'>500</span> /Month</p>
              <p className='text-orange-500 text-sm font-medium'>Days Left: 23 days</p>
              <button className='bg-orange-600 cursor-pointer w-full rounded-md font-semibold py-1.5 px-3 hover:opacity-90 transition-opacity'>Active</button>
              <p className='flex items-start gap-2 text-gray-400 text-sm w-full'><IoCheckmarkCircleOutline size={20} className='text-green-500 shrink-0 self-start'/>Allow adding and editing of 150 products.</p>
            </div>
          </div>
        </div>

        {/* 2. Starter Plan */}
        <div className='bg-[#1C1917] border rounded-md border-white/5 w-full py-4 px-3'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-2 w-full'>
              <p className='font-semibold text-lg'>Starter</p>
              <button className='border border-orange-500 bg-black text-orange-500 hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out flex items-center justify-center gap-1 py-1 px-3 rounded-md text-xs font-medium whitespace-nowrap shrink-0'>
                <IoDiamondOutline size={14} /> 50% OFF
              </button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mt-2'>
              <p className='text-gray-300'>Nrs <span className='text-2xl font-bold text-white'>750</span> /Month</p>
              <button className='bg-green-500 cursor-pointer w-full rounded-md font-semibold py-1.5 px-3 hover:opacity-90 transition-opacity'>Active</button>
              <p className='flex items-start gap-2 text-gray-400 text-sm w-full'><IoCheckmarkCircleOutline size={20} className='text-green-500 shrink-0 self-start'/>Allow adding and editing of 250 products.</p>
            </div>
          </div>
        </div>

        {/* 3. Standard Plan */}
        <div className='bg-[#1C1917] border rounded-md border-white/5 w-full py-4 px-3'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-2 w-full'>
              <p className='font-semibold text-lg'>Standard</p>
              <button className='border border-orange-500 bg-black text-orange-500 hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out flex items-center justify-center gap-1 py-1 px-3 rounded-md text-xs font-medium whitespace-nowrap shrink-0'>
                <IoDiamondOutline size={14} /> 50% OFF
              </button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mt-2'>
              <p className='text-gray-300'>Nrs <span className='text-2xl font-bold text-white'>1,000</span> /Month</p>
              <button className='bg-green-500 cursor-pointer w-full rounded-md font-semibold py-1.5 px-3 hover:opacity-90 transition-opacity'>Active</button>
              <p className='flex items-start gap-2 text-gray-400 text-sm w-full'><IoCheckmarkCircleOutline size={20} className='text-green-500 shrink-0 self-start'/>Allow adding and editing of 350 products.</p>
            </div>
          </div>
        </div>

        {/* 4. Business Plan */}
        <div className='bg-[#1C1917] border rounded-md border-white/5 w-full py-4 px-3'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-2 w-full'>
              <p className='font-semibold text-lg'>Business</p>
              <button className='border border-orange-500 bg-black text-orange-500 hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out flex items-center justify-center gap-1 py-1 px-3 rounded-md text-xs font-medium whitespace-nowrap shrink-0'>
                <IoDiamondOutline size={14} /> 50% OFF
              </button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mt-2'>
              <p className='text-gray-300'>Nrs <span className='text-2xl font-bold text-white'>1,250</span> /Month</p>
              <button className='bg-green-500 cursor-pointer w-full rounded-md font-semibold py-1.5 px-3 hover:opacity-90 transition-opacity'>Active</button>
              <p className='flex items-start gap-2 text-gray-400 text-sm w-full'><IoCheckmarkCircleOutline size={20} className='text-green-500 shrink-0 self-start'/>Allow adding and editing of 500 products.</p>
            </div>
          </div>
        </div>

        {/* 5. Platinum Plan */}
        <div className='bg-[#1C1917] border rounded-md border-white/5 w-full py-4 px-3'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-2 w-full'>
              <p className='font-semibold text-lg'>Platinum</p>
              <button className='border border-orange-500 bg-black text-orange-500 hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out flex items-center justify-center gap-1 py-1 px-3 rounded-md text-xs font-medium whitespace-nowrap shrink-0'>
                <IoDiamondOutline size={14} /> 50% OFF
              </button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mt-2'>
              <p className='text-gray-300'>Nrs <span className='text-2xl font-bold text-white'>1,600</span> /Month</p>
              <button className='bg-green-500 cursor-pointer w-full rounded-md font-semibold py-1.5 px-3 hover:opacity-90 transition-opacity'>Active</button>
              <p className='flex items-start gap-2 text-gray-400 text-sm w-full'><IoCheckmarkCircleOutline size={20} className='text-green-500 shrink-0 self-start'/>Allow adding and editing of 750 products.</p>
            </div>
          </div>
        </div>

        {/* 6. Premium Plan */}
        <div className='bg-[#1C1917] border rounded-md border-white/5 w-full py-4 px-3'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-2 w-full'>
              <p className='font-semibold text-lg'>Premium</p>
              <button className='border border-orange-500 bg-black text-orange-500 hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out flex items-center justify-center gap-1 py-1 px-3 rounded-md text-xs font-medium whitespace-nowrap shrink-0'>
                <IoDiamondOutline size={14} /> 50% OFF
              </button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mt-2'>
              <p className='text-gray-300'>Nrs <span className='text-2xl font-bold text-white'>2,000</span> /Month</p>
              <button className='bg-green-500 cursor-pointer w-full rounded-md font-semibold py-1.5 px-3 hover:opacity-90 transition-opacity'>Active</button>
              <p className='flex items-start gap-2 text-gray-400 text-sm w-full'><IoCheckmarkCircleOutline size={20} className='text-green-500 shrink-0 self-start'/>Allow adding and editing of 1500 products.</p>
            </div>
          </div>
        </div>

        {/* 7. Super Premium Plan */}
        <div className='bg-[#1C1917] border rounded-md border-white/5 w-full py-4 px-3'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-2 w-full'>
              <p className='font-semibold text-lg text-nowrap'>Super Premium</p>
              <button className='border border-orange-500 bg-black text-orange-500 hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out flex items-center justify-center gap-1 py-1 px-3 rounded-md text-xs font-medium whitespace-nowrap shrink-0'>
                <IoDiamondOutline size={14} /> 50% OFF
              </button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mt-2'>
              <p className='text-gray-300'>Nrs <span className='text-2xl font-bold text-white'>3,000</span> /Month</p>
              <button className='bg-green-500 cursor-pointer w-full rounded-md font-semibold py-1.5 px-3 hover:opacity-90 transition-opacity'>Active</button>
              <p className='flex items-start gap-2 text-gray-400 text-sm w-full'><IoCheckmarkCircleOutline size={20} className='text-green-500 shrink-0 self-start'/>Allow adding and editing of 2500 products.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlanPage