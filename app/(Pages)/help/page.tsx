"use client"
import React from 'react'
import img from "@/public/darkLogo .webp"
import Image from 'next/image'
import user from "@/public/user.webp"
import { useTheme } from '@/app/context/ThemeContext'

const HelpPage = () => {
  const { theme } = useTheme()
  const isActive = theme === "light"

  const listItemClass = `px-2 border rounded-md ${isActive ? "border-black/15 bg-white" : "border-white/15"}`

  const users = [
    { name: "Gaurav Khatiwada", message: "h", time: "7m", imgClass: "object-cover rounded-full h-8 w-8" },
    { name: "Roshan Bhusal", message: "Tap to send message", time: "7m", imgClass: "object-contain rounded-full h-8 w-8" },
    { name: "oneclickresult", message: "Tap to send message", time: "7m", imgClass: "object-contain rounded-full h-8 w-8" },
    { name: "D", message: "Tap to send message", time: "7m", imgClass: "object-contain rounded-full h-8 w-8" },
  ]

  return (
    <div className="w-full px-6 py-5 min-h-screen">

        <div className='sm:flex sm:flex-row gap-5 h-[90vh]'>

        <div className='mt-3 flex flex-col gap-3 justify-between sm:w-[380px] h-fit'>
        <h2 className='text-lg md:text-xl font-semibold'>Support</h2>
            <div className={listItemClass}>
                <div className='flex items-center justify-between'>

                <div className='flex  gap-2 text-gray-400 justify-center items-center'>
            <Image src={img} alt="img" height={40} width={28} className='object-contain'/>
            <div className='flex flex-col text-sm'>
                <h3 className={isActive ? "text-black" : ""}>ShofyDrop</h3>
                <p>hello</p>
            </div>
                </div>
            <div className='self-end text-gray-400 text-sm'>
                <p>10m</p>
            </div>
                </div>
            </div>

            <h2 className='font-semibold'>Users</h2>

            {users.map((u) => (
             <div key={u.name} className={listItemClass}>
                <div className='flex items-center justify-between'>

                <div className='flex  gap-2 text-gray-400 justify-center items-center'>
            <Image src={user} alt="img" height={20} width={28} className={u.imgClass}/>
            <div className='flex flex-col text-[0.85rem]'>
                <h3 className={isActive ? "text-black" : ""}>{u.name}</h3>
                <p className='text-[0.80rem]'>{u.message}</p>
            </div>
                </div>
            <div className='self-end text-gray-400 text-[0.80rem]'>
                <p>{u.time}</p>
            </div>
                </div>
            </div>
            ))}

            
        </div>
          <div className={`py-4 px-3 border rounded-md sm:flex sm:flex-col hidden w-full h-[65vh] items-center justify-end ${isActive ? "bg-white border-black/10 shadow-md text-black" : "bg-[#1C1917] border-white/5 text-white"}`}>
          <p className='text-gray-500'>No messages yet.</p>
        </div>
           
      </div>
    </div>
  )
}

export default HelpPage
