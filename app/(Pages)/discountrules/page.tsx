"use client"
import Image from 'next/image'
import {  CiSearch } from 'react-icons/ci'
import { GrFormPrevious } from 'react-icons/gr'
import { IoIosAddCircleOutline,  } from 'react-icons/io'
import {  MdNavigateNext,  } from 'react-icons/md'
import Img from "@/public/unavailableDiscountPage.webp"


const DiscountRules = () => {
   

   // This forces everything to align perfectly like a real database table
   // A completely optimized layout distribution for medium-to-wide screens
const tableGridClass = "grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center gap-4 text-[0.92rem]"
   return (
      <div className="w-full px-3 text-white">
         <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">

            <div className='flex justify-between items-center'>
               <h2 className='text-xl font-semibold'>Discount Rules</h2>
               <button className='flex items-center justify-between py-2 px-3.5 rounded-md bg-green-500 text-black gap-1'><IoIosAddCircleOutline size={22} /> Add New Rule</button>
            </div>



               <div className="px-2 flex flex-col gap-4 shrink-0 text-white">
                  <div className='flex flex-col md:flex-row gap-3 md:items-center md:justify-center '>


                     <div className="flex items-center shrink-0 gap-3 text-[0.90rem]">
                        <span>Showing</span>
                        <select name="entries" id="entries" className="border border-white/20 bg-black px-2 py-1.5 relative cursor-pointer outline-none focus:border-green-500">
                           <option value="10">10</option>
                           <option value="20">20</option>
                           <option value="30">30</option>
                        </select>
                        <span>entries</span>
                     </div>

                     <div className='w-full flex flex-col gap-3 md:flex-row md:gap-4 md:items-center md:justify-between '>
                        <div className='flex border border-white/10 w-full items-center justify-between gap-2.5 px-2 rounded-md'>
                           <input type="text" placeholder='Search Name' className='bg-black py-1.5 px-2 md:py-2.5 w-full rounded-md text-sm' />
                           <CiSearch size={22} />
                        </div>
                       

                        
                     </div>
                  </div>

            <div className='bg-[#1C1917] py-4 border rounded-md border-white/5 w-full'>
                  {/* Table  */}
                  <div className="w-full overflow-x-auto custom-scrollbar">
                     {/* CANVAS WINDOW - Locks columns cleanly on desktop and allows responsive sliding layout below 1100px */}
                     <div className='min-w-[1000px] xl:min-w-full flex-1 flex flex-col text-white px-4 pb-1'>

                        {/* Table Header Row */}
                        <div className={`${tableGridClass} py-3.5 px-4 font-semibold border-b border-white/10 uppercase tracking-wider text-gray-400 text-[11px] shrink-0 rounded-t-md`}>
                           <div className=''>SN</div>
                           <div className=''>Rule Name</div>
                           <div className=''>Status</div>
                           <div className=''>Discount Type</div>
                           <div className=''>Category</div>
                           <div className=''>Start Date</div>
                           <div className=''>End Date</div>
                           <div className=''>Action</div>
                        </div>

                        {/* Table Data Rows Empty For Now*/}


                     </div>
                  </div>

                     <div className='flex items-center justify-center flex-col px-3 mt-7'>
                        <Image src={Img} alt='img' width={200} height={200} className=''/>

                        <div className='flex flex-col gap-2 mt-2'>
                        <p className='text-center text-gray-600 '>You dont have any discount policy yet.</p>
                        <span className=' text-gray-400 text-center text-[0.90rem]'>Start typing your discount rules. Use the add button to write your first discount policy.</span>
                        </div>
                     </div>

                  <div className="flex justify-between items-center py-6 px-4 mt-4">
                     <div className="flex gap-2">
                        <button className="bg-black text-gray-400 hover:text-white border border-white/10 flex items-center justify-center py-2 px-3 rounded cursor-pointer transition-colors">
                           <GrFormPrevious size={20} />
                        </button>
                        <button className="bg-black text-gray-400 hover:text-white border border-white/10 flex items-center justify-center py-2 px-3 rounded cursor-pointer transition-colors">
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

export default DiscountRules