import { BsCash } from 'react-icons/bs'
import { FaRegClock, FaUser } from 'react-icons/fa'
import { HiOutlineCube } from 'react-icons/hi'
import { LuClipboardMinus } from 'react-icons/lu'
import { TbUsers } from 'react-icons/tb'
import LineChartCompo from './LineChartCompo'
import PieChartCompo from './PieChart';
import PopularClientCompo from './PopularClientCompo'

// Import data functions from your service layer
import { getDashboardCalculations, getFilteredRevenueData } from '@/app/lib/services/DashboardService'

const HomeCards = async() => {
  // ✅ FIX: Pass an initial default string ("month") so the function can resolve correctly on server build
  const [metrics, chartData] = await Promise.all([
    getDashboardCalculations(),
    getFilteredRevenueData("month") 
  ]);

  const totalEarnings = metrics.totalEarnings

  return (
    <>
    <div className='mt-8 px-4 w-full md:px-[5vw] xl:px-[11vw] flex flex-col gap-5 lg:gap-10 mb-20'>
       
        <div className='grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 w-full'>

          {/* Card 1 */}
          <div className='flex flex-col bg-[#1C1917] text-white px-4 py-6 border border-white/10 rounded-md gap-2'>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.totalUsers}</span>
                <i className='bg-[#1D3B25] p-1 border border-white/5 rounded-md text-green-400'><FaUser size={22} /></i>
              </div>
            <p><span className='text-gray-300 text-md'>Total Users</span></p>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col bg-[#1C1917] text-white p-4 border border-white/10 rounded-md gap-2'>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.totalActiveUsers}</span>
                <i className='bg-[#1D3B25] p-1 border border-white/5 rounded-md text-green-400'><TbUsers size={22} /></i>
              </div>
            <p><span className='text-gray-300 text-md'>Total Active Users</span></p>
          </div>

          {/* Card 3 */}
          <div className='flex flex-col bg-[#1C1917] text-white p-4 border border-white/10 rounded-md gap-2'>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.totalProducts}</span>
                <i className='bg-[#1D3B25] p-0.5 border border-white/5 rounded-md text-green-400'><HiOutlineCube size={25} /></i>
              </div>
            <p><span className='text-gray-300 text-md'>Total Products</span></p>
          </div>

          {/* Card 4 */}
          <div className='flex flex-col bg-[#1C1917] text-white p-4 border border-white/10 rounded-md gap-2'>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.totalOrders}</span>
                <i className='bg-[#1D3B25] p-1 border border-white/5 rounded-md text-green-400'><LuClipboardMinus size={22} /></i>
              </div>
            <p><span className='text-gray-300 text-md'>Total Orders</span></p>
          </div>

          {/* Card 5 */}
          <div className='flex flex-col bg-[#1C1917] text-white p-4 border border-white/10 rounded-md gap-2'>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>{metrics.pendingOrders}</span>
                <i className='bg-[#1D3B25] p-1 border border-white/5 rounded-md text-green-400'><FaRegClock size={22} /></i>
              </div>
            <p><span className='text-gray-300 text-md'>Pending Orders</span></p>
          </div>

          {/* Card 6 */}
          <div className='flex flex-col bg-[#1C1917] text-white p-4 border border-white/10 rounded-md gap-2'>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold'>Rs. {metrics.totalEarnings.toLocaleString()}</span>
                <i className='bg-[#1D3B25] p-1 border border-white/5 rounded-md text-green-400'><BsCash size={22} /></i>
              </div>
            <p><span className='text-gray-300 text-md'>Total Earnings</span></p>
          </div>

        </div>

        {/* Pass chartData directly into the component parameters */}
        <LineChartCompo initialChartData={chartData} totalEarnings={totalEarnings}/>
        
        <PieChartCompo/>
        <PopularClientCompo/>
        
    </div>
    </>
  )
}

export default HomeCards;