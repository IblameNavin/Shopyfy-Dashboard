import { MockUsers } from "@/app/data/user";
import { MockProducts } from "@/app/data/products";
import { MockOrders } from "@/app/data/order";

export interface DashboardCalculations {
    totalUsers: number;
    totalActiveUsers: number;
    totalProducts: number;
    totalOrders: number;
    pendingOrders: number;
    totalEarnings: number;
}

export interface MonthlyRevenue {
    name: string;     
    earnings: number; 
}

export const getDashboardCalculations = async (): Promise<DashboardCalculations> => {
    return new Promise((resolve) => {
       const totalUsers = MockUsers.length;
       const totalActiveUsers = MockUsers.filter((u) => u.status === "active").length;
       const totalProducts = MockProducts.length;
       const totalOrders = MockOrders.length;
       const pendingOrders = MockOrders.filter((o) => o.orderStatus === "Pending").length;
       
       const totalEarnings = MockOrders.filter((o) => {
           const status = o.orderStatus?.toLowerCase();
           return status === "delivered" || status === "accepted";
       }).reduce((sum, order) => sum + order.totalAmount, 0);
    
       resolve({ totalUsers, totalActiveUsers, totalProducts, totalOrders, pendingOrders, totalEarnings });
    });
};

// Unified Data filtering setup for Week, Month, and Year view mappings
export const getFilteredRevenueData = async (filterType: string): Promise<MonthlyRevenue[]> => {
    return new Promise((resolve) => {
        const lowerFilter = filterType.toLowerCase();

        // --- WEEKLY FILTER MODE ---
        if (lowerFilter === 'week') {
            const weeklyData: { [key: string]: number } = {
                Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0
            };

            MockOrders.forEach((order) => {
                const status = order.orderStatus?.toLowerCase();
                if (status === "delivered" || status === "accepted") {
                    const dateObj = new Date(order.createdAt);
                    if (!isNaN(dateObj.getTime())) {
                        const dayName = dateObj.toLocaleString('en-US', { weekday: 'short' }); // "Sun", "Mon"...
                        if (weeklyData[dayName] !== undefined) {
                            weeklyData[dayName] += order.totalAmount;
                        }
                    }
                }
            });

            return resolve(Object.keys(weeklyData).map(day => ({ name: day, earnings: weeklyData[day] })));
        }

        // --- YEARLY FILTER MODE ---
        if (lowerFilter === 'year') {
            // Displays multi-year milestones dynamically based on your available data
            const yearlyData: { [key: string]: number } = { "2024": 0, "2025": 0, "2026": 0 };

            MockOrders.forEach((order) => {
                const status = order.orderStatus?.toLowerCase();
                if (status === "delivered" || status === "accepted") {
                    const dateObj = new Date(order.createdAt);
                    if (!isNaN(dateObj.getTime())) {
                        const yearName = dateObj.getFullYear().toString();
                        if (yearlyData[yearName] !== undefined) {
                            yearlyData[yearName] += order.totalAmount;
                        } else {
                            yearlyData[yearName] = order.totalAmount;
                        }
                    }
                }
            });

            return resolve(Object.keys(yearlyData).map(year => ({ name: year, earnings: yearlyData[year] })));
        }

        // --- DEFAULT MONTHLY FILTER MODE (Showing Jan-Jun or whole year) ---
        const monthlyData: { [key: string]: number } = {
            Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0,
            Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0
        };

        MockOrders.forEach((order) => {
            const status = order.orderStatus?.toLowerCase();
            if (status === "delivered" || status === "accepted") {
                const dateObj = new Date(order.createdAt);
                if (!isNaN(dateObj.getTime())) {
                    const monthName = dateObj.toLocaleString('en-US', { month: 'short' });
                    if (monthlyData[monthName] !== undefined) {
                        monthlyData[monthName] += order.totalAmount;
                    }
                }
            }
        });

        // Slice to only show Jan-Jun to preserve your initial layout bounds cleanly
        const payload = Object.keys(monthlyData).map(month => ({ name: month, earnings: monthlyData[month] }));
        resolve(payload.slice(0, 6)); 
    });
};