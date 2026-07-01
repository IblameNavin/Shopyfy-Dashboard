import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { FiMessageSquare } from 'react-icons/fi'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoMoonOutline } from 'react-icons/io5'
import { MdOutlineMenuOpen } from 'react-icons/md'
import { useTheme } from '../context/ThemeContext'

type Props = {
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Navbar = ({setIsSidebarOpen}:Props) => {
  const { setTheme } = useTheme()
  return (
    <>
    <div className='w-full bg-[#22C55E] px-4 py-3 lg:px-40 text-white shadow-sm lg:h-18 '>
      <nav className='flex items-center justify-between md:justify-start md:gap-8'>
        
        {/* 1. Left Side: Menu Icon */}
        <button className='cursor-pointer hover:opacity-80 transition-opacity shrink-0 ' onClick={()=> setIsSidebarOpen(prev => !prev)}>
          <MdOutlineMenuOpen className='text-xl md:text-3xl lg:text-4xl' />
        </button>

        {/* 2. Middle: Welcome Message 
           md:mr-auto makes this element consume all leftover space on its right side, 
           causing the right-side icons to push away gradually as the screen grows.
        */}
        <h2 className='hidden sm:flex md:text-lg font-semibold tracking-wide md:block lg:text-xl whitespace-nowrap md:mr-auto sm:ml-5 md:ml-0 '>
          Good morning, Ganesh Furniture Pvt Ltd!
        </h2>

        {/* 3. Right Side: Actions/Icons */}
        <div className='flex items-center gap-5 ml-auto md:ml-0 md:gap-6 shrink-0 '>
          <button className='cursor-pointer hover:opacity-80 transition-opacity' onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}>
            <IoMoonOutline className='text-lg md:text-2xl' />
          </button>
          
          <button className='cursor-pointer hover:opacity-80 transition-opacity'>
            <FiMessageSquare className='text-lg md:text-2xl' />
          </button>
          
          <button className='relative cursor-pointer hover:opacity-80 transition-opacity'>
            <IoMdNotificationsOutline className='text-lg md:text-2xl' />
            <span className='absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white'>
              9+
            </span>
          </button>
          
          <div className='flex items-center gap-2 lg:gap-4 cursor-pointer border-l border-white/20 pl-4'>
            <GiPlagueDoctorProfile size={26} className='shrink-0' />
            <span className='hidden text-sm font-medium sm:block md:hidden lg:hidden'>User</span>
            
            <div className='hidden lg:flex lg:text-sm lg:flex-col leading-tight'>
              <p className='font-semibold'>Ganesh Furniture Pvt Ltd</p>
              <span className='text-[11px] opacity-90'>@ganesh_furniture_pvt_ltd</span>
            </div>
            
            <button className='cursor-pointer hover:opacity-80 transition-opacity'>
              <CiSettings className='hidden md:block md:text-3xl' />
            </button>
          </div>
        </div>

      </nav>
    </div>
           </>
  )
}

export default Navbar