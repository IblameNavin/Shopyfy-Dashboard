import Image from 'next/image'
import BannerImg from "@/public/BannerImg.webp"
import { TiClipboard } from 'react-icons/ti'
import { FaRegFileImage } from 'react-icons/fa'
import IMG from "@/public/SidebarImg.webp"
import { RiDeleteBin6Line } from 'react-icons/ri'

const BannerPage = () => {
  return (
    <div className='w-full px-4 py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4'>
        <h2 className='text-white text-xl md:text-2xl font-semibold'>Shop Banner Image</h2>
        <div className='border border-white/5 bg-[#1C1917] px-5 py-4 mt-5 rounded-xl'>
          <div className='text-white flex flex-col gap-4'>
            <div className="flex flex-col sm:flex-row sm:gap-10 ">

          <div className="flex flex-col  ">
            <h3>Banner Image</h3>
            <div className='border border-white/10 w-65 rounded-xl mt-4 flex items-center justify-center py-6  '>
             <Image src={BannerImg} alt="image" width={200}/> 
            </div>
          </div>

            <div className='flex flex-col justify-center gap-12'>
           <div className='flex flex-col justify-center gap-4 h-full sm:justify-start mt-15 '>
             <button className='flex items-center sm:f bg-green-500 w-fit py-2.5 px-3.5 rounded-md text-black text-sm gap-2 cursor-pointer'><FaRegFileImage size={20}/>Upload Image</button>
            <p className='text-gray-400 text-sm'>Upload file less than 5MB.</p>
            </div>
            </div>


              </div>
            <button className='flex items-center bg-green-700 w-fit py-2 px-4 rounded-md text-black gap-2 md:mt-10 cursor-pointer'><TiClipboard size={20}/>Save</button>
            <h2 className='text-xl md:text-2xl'>Banner Images</h2>

           <div className='flex flex-col gap-4 mt-6'>
            <h2 className='text-xl'>Banner</h2>
            <div className='border border-white/10 w-65 rounded-xl px-3 flex h-60 flex-col items-center justify-center py-2'>
            <div className="w-full flex-1 flex items-center justify-center">
            <Image src={IMG} height={50} width={100} alt='img py-6' className='w-full object-contain'/>
            </div>
            <div className='w-full flex mt-auto justify-start'>
            <button className='h-10 w-12 cursor-pointer bg-red-500 text-black justify-center flex items-center rounded'><RiDeleteBin6Line size={20}/></button>
            </div>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default BannerPage