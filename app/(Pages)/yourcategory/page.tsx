"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci"
import { FaCashRegister, FaMobileAlt } from "react-icons/fa"
import { GiLipstick } from "react-icons/gi"
import { GrFormPrevious } from "react-icons/gr"
import { IoAddCircleOutline } from "react-icons/io5"
import { MdNavigateNext, MdOutlineComputer, MdOutlineMedicalServices } from "react-icons/md"
import { getProducts } from "@/app/lib/services/productService"
import { getOrders } from "@/app/lib/services/orderService"
import { getUsers } from '../../lib/services/userService';
import { useTheme } from '@/app/context/ThemeContext'

interface ClientRecord {
  id: number,
  category: string,
  subCategory: string[],
  superCategory: string,
  totalProducts: number
}

const YourCategory = () => {
  const { theme } = useTheme()
  const isActive = theme === "light"
  const [activeGreen, setActiveGreen] = useState<"all" | "your">("your")
  
  // Clean, structural grid tracks. Using fixed safe sizing for counters/actions, explicit elastic fr streams for data.
  const tableGridClass = "grid grid-cols-[60px_1.5fr_2fr_130px_2.5fr_100px] items-center gap-4 text-[0.92rem]"
  const [clientData, setClientData] = useState<ClientRecord[] | null>([])

  useEffect(() => {
      const fetchData = async () => {
        const [users, products, orders] = await Promise.all([getUsers(), getProducts(), getOrders()])
        
        const grouped:Record<string, ClientRecord> = {}
        products.forEach((product, index) => {
          const key = product.category
          
          if(!grouped[key]) {
            grouped[key] = {
              id: index + 1,
              category: product.category,
              subCategory: [],
              superCategory: product.superCategory,
              totalProducts: 0
            }
          }
          grouped[key].totalProducts += 1
          
          if(product.subCategory && product.subCategory.length > 0) {
            product.subCategory.forEach((sub:string) => {
              if(!grouped[key].subCategory.includes(sub)) {
                grouped[key].subCategory.push(sub)
              }
            })
          }
        })
        setClientData(Object.values(grouped))
      }
      fetchData()
  }, [])
  

  return (
    <div className="w-full">
     
      <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Category List</h2>
          <button className={`flex items-center justify-center gap-1.5 bg-green-500 py-2 px-4 text-black font-medium rounded-md cursor-pointer hover:bg-green-600 transition-colors ${isActive ? "text-white" : "text-black"}`}> 
            <IoAddCircleOutline size={22}/> Add Category
          </button>
        </div>

        {/* Main Panel Box Container */}
        <div className={`flex-1 flex flex-col border rounded-md w-full min-h-160 py-4 ${isActive ? "bg-white border-black/10 shadow-md text-black" : "bg-[#1C1917] border-white/5 text-white"}`}>
            
          {/* Controls Box */}
          <div className="px-4 flex flex-col lg:flex-row lg:justify-between gap-4 shrink-0 mb-8">
            <div className={`flex w-full lg:w-[70%] x15:w-[71%] rounded-md px-2 items-center gap-4 border lg:justify-between ${isActive ? "border-black/20" : "border-white/20"}`}>
              <input type="text" placeholder="Search Name" className={`text-sm px-1.5 py-2 rounded-md w-80 outline-none lg:w-full ${isActive ? "bg-white text-black" : "bg-black text-white"}`}/>
              <CiSearch size={22} className="text-gray-400 shrink-0"/>
            </div>

            <div className="flex items-center gap-3">
              <Link href={"/category"} className={`py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${activeGreen === "all" ? "bg-green-500 text-black font-medium" : isActive ? "bg-white text-gray-400 border border-black/10" : "bg-black text-gray-400 border border-white/10"}`} onClick={()=>setActiveGreen("all")}>All Categories</Link>
              <button className={`py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${activeGreen === "your" ? "bg-green-500 text-black font-medium" : isActive ? "bg-white text-gray-400 border border-black/10" : "bg-black text-gray-400 border border-white/10"} ${isActive ? "text-white" : "text-black"}`} onClick={()=>setActiveGreen("your")}>Your Categories</button>
            </div>
          </div>
                
          {/* LOCAL SCROLL WRAPPER */}
          <div className="w-full overflow-x-auto custom-scrollbar">
            {/* CANVAS WINDOW - Locks columns cleanly on desktop and allows responsive sliding layout below 1100px */}
            <div className='min-w-[1100px] xl:min-w-full flex-1 flex flex-col px-4 pb-1'>
              
              {/* Table Header Row */}
              <div className={`${tableGridClass} bg-white/5 py-3.5 px-4 font-semibold border-b border-white/10 uppercase tracking-wider text-[11px] shrink-0 rounded-t-md ${isActive ? "text-black" : "text-gray-400"}`}>
                  <div className='text-left'>SN</div>
                  <div className='text-left'>Category</div>
                  <div className='text-left'>Super Category</div>
                  <div className='text-left'>Total Products</div>
                  <div className='text-left'>Sub-Categories</div>
                  <div className='text-center'>Actions</div>
              </div>

              {/* Table Data Rows */}
              
              {/* Row 1 */}
              {clientData?.slice(0, 6).map((item, index) =>{
                return <>
              <div key={index} className={`${tableGridClass} py-6 lg:py-6 px-4 border-b hover:bg-white/3 transition-colors ${isActive ? "border-black/10" : "bg-[#1C1917] border-white/5 text-gray-300"}`}> 
                  <div className={`text-left font-medium ${isActive ? "text-black" : "text-gray-500"}`}>{index + 1}</div>
                  <div className={`text-left font-medium ${isActive ? "text-black" : "text-white"}`}>{item.category}</div>
                  <div className="flex items-center justify-start gap-3 w-full min-w-0">
                    <MdOutlineMedicalServices size={22} className="text-gray-400 shrink-0" />
                    <span className={`truncate text-left ${isActive ? "text-black" : "text-gray-300"}`}>{item.superCategory}</span>
                  </div>
                  <div className={`text-left font-semibold pl-4 ${isActive ? "text-black" : "text-white"}`}>{item.totalProducts}</div>
                  <div className={`text-left ${isActive ? "text-black" : "text-gray-400"}`}>
                    {item.subCategory.length > 0 ? item.subCategory.join(", ") : "-"}
                    </div>
                  <div className='text-center cursor-pointer text-blue-400 hover:underline font-medium'>Edit</div>
              </div>
                </>
              })}

          </div>
          </div>

          {/* Pagination Controls Footer */}
          <div className="flex justify-between items-center py-6 px-4 mt-4">
            <div className="flex gap-2">
              <button className={`text-gray-400 hover:text-white border flex items-center justify-center py-2 px-3 rounded cursor-pointer transition-colors ${isActive ? "bg-white border-black/10" : "bg-black border-white/10"}`}>
                <GrFormPrevious size={20}/>
              </button>
              <button className={`text-gray-400 hover:text-white border flex items-center justify-center py-2 px-3 rounded cursor-pointer transition-colors ${isActive ? "bg-white border-black/10" : "bg-black border-white/10"}`}>
                <MdNavigateNext size={20}/>
              </button>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Showing 10 entries</p>
            </div>
          </div>
          
      </div>
    </div>
    </div>
  )
}

export default YourCategory