"use client"
import LineChartCompo from "./LineChartCompo"
import PieChartCompo from "./PieChart"
import PopularClientCompo from "./PopularClientCompo"

import { BsCash } from 'react-icons/bs'
import { FaRegClock, FaUser } from 'react-icons/fa'
import { HiOutlineCube } from 'react-icons/hi'
import { LuClipboardMinus } from 'react-icons/lu'
import { TbUsers } from 'react-icons/tb'
import { DashboardCalculations, MonthlyRevenue } from "../lib/services/DashboardService"
import { useTheme } from "../context/ThemeContext"

type Props = {
   metrics: DashboardCalculations
   totalEarnings: number
   chartData:  MonthlyRevenue[]
}

const HomeCardClient = ({metrics, totalEarnings, chartData}: Props) => {
    const { theme } = useTheme()   
  return (
   <>
    <div className={`mt-8 px-4 w-full md:px-[5vw] xl:px-[11vw] flex flex-col gap-5 lg:gap-10 mb-20`}>
       
        <div className={`grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 w-full`}>

          {/* Card 1 */}
          <div className={`flex flex-col px-4 py-6 border rounded-md gap-2 ${theme === "light" ? "bg-white border-black/10 text-black shadow-md " : "bg-[#1C1917] border-white/10 text-white"}`}>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.totalUsers}</span>
                <i className={` p-1 border border-white/5 rounded-md  ${theme === "light" ? "bg-[#90dca6] text-green-200" : "bg-[#1D3B25] text-green-400"}`}><FaUser size={22} /></i>
              </div>
            <p><span className='text-md'>Total Users</span></p>
          </div>

          {/* Card 2 */}
          <div className={`flex flex-col bg-[#1C1917] border p-4 rounded-md gap-2 ${theme === "light" ? "bg-white border-black/10 text-black shadow-md" : "bg-[#1C1917] border-white/10 text-white"}`}>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.totalActiveUsers}</span>
                <i className={`p-1 border border-white/5 rounded-md ${theme === "light" ? "bg-[#90dca6] text-green-200" : "bg-[#1D3B25] text-green-400"}`}><TbUsers size={22} /></i>
              </div>
            <p><span className='text-md'>Total Active Users</span></p>
          </div>

          {/* Card 3 */}
          <div className={`flex flex-col bg-[#1C1917] p-4 border rounded-md gap-2 ${theme === "light" ? "bg-white border-black/10 text-black shadow-md" : "bg-[#1C1917] border-white/10 text-white"}`}>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.totalProducts}</span>
                <i className={`p-0.5 border border-white/5 rounded-md ${theme === "light" ? "bg-[#90dca6] text-green-200" : "bg-[#1D3B25] text-green-400"}`}><HiOutlineCube size={25} /></i>
              </div>
            <p><span className='text-md'>Total Products</span></p>
          </div>

          {/* Card 4 */}
          <div className={`flex flex-col bg-[#1C1917] p-4 border rounded-md gap-2 ${theme === "light" ? "bg-white border-black/10 text-black shadow-md" : "bg-[#1C1917] border-white/10 text-white"}`}>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.totalOrders}</span>
                <i className={`p-1 border border-white/5 rounded-md ${theme === "light" ? "bg-[#90dca6] text-green-200" : "bg-[#1D3B25] text-green-400"}`}><LuClipboardMinus size={22} /></i>
              </div>
            <p><span className='text-md'>Total Orders</span></p>
          </div>

          {/* Card 5 */}
          <div className={`flex flex-col bg-[#1C1917] p-4 border rounded-md gap-2 ${theme === "light" ? "bg-white border-black/10 text-black shadow-md" : "bg-[#1C1917] border-white/10 text-white"}`}>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.pendingOrders}</span>
                <i className={`p-1 border border-white/5 rounded-md ${theme === "light" ? "bg-[#90dca6] text-green-200" : "bg-[#1D3B25] text-green-400"}`}><FaRegClock size={22} /></i>
              </div>
            <p><span className='text-md'>Pending Orders</span></p>
          </div>

          {/* Card 6 */}
          <div className={`flex flex-col bg-[#1C1917] p-4 border rounded-md gap-2 ${theme === "light" ? "bg-white border-black/10 text-black shadow-md" : "bg-[#1C1917] border-white/10 text-white"}`}>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>Rs. {metrics.totalEarnings.toLocaleString()}</span>
                <i className={`p-1 border border-white/5 rounded-md ${theme === "light" ? "bg-[#90dca6] text-green-200" : "bg-[#1D3B25] text-green-400"}`}><BsCash size={22} /></i>
              </div>
            <p><span className='text-md'>Total Earnings</span></p>
          </div>

        </div>

        <LineChartCompo initialChartData={chartData} totalEarnings={totalEarnings}/>
        
        <PieChartCompo/>
        <PopularClientCompo/>
        
    </div>
    </>
  )
}

export default HomeCardClient