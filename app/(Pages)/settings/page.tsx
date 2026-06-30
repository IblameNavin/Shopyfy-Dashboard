"use client"

import { FaPhone, FaRegEdit } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineVerified } from 'react-icons/md'


import { useState } from 'react';
import Image from 'next/image';
import img from "@/public/dummyDocument.webp"

import dynamic from "next/dynamic";


const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});



const SettingsPage = () => {
  const [showMap, setShowMap] = useState(false)

  const chabahil = {
    lat: 27.7172,
    lng: 85.3487,
  };
  return (
    <div className="w-full px-3 text-white">
      <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-8">
        <h2 className='text-lg md:text-xl font-semibold'>My Profile</h2>

        <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 w-full flex flex-col'>

          <div className='flex justify-between'>

            <div className='flex flex-col justify-between gap-8 sm:flex-row sm:gap-12'>
              <div className='border border-white/10 h-30 w-30 rounded-full flex items-center justify-center'>
                <Image src="https://via.placeholder.com/150" alt='Profile' height={50} width={50}/>
              </div>
            <div className='flex flex-col gap-1'>
              <h2 className='flex items-center gap-2 text-xl font-semibold'>Ganesh Furniture Pvt Ltd <MdOutlineVerified size={22} className='text-black bg-green-500 h-5 w-5 rounded-full' /></h2>
              <p className='text-lg'>@ganesh_furniture_pvt_ltd</p>
              <p className='flex items-center gap-2 text-green-500 text-lg'><FaPhone size={22} className='h-5 w-5  py-1 2-6 bg-green-500 text-black rounded-full' />6:00 AM - 8:00 AM</p>
            </div>
            </div>

            <p className='border border-white/10 bg-black py-2 px-4 text-gray-400 rounded-md w-fit h-fit'><FaRegEdit size={20} /></p>
          </div>
        </div>





        <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 w-full flex flex-col relative'>
          <div className='flex flex-col gap-5'>
            <h2 className='bg-green-500 w-fit py-1 rounded-md text-lg px-4 absolute -top-4'>Address Information</h2>
            <form action="" className='mt-3 flex flex-col gap-2'>
              <div className='sm:flex sm:flex-row items-center justify-between sm:gap-3'>
              <div className='flex flex-col gap-1  w-full'>
                <label htmlFor="number" className='flex gap-1 text-[0.90rem] font-semibold'><span className='text-green-500'>*</span>Phone</label>
                <input type="text" placeholder='9805741775 ' id='number' name='number' className='border border-white/10 bg-black text-sm py-1.5 sm:py-2 md:py-2.5 rounded-md px-3 sm:w-full' />
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="text" className='flex gap-1 text-[0.90rem] font-semibold'><span className='text-green-500'>*</span>Address</label>
              <input type="text" placeholder='Manipur Chaur' id='address' name='number' className='border border-white/10 bg-black text-sm py-1.5 sm:py-2 md:py-2.5 rounded-md px-3 sm:w-full' />
              </div>
              </div>

              <div className='sm:flex sm:flex-row items-center justify-between sm:gap-3'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="text" className='flex gap-1 text-[0.90rem] font-semibold'><span className='text-green-500'>*</span>City</label>
                <input type="text" placeholder='Kathmandu' id='number' name='number' className='border border-white/10 bg-black text-sm py-1.5 sm:py-2 md:py-2.5 rounded-md px-3 sm:w-full' />
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="text" className='flex gap-1 text-[0.90rem] font-semibold'><span className='text-green-500'>*</span>State</label>
                <input type="text" placeholder='bagmati' id='state' name='number' className='border border-white/10 bg-black text-sm py-1.5 sm:py-2 md:py-2.5 rounded-md px-3 sm:w-full' />
              </div>
              </div>

              <div className='flex flex-col gap-1'>
                <p className=''>Please select your location</p>
                <button className='py-2 px-3 bg-black w-fit flex items-center justify-center gap-1.5 text-gray-400 cursor-pointer' type="button" onClick={() => setShowMap(prev => !prev)}><IoLocationOutline size={18} className='' /> Open Map </button>
                {showMap && (
                  <div className="h-80 w-full mt-3 rounded-md overflow-hidden">
                   <MapComponent lat={chabahil.lat} lng={chabahil.lng} />
                  </div>
                )}
              </div>

              <button className='w-fit py-2 px-4 bg-green-500 text-black cursor-pointer rounded-md text-sm mt-3'>Save Changes</button>
            </form>
          </div>
        </div>


        <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 w-full flex flex-col relative'>
          <div className='flex flex-col'>

            <h2 className='bg-green-500 w-fit py-1 rounded-md text-lg px-4 absolute -top-4'>Shop Information</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 py-8'>
 

              <div className='sm:text-[0.95rem] '>
                <h3 className='text-gray-400'>Shop Name</h3>
                <h2 className='font-semibold'>Ganesh Furniture Pvt Ltd</h2>
              </div>


              <div className='sm:text-[0.95rem]'>
                <h3 className='text-gray-400'>Email Address</h3>
                <h2 className='font-semibold'>ayernavin11@gmail.com</h2>
              </div>


              <div className='sm:text-[0.95rem]'>
                <h3 className='text-gray-400'>Shop Phone</h3>
                <h2 className='font-semibold'>9805741775</h2>
              </div>

 

              <div className='sm:text-[0.95rem]'>
                <h3 className='text-gray-400'>Shop Address</h3>
                <h2 className='font-semibold'>Mulpani Chaur, Kathmandu, 3</h2>
            </div>
              </div>
                <div className='-mt-8 sm:text-[0.95rem]'>
                <h3 className='text-gray-400'>Shop Description</h3>
                <h2 className='font-semibold'>All kinds of furniture and home decor</h2>
                </div>
          </div>
        </div>


        <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 w-full flex flex-col relative'>
          <div className='flex flex-col gap-5'>

            <h2 className='bg-green-500 w-fit py-1 rounded-md text-lg px-4 absolute -top-4'>Personal Information</h2>

            <div className='grid grid-cols-1 gap-7 py-8 sm:grid-cols-2 items-center justify-between'>

              <div className=''>
                <h3 className='text-gray-400'>Name</h3>
                <h2 className='font-semibold'>Shiv Narayan Shrestha</h2>
              </div>


              <div className=''>
                <h3 className='text-gray-400'>Email Address</h3>
                <h2 className='font-semibold'>ayernavin11@gmail.com</h2>
              </div>

            </div>
          </div>

        </div>



        <div className='bg-[#1C1917] py-4 px-3 border rounded-md border-white/5 w-full flex flex-col relative'>
          <div className='flex flex-col gap-5'>

            <h2 className='bg-green-500 w-fit py-1 rounded-md text-lg px-4 absolute -top-4'>KYC Information</h2>

            <div className='flex flex-col gap-7'>
        
        <div className='sm:grid sm:grid-cols-2 sm:items-center flex flex-col gap-5'>

              <div className='mt-8'>
                <h3 className='text-gray-400'>Company Legal Name</h3>
                <h2 className='font-semibold'>Ganesh Furniture Pvt Ltd</h2>
              </div>


              <div className=''>
                <h3 className='text-gray-400'>Bank Name</h3>
                <h2 className='font-semibold'>Global IME Bank</h2>
              </div>
        </div>

           <div className='sm:grid sm:grid-cols-2 sm:items-center flex flex-col gap-5'>

              <div className=''>
                <h3 className='text-gray-400'>Branch Name</h3>
                <h2 className='font-semibold'>Chabahil</h2>
              </div>

              <div className=''>
                <h3 className='text-gray-400'>Account Name</h3>
                <h2 className='font-semibold'>0300500027833010</h2>
              </div>
              </div>

         <div className='sm:grid sm:grid-cols-2 sm:items-center flex flex-col gap-5'>
              <div className=''>
                <h3 className='text-gray-400'>Account Number</h3>
                <h2 className='font-semibold'>0300500027833010</h2>
              </div>

              <div className=''>
                <h3 className='text-gray-400'>Document Type</h3>
                <h2 className='font-semibold'>PAN Number</h2>
              </div>
              </div>


           <div className='sm:grid sm:grid-cols-2 flex flex-col gap-5'>
              <div className=''>
                <h3 className='text-gray-400'>Document Number</h3>
                <h2 className='font-semibold'>304228898</h2>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className='text-gray-400'>Document Photo</h3>
                <Image src={img} width={180} height={100} alt="img" className='w-[50%] sm:w-[50%] lg:w-[25%]' />
              </div>
              </div>


           <div className='sm:grid sm:grid-cols-2 sm:items-center flex flex-col gap-5'>

              <div className="flex flex-col gap-2 ">
                <h3 className='text-gray-400'>Black Document Photo</h3>
                <Image src={img} width={180} height={100} alt="img" className='w-[50%] sm:w-[50%] lg:w-[25%]' />
              </div>

              <div>
                <Image src="https://via.placeholder.com/150" alt='Vendor Profile Image' width={180} height={100} className=''/>
              </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SettingsPage