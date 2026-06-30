import Image from 'next/image'
import React from 'react'
import img from "@/public/QR.webp"
import { MdOutlineCloudUpload } from 'react-icons/md'
import { AiOutlineUpload } from 'react-icons/ai'

const page = () => {
  return (
     <div className="w-full px-3 text-white">
      <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">
        <h2 className='text-lg md:text-xl font-semibold'>Upload QR</h2>
         

       <div className='md:flex-row items-center justify-center flex flex-col gap-4'>

         <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 w-full md:w-[50%] md:h-100 flex flex-col'>
            <div className='flex justify-center items-center h-full'>
                <Image src={img} alt='img' height={200} width={200} className='rounded-md'/>
                
            </div>
         </div>


          <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 w-full md:w-[50%] md:h-100 flex flex-col '>
            <div className='flex flex-col items-center gap-4 h-full justify-center'>
                <h2>Upload QR Code Image</h2>
                <MdOutlineCloudUpload size={70} />
                <p>Supported image formats: JPG, PNG, BMP</p>
                <div className='my-full '>
                <button className='bg-green-500 py-2 px-3 rounded-md flex items-center justify-center gap-2 text-black'><AiOutlineUpload size={20} /> Choose File</button>
                </div>
            </div>
       </div>
         </div>
         </div>
         </div>
  )
}

export default page