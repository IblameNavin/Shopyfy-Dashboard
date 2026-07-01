"use client"
import Image from 'next/image'
import {  CiSearch } from 'react-icons/ci'
import { GrFormPrevious } from 'react-icons/gr'
import { IoIosAddCircleOutline,  } from 'react-icons/io'
import {  MdNavigateNext,  } from 'react-icons/md'
import Img from "@/public/unavailableDiscountPage.webp"
import { useTheme } from '@/app/context/ThemeContext'


const CouponPage = () => {
   const { theme } = useTheme()
   const isActive = theme === "light"

const tableGridClass = "grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center gap-4 text-[0.92rem]"
   return (
      <div className="w-full px-3">
         <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">

            <div className='flex flex-col justify-between md:items-center gap-4 md:flex-row'>
               <h2 className='text-xl font-semibold'>Coupon Code Management</h2>
               <button className={`flex items-center justify-between py-2 px-3.5 rounded-md bg-green-500 text-black gap-1 w-fit ${isActive ? "text-white" : "text-black"}`}><IoIosAddCircleOutline size={22} /> Add Coupon</button>
            </div>



               <div className="px-2 flex flex-col gap-4 shrink-0">
                    <div className='flex flex-col md:flex-row gap-3 md:items-center md:justify-center '>


                     <div className="flex items-center shrink-0 gap-3 text-[0.90rem]">
                        <span>Showing</span>
                        <select name="entries" id="entries" className={`border px-2 py-1.5 relative cursor-pointer outline-none focus:border-green-500 ${isActive ? "border-black/20 bg-white" : "border-white/20 bg-black"}`}>
                           <option value="10">10</option>
                           <option value="20">20</option>
                           <option value="30">30</option>
                        </select>
                        <span>entries</span>
                     </div>

                     <div className='w-full flex flex-col gap-3 md:flex-row md:gap-4 md:items-center md:justify-between '>
                        <div className={`flex border w-full items-center justify-between gap-2.5 px-2 rounded-md ${isActive ? "border-black/10 bg-white" : "border-white/10 bg-black"}`}>
                           <input type="text" placeholder='Search Name' className={`py-1.5 px-2 md:py-2.5 w-full rounded-md text-sm bg-transparent ${isActive ? "text-black" : "text-white"}`} />
                           <CiSearch size={22} />
                        </div>
                       

                        
                     </div>
                  </div>
            <div className={`py-4 border rounded-md w-full ${isActive ? "bg-white border-black/10 shadow-md text-black" : "bg-[#1C1917] border-white/5 text-white"}`}>
                  {/* Table  */}
                  <div className="w-full overflow-x-auto custom-scrollbar">
                     <div className='min-w-[1000px] xl:min-w-full flex-1 flex flex-col px-4 pb-1'>

                        {/* Table Header Row */}
                        <div className={`${tableGridClass} py-3.5 px-4 font-semibold border-b border-white/10 uppercase tracking-wider text-[11px] shrink-0 rounded-t-md ${isActive ? "text-black" : "text-gray-400"}`}>
                           <div className=''>SN</div>
                           <div className=''>Coupon ID</div>
                           <div className=''>Coupon Code</div>
                           <div className=''>Discount</div>
                           <div className=''>Status</div>
                           <div className=''>Start Date</div>
                           <div className=''>End Date</div>
                           <div className=''>Action</div>
                        </div>

                        {/* Table Data Rows Empty For Now*/}


                     </div>
                  </div>

                    

                  <div className="flex justify-between items-center py-6 px-4 mt-4">
                     <div className="flex gap-2">
                        <button className={`text-gray-400 hover:text-white border flex items-center justify-center py-2 px-3 rounded cursor-pointer transition-colors ${isActive ? "bg-white border-black/10" : "bg-black border-white/10"}`}>
                           <GrFormPrevious size={20} />
                        </button>
                        <button className={`text-gray-400 hover:text-white border flex items-center justify-center py-2 px-3 rounded cursor-pointer transition-colors ${isActive ? "bg-white border-black/10" : "bg-black border-white/10"}`}>
                           <MdNavigateNext size={20} />
                        </button>
                     </div>
                     <div>
                        <p className="text-gray-500 text-sm">Showing 0 entries</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default CouponPage
