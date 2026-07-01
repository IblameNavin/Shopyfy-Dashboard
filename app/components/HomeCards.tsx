

import { getDashboardCalculations, getFilteredRevenueData } from '@/app/lib/services/DashboardService'
import HomeCardClient from './HomeCardClient'

const HomeCards = async() => {
  const [metrics, chartData] = await Promise.all([
    getDashboardCalculations(),
    getFilteredRevenueData("month") 
  ]);

  const totalEarnings = metrics.totalEarnings
  
  
  return (
    <HomeCardClient metrics = {metrics} totalEarnings = {totalEarnings} chartData = {chartData}/>
  )
}

export default HomeCards;