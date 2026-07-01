"use client"
import React from 'react'
import { IoCheckmarkCircleOutline, IoDiamondOutline } from 'react-icons/io5'
import { useTheme } from '@/app/context/ThemeContext'

const PlanPage = () => {
  const { theme } = useTheme()
  const isActive = theme === "light"

  const cardClass = `border rounded-md w-full py-4 px-3 ${isActive ? "bg-white border-black/10 shadow-md text-black" : "bg-[#1C1917] border-white/5 text-white"}`
  const offBtnClass = `border border-orange-500 text-orange-500 hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out flex items-center justify-center gap-1 py-1 px-3 rounded-md text-xs font-medium whitespace-nowrap shrink-0 ${isActive ? "bg-white" : "bg-black"}`

  const plans = [
    { name: "Basic", price: "500", daysLeft: "Days Left: 23 days", activeClass: "bg-orange-600", feature: "Allow adding and editing of 150 products." },
    { name: "Starter", price: "750", activeClass: "bg-green-500", feature: "Allow adding and editing of 250 products." },
    { name: "Standard", price: "1,000", activeClass: "bg-green-500", feature: "Allow adding and editing of 350 products." },
    { name: "Business", price: "1,250", activeClass: "bg-green-500", feature: "Allow adding and editing of 500 products." },
    { name: "Platinum", price: "1,600", activeClass: "bg-green-500", feature: "Allow adding and editing of 750 products." },
    { name: "Premium", price: "2,000", activeClass: "bg-green-500", feature: "Allow adding and editing of 1500 products." },
    { name: "Super Premium", price: "3,000", activeClass: "bg-green-500", feature: "Allow adding and editing of 2500 products.", nowrap: true },
  ]

  return (
   <div className="w-full px-3 py-4">
      
      <h2 className='text-2xl md:text-3xl px-5 font-semibold md:px-[5vw] lg:px-[7vw] xl:px-[11vw] xlg:px-[13vw]'>Plans</h2>
      <div className="py-4 px-7 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"> 

        {plans.map((plan) => (
        <div key={plan.name} className={cardClass}>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-2 w-full'>
              <p className={`font-semibold text-lg ${plan.nowrap ? "text-nowrap" : ""}`}>{plan.name}</p>
              <button className={offBtnClass}>
                <IoDiamondOutline size={14} /> 50% OFF
              </button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mt-2'>
              <p className={`${isActive ? "text-gray-600" : "text-gray-300"}`}>Nrs <span className={`text-2xl font-bold ${isActive ? "text-black" : "text-white"}`}>{plan.price}</span> /Month</p>
              {plan.daysLeft && <p className='text-orange-500 text-sm font-medium'>{plan.daysLeft}</p>}
              <button className={`${plan.activeClass} cursor-pointer w-full rounded-md font-semibold py-1.5 px-3 hover:opacity-90 transition-opacity text-black ${isActive ? "text-white" : "text-black"}`}>Active</button>
              <p className='flex items-start gap-2 text-gray-400 text-sm w-full'><IoCheckmarkCircleOutline size={20} className='text-green-500 shrink-0 self-start'/>{plan.feature}</p>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}

export default PlanPage
