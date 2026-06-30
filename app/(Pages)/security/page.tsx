"use client"
import React, { useState } from 'react'

const SecurityPage = () => {
    const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="w-full px-3 text-white">
      <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-8">
        <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>Security</h2>

        <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 w-full flex flex-col'>
        <div className='flex flex-col gap-6'>
                {isClicked === true ?
            <div className='grid grid-cols-2 justify-between'>
                <>
            <p>Password</p>
            <p>********</p>
                </>
            </div>
                 :
                <div className='flex flex-col gap-8 '>
                    <div className='flex flex-col gap-1 text-sm font-semibold md:w-xl'>
                        <label htmlFor="password">Old Password</label>
                        <input type="password" className='py-2.5 rounded-md px-2 border border-white/15 bg-black outline-none' />
                    </div>

                    <div className='flex flex-col gap-1 text-sm font-semibold md:w-xl'>
                        <label htmlFor="password">New Password</label>
                        <input type="password" className='py-2.5 rounded-md px-2 border border-white/15 bg-black outline-none' />
                    </div>

                    <div className='flex flex-col gap-1 text-sm font-semibold md:w-xl'>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className='py-2.5 rounded-md px-2 border border-white/15 bg-black outline-none' />
                    </div>
                </div>
}
            <div className='flex items-center  gap-3'>
                <button className='bg-green-500 rounded-md text-black py-2 px-3.5 cursor-pointer' onClick={()=>setIsClicked(prev=>!prev)}> {isClicked ? "Change Password" : "Save Changes"}</button>
                {!isClicked && <button className='bg-black  rounded-md text-gray-400 py-1.5 px-4 border cursor-pointer border-white/15' onClick={()=>setIsClicked(prev=>!prev)}>Cancel</button>}
            </div>
        </div>
        </div>
        </div>
        </div>


  )
}

export default SecurityPage