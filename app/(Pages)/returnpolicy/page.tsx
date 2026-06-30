import Image from 'next/image'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdAdd } from 'react-icons/io'
import Img from "@/public/returnPagePic.webp"

const ReturnPolicy = () => {
    return (
        <div className="w-full px-3 text-white min-h-screen flex flex-col">
            <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>Return Policies</h2>
                    <div className='md:flex md:flex-row items-center md:justify-center md:gap-3'>

                    <div className='flex items-center gap-2 text-sm border border-white/12 rounded-full px-4 md:w-full'>
                        <CiSearch size={18} className='text-gray-400' />
                        <input type="text" placeholder='Search...' className='py-2 rounded' />
                    </div>


                    <div className='flex items-center justify-center mt-3 md:mt-0'>
                        <button className='flex items-center justify-center gap-1 bg-orange-500 w-fit py-2 px-4 rounded-full'><IoMdAdd size={18} />Add</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center flex-1 flex-col gap-5 '>
                <div className='flex flex-col'>
                <Image src={Img} height={230} width={230} className='opacity-80 mb-4' alt='img'/>
                <h3 className='text-center text-lg'>No Return Policy Added</h3>
                <p className='text-gray-400 text-sm'>Please add your product return policy</p>
                </div>
                <button className='flex items-center justify-center gap-1 bg-orange-500 w-fit py-2 px-4 rounded-md'><IoMdAdd size={18} />Add Policy</button>
            </div>
        </div>
    )
}

export default ReturnPolicy