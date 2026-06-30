import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaWalking } from 'react-icons/fa'
import { FaTruckFast } from 'react-icons/fa6'
import { FiToggleLeft } from 'react-icons/fi'
import { GiScooter, GiSnail } from 'react-icons/gi'
import { IoLocationOutline } from 'react-icons/io5'

const Delivery = () => {
  return (
    <div className="w-full px-3 text-white">
      <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">
        <h2 className='text-lg font-semibold'>Delivery Methods</h2>
        <div className='flex flex-col gap-1 md:flex-row w-full md:items-center md:justify-between'>

        <p>Select delivery options for your shop.</p>
        <div className='flex gap-2 md:items-center md:gap-3  '>

        <button className='py-2 px-4 bg-green-500 text-black rounded-md cursor-pointer w-fit'>Save Changes</button>
        <button className='py-2 px-4 bg-red-500 text-black rounded-md cursor-pointer w-fit'>Cancel</button>
        </div>
        </div>


        {/* Table  */}
        <div className='bg-[#1C1917] py-2 px-3 border rounded-md border-white/5 w-full flex flex-col'>
          {/* Inner Div Wrapper */}
          <div className='grid grid-cols-1 gap-3 lg:flex lg:items-center lg:justify-between flex-1 '>

           
        

            <div className='flex gap-3 lg:flex-col lg:w-full '>


             <div className='flex flex-col gap-1 border border-white/20 p-1.5 rounded-md shadow-md shadow-gray-300 flex-1'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <CiDeliveryTruck size={16} />
                    <h2>Express</h2>
                  </div>
                  <FiToggleLeft size={32} />
                </div>
                <div>
                </div>
                <span className='text-gray-400 text-sm'>Deliver within 2-3 business days.</span>
              </div>
               <div className='flex flex-col gap-1 border border-white/20 p-1.5 rounded-md shadow-md shadow-gray-300 flex-1'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                     <FaTruckFast  size={16} />
                    <h2>Free <br/>Delivery</h2>
                  </div>
                  <FiToggleLeft size={32} />
                </div>
                <div>
                </div>
                <span className='text-gray-400 text-sm'>Deliver within 2-3 business days.</span>
              </div>
            </div>



           <div className='flex gap-3 lg:flex-col lg:w-full '>


             <div className='flex flex-col gap-1 border border-white/20 p-1.5 shadow-md shadow-gray-300 flex-1'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <GiSnail size={16} />
                    <h2>Self Pickup</h2>
                  </div>
                  <FiToggleLeft size={32} />
                </div>
                <div>
                </div>
                <span className='text-gray-400 text-sm'>Deliver within 2-3 business days.</span>
              </div>
               <div className='flex flex-col gap-1 border border-white/20 p-1.5 shadow-md shadow-gray-300 flex-1'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <IoLocationOutline  size={16} />
                    <h2 className=''>Outside <br/>Valley</h2>
                  </div>
                  <FiToggleLeft size={32} />
                </div>
                <div>
                </div>
                <span className='text-gray-400 text-sm'>Deliver within 2-3 business days.</span>
              </div>
            </div>


            <div className='flex gap-3 lg:flex-col lg:w-full'>


             <div className='flex flex-col gap-1 border border-white/20 p-1.5 shadow-md shadow-gray-300 flex-1'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <FaWalking size={16} />
                    <h2>Self Pickup</h2>
                  </div>
                  <FiToggleLeft size={32} />
                </div>
                <div>
                </div>
                <span className='text-gray-400 text-sm'>Deliver within 2-3 business days.</span>
              </div>
               <div className='flex flex-col gap-1 border border-white/20 p-1.5 shadow-md shadow-gray-300 flex-1'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <GiScooter size={16} />
                    <h2 className=''>Outside <br/>Valley</h2>
                  </div>
                  <FiToggleLeft size={32} />
                </div>
                <div>
                </div>
                <span className='text-gray-400 text-sm'>Deliver within 2-3 business days.</span>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Delivery