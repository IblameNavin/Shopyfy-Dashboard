"use client"
import { useState } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import { useTheme } from '../context/ThemeContext'


const DashboardShell = ({children}:{ children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const {theme} = useTheme()
  return (
    <div className='flex min-h-screen relative overflow-x-hidden bg-[#0C0A09]'>
        {isSidebarOpen && (
            <div 
                className='fixed inset-0 bg-black/60 z-[998] md:hidden transition-opacity duration-300'
                onClick={() => setIsSidebarOpen(false)}
            />
        )}
        
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        
        <div className={`flex-1 flex flex-col min-w-0 min-h-screen transition-all duration-300 ease-in-out ${isSidebarOpen ? "md:pl-80" : "md:pl-0"}`}>
            <Navbar setIsSidebarOpen={setIsSidebarOpen} />
            <main className={`flex-1 w-full ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
                {children}
            </main>
        </div>
    </div>
  )
}

export default DashboardShell