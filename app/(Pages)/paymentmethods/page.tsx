"use client"
import Image from 'next/image'
import React from 'react'
import img from "@/public/e-sewa.webp"
import khalti from "@/public//khalti.webp"
import stripe from "@/public/stripe.webp"
import mypay from "@/public/myPay1.webp"
import { useTheme } from '@/app/context/ThemeContext'

const PaymentMethods = () => {
  const { theme } = useTheme()
  const isActive = theme === "light"

  const cardClass = `border rounded-md w-full flex flex-col cursor-pointer transition-all ease-in-out duration-300 hover:scale-[1.03] ${isActive ? "bg-white border-black/10 shadow-md" : "bg-[#1C1917] border-white/5"}`

  return (
     <div className="w-full px-3">
      <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4"> 
        <h2 className='text-lg md:text-xl font-semibold'>Payment Methods</h2>



         <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4'>

          {/* Esewa  */}
         <div className={cardClass}>
         <div className='flex items-center justify-center  h-40'>
            <Image src={img}  alt='img' className='object-cover' width={150} />
         </div>
         </div>
 
        {/* Khalti  */}
         <div className={cardClass}>
         <div className='flex items-center justify-center h-40'>
            <Image src={khalti} alt='img' className='object-cover ' width={150}/>
         </div>
      </div>


       {/* Stripe  */}
         <div className={cardClass}>
         <div className='flex items-center justify-center h-40'>
            <Image src={stripe} alt='img' className='object-cover ' width={150}/>
         </div>
         </div>


          {/* MyPay  */}
         <div className={cardClass}>
         <div className='flex items-center justify-center h-40'>
            <Image src={mypay} alt='img' className='object-cover ' width={150}/>
         </div>
         </div>
         </div>
</div>
      </div>
  )
}

export default PaymentMethods
