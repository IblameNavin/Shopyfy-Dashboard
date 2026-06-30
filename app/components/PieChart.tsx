'use client'
import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { getOrders } from "@/app/lib/services/orderService"

const PieChartCompo = () => {
  const [metrics, setMetrics] = useState({ totalOrders: 0, totalRevenue: 0, avgValue: 0 })
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const fetchOrders = async () => {
      try {
        const orders = await getOrders()
        
        const revenue = orders
          .filter((order: any) => {
            const status = order.orderStatus?.toLowerCase();
            return status === "delivered" || status === "accepted";
          })
          .reduce((sum: number, order: any) => sum + (order.totalAmount || 0), 0);

        setMetrics({
          totalOrders: orders.length,
          totalRevenue: revenue,
          avgValue: orders.length > 0 ? (revenue / orders.length) : 0
        });
      } catch (error) {
        console.log("Error processing dashboard metrics:", error);
      }
    }

    fetchOrders();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return <div className="w-full h-64 bg-[#1C1917] rounded-md animate-pulse" />;

  const chartCx = isDesktop ? "40%" : "50%";
  const innerR = isDesktop ? 65 : 50;
  const outerR = isDesktop ? 105 : 80;

  const chartData = [
    { name: 'Total Revenue', value: metrics.totalRevenue || 0 },
    { name: 'Average Value', value: metrics.avgValue || 0 },
    { name: 'Total Orders', value: metrics.totalOrders || 0 }
  ];

  const COLORS = ['#22C55E', '#A855F7', '#3B82F6'];

  return (
    <div className='w-full h-full bg-[#1C1917] p-6 border border-white/10 rounded-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
      
      <div className='flex flex-col w-full h-full justify-between'>
        <h3 className="text-white font-semibold text-xl mb-2">Sales Split</h3>
        
        <div className='w-full h-64 relative'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {/* Formatter function to make tooltips show clean currency/units */}
              <Tooltip 
                contentStyle={{ backgroundColor: '#1C1917', color: '#ffffff', borderRadius: '6px', borderColor: 'rgba(255,255,255,0.1)' }} 
                formatter={(value, name) => [
                  name === 'Total Orders' ? value : `Rs. ${value?.toLocaleString('en-US')}`, 
                  name
                ]}
              />

              <text x={chartCx} y="46%" textAnchor="middle" dominantBaseline="middle" className="fill-gray-400 text-[11px] font-medium">
                Total Revenue
              </text>
              <text x={chartCx} y="56%" textAnchor="middle" dominantBaseline="middle" className="fill-[#22C55E] text-xs sm:text-sm font-bold">
                Rs. {metrics.totalRevenue.toLocaleString('en-US')}
              </text>

              <Pie
                data={chartData}
                cx={chartCx} 
                cy="50%"
                dataKey="value"
                innerRadius={innerR}  
                outerRadius={outerR}  
                paddingAngle={4}  
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='flex flex-col gap-4 border-t border-white/5 md:border-t-0 pt-4 md:pt-0 h-full justify-center text-white'>
        <h4 className='text-sm font-semibold tracking-wider text-gray-500 uppercase'>Summary</h4>
        
        <div className='space-y-3'>
          <div className='flex items-center gap-3'>
            <span className='h-3 w-3 rounded bg-blue-500 shrink-0' />
            <p className='text-gray-400 text-sm'>Total Orders: <span className='font-semibold text-white ml-1'>{metrics.totalOrders}</span></p>
          </div>
          
          <div className='flex items-center gap-3'>
            <span className='h-3 w-3 rounded bg-green-500 shrink-0' />
            <p className='text-gray-400 text-sm'>Total Revenue: <span className='font-semibold text-white ml-1'>Rs. {metrics.totalRevenue.toLocaleString('en-US')}</span></p>
          </div>
          
          <div className='flex items-center gap-3'>
            <span className='h-3 w-3 rounded bg-purple-500 shrink-0' />
            <p className='text-gray-400 text-sm'>Avg. Value: <span className='font-semibold text-white ml-1'>Rs. {metrics.avgValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PieChartCompo;