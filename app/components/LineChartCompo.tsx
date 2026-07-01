'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useState, useEffect } from 'react';
import { GiBeltArmor } from 'react-icons/gi';
import { MonthlyRevenue, getFilteredRevenueData } from "@/app/lib/services/DashboardService"; 
import { useTheme } from '../context/ThemeContext';

interface LineChartCompoProps {
  initialChartData: MonthlyRevenue[];
  totalEarnings: number;
}

const LineChartCompo = ({ initialChartData = [], totalEarnings = 0 }: LineChartCompoProps) => {
  const [activeClass, setActiveClass] = useState("Month")
  const [chartData, setChartData] = useState<MonthlyRevenue[]>(initialChartData);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hook listening to option buttons to re-calculate dataset splits instantly
  useEffect(() => {
    if (!mounted) return;
    const updateChartDataset = async () => {
      setLoading(true);
      try {
        const dynamicPayload = await getFilteredRevenueData(activeClass);
        setChartData(dynamicPayload);
      } catch (err) {
        console.error("Error updates matching chart criteria selection:", err);
      } finally {
        setLoading(false);
      }
    };

    updateChartDataset();
  }, [activeClass, mounted]);

  if (!mounted) {
    return <div className="w-full h-[450px] bg-[#1C1917] rounded-md animate-pulse border border-white/10 mt-6" />;
  }

  return (
    <div className={`w-full bg-[#1C1917] p-4 sm:p-5 lg:py-10 border rounded-md mt-6 h-auto ${theme === "light" ? "bg-white border-black/10 text-black shadow-md" : "bg-[#1C1917] border-white/10 text-white"}`}>
      <div className='pb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className={`flex flex-col gap-2 ${theme === "light" ? "text-black" : "text-white"}`}>
          <h2 className='text-lg font-semibold'>Revenue Report</h2>
          <div className='flex items-center gap-3'>
            <div className='h-3 w-3 bg-purple-500 rounded shrink-0' />
            <span className={`text-sm font-medium whitespace-nowrap ${theme === "light" ? "text-black" : "text-gray-300"}`}>
              Earnings: Rs. {totalEarnings.toLocaleString('en-US')}
            </span>
          </div>
        </div>

        {/* Dynamic Navigation View Tabs */}
        <div className={`border py-1 px-1 bg-white text-black rounded flex gap-1 items-center self-start sm:self-auto ${theme === "light" ? "border-none" : ""}`}>
         {['Week', 'Month', 'Year'].map((index)=>
          <button 
            key={index} 
            onClick={()=> setActiveClass(index)} 
            className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeClass === index ? "bg-black text-black" : "hover:bg-gray-100 text-gray-400"
            } ${theme === "light" ? "bg-white" : "text-white"}` }
          >
            {index}
          </button>
         )}
        </div>
      </div>

      <div className={`h-80 w-full min-w-[300px] relative transition-opacity duration-200 ${loading ? 'opacity-40' : 'opacity-100'}`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 15, left: -15, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis 
              dataKey="name" 
              stroke="#6B7280" 
              tick={{ fill: '#9CA3AF', fontSize: 12 }} 
              tickLine={false} 
            />
            <YAxis 
              stroke="#6B7280" 
              tick={{ fill: '#9CA3AF', fontSize: 12 }} 
              tickLine={false} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1C1917', 
                color: '#ffffff', 
                borderRadius: '6px', 
                border: '1px solid rgba(255,255,255,0.1)' 
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="earnings" 
              stroke="#22C55E" 
              strokeWidth={3} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-green-500 flex items-center justify-center gap-2 mt-4">
        <GiBeltArmor size={24} />
        <p className="font-semibold text-sm">Rs. {totalEarnings.toLocaleString('en-US')} Earned</p>
      </div>
    </div>
  )
}

export default LineChartCompo;