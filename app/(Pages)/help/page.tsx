import React from 'react'
import img from "@/public/darkLogo .webp"
import Image from 'next/image'
import user from "@/public/user.webp"

const HelpPage = () => {
  return (
    <div className="w-full px-6 py-5 text-white min-h-screen">

        <div className='sm:flex sm:flex-row gap-5 h-[90vh]'>

        <div className='mt-3 flex flex-col gap-3 justify-between sm:w-[380px] h-fit'>
        <h2 className='text-lg md:text-xl font-semibold'>Support</h2>
            <div className=' px-2 border border-white/15 rounded-md'>
                <div className='flex items-center justify-between'>

                <div className='flex  gap-2 text-gray-400 justify-center items-center'>
            <Image src={img} alt="img" height={40} width={28} className='object-contain'/>
            <div className='flex flex-col text-sm'>
                <h3>ShofyDrop</h3>
                <p>hello</p>
            </div>
                </div>
            <div className='self-end text-gray-400 text-sm'>
                <p>10m</p>
            </div>
                </div>
            </div>

            <h2 className='font-semibold'>Users</h2>

             <div className=' px-2 border border-white/15 rounded-md'>
                <div className='flex items-center justify-between'>

                <div className='flex  gap-2 text-gray-400 justify-center items-center'>
            <Image src={user} alt="img" height={20} width={20} className='object-cover rounded-full h-8 w-8'/>
            <div className='flex flex-col text-[0.85rem]'>
                <h3 className=''>Gaurav Khatiwada</h3>
                <p>h</p>
            </div>
                </div>
            <div className='self-end text-gray-400 text-[0.80rem]'>
                <p>7m</p>
            </div>
                </div>
            </div>


             <div className=' px-2 border border-white/15 rounded-md'>
                <div className='flex items-center justify-between'>

                <div className='flex  gap-2 text-gray-400 justify-center items-center'>
            <Image src={user} alt="img" height={20} width={28} className='object-contain rounded-full h-8 w-8'/>
            <div className='flex flex-col text-[0.85rem]'>
                <h3>Roshan Bhusal</h3>
                <p className='text-[0.80rem]'>Tap to send message</p>
            </div>
                </div>
            <div className='self-end text-gray-400 text-[0.80rem]'>
                <p>7m</p>
            </div>
                </div>
            </div>


             <div className=' px-2 border border-white/15 rounded-md'>
                <div className='flex items-center justify-between'>

                <div className='flex  gap-2 text-gray-400 justify-center items-center'>
            <Image src={user} alt="img" height={20} width={28} className='object-contain rounded-full h-8 w-8'/>
            <div className='flex flex-col text-[0.85rem]'>
                <h3>oneclickresult</h3>
                <p className='text-[0.80rem]'>Tap to send message</p>
            </div>
                </div>
            <div className='self-end text-gray-400 text-[0.80rem]'>
                <p>7m</p>
            </div>
                </div>
            </div>


             <div className=' px-2 border border-white/15 rounded-md'>
                <div className='flex items-center justify-between'>

                <div className='flex gap-2 text-gray-400 justify-center items-center'>
            <Image src={user} alt="img" height={20} width={28} className='object-contain rounded-full h-8 w-8'/>
            <div className='flex flex-col text-[0.85rem]'>
                <h3>D</h3>
                <p className='text-[0.80rem]'>Tap to send message</p>
            </div>
                </div>
            <div className='self-end text-gray-400 text-[0.80rem]'>
                <p>7m</p>
            </div>
                </div>
            </div>


            
        </div>
          <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 sm:flex sm:flex-col hidden w-full h-[65vh] items-center justify-end'>
          <p className='text-gray-500'>No messages yet.</p>
        </div>
           
      </div>
    </div>
  )
}

export default HelpPage