"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdDeleteOutline, MdOutlineHome, MdOutlineKeyboardArrowDown, MdOutlineNavigateNext } from 'react-icons/md'
import img from "@/public/dummyDocument.webp"
import { SiBlockbench } from 'react-icons/si'
import { GiProcessor } from 'react-icons/gi'

type DropdownItem = {
    text: string;
    icon: React.ReactNode | null;
}

const AddProduct = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [superCategory, setSuperCategory] = useState<DropdownItem>({
        text: "Choose a super category",
        icon:  null
    })
     
    // Super Category Selected State 
    const isSuperSelected = superCategory.icon !== null

    // Sub Category 
    const [subOpen, setSubOpen] = useState<boolean>(false)
    const [subCategory, setSubCategory] = useState<DropdownItem | null>({
        text: "Select category...",
        icon: null
    })
    
    // FIXED: Correct check ensures it doesn't unlock prematurely on layout mount
    const isSubSelected = subCategory !== null && subCategory.text !== "Select category..."

    // Optional Category 
    const [optOpen, setOptOpen] = useState<boolean>(false)
    const [optCategory, setOptCategory] = useState<DropdownItem | null>({
        text: "Choose an optional category",
        icon: null
    })

    return (
        <div className="w-full px-3 text-white">
            <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">

                <div className='flex flex-col gap-3'>
                    <h2 className='text-xl font-semibold'>Add New Category</h2>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-center gap-3'>
                            <Link href={"/addcategory"}>Product</Link>
                            <MdOutlineNavigateNext className='text-gray-400' size={26} />
                            <p className='text-gray-400'>Add </p>
                        </div>
                        <button className='bg-orange-600 py-2 px-3 rounded-md cursor-pointer flex items-center justify-center gap-1'>
                            <IoIosAddCircleOutline size={22} />Upload Product
                        </button>
                    </div>
                </div>

            <div className='lg:flex lg:gap-5'>

            
                <div className='bg-[#1C1917] py-4 px-4 border rounded-md border-white/5 w-full flex flex-col lg:w-lg'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-between lg:flex-col lg:items-start lg:gap-3'>
                            <div className='flex flex-col justify-center gap-1'>
                                <h3 className='text-lg'>Product Media</h3>
                                <p className='text-[0.80rem] text-gray-400'>Upload Product Thumbnail and Images</p>
                            </div>
                            <button className='flex items-center justify-center gap-1 border border-white/15 bg-black py-2 px-3 rounded-md text-gray-400'>
                                <MdDeleteOutline size={22} /> Clear All 
                            </button>
                        </div>

                        <div className='flex flex-col gap-3 '>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-[0.90rem]'>Thumbnail</h3>
                                <Image src={img} height={110} width={110} alt='img' className='rounded-md' />
                            </div>
                            
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-[0.90rem]'>Product Images</h3>
                                    <button className='flex items-center justify-center gap-1 border border-white/15 bg-black py-1.5 px-2.5 rounded-md text-gray-400'>
                                        <IoIosAddCircleOutline size={22} /> Upload Image 
                                    </button>
                                </div>
                                <div className='border border-white/5 mt-3 p-2 rounded-md'>
                                    <Image src={img} height={110} width={90} alt='img' className='rounded-md' />
                                </div>
                            </div>

                            {/* Categories Wrapper */}
                            <div className='flex flex-col gap-4 mt-4'>
                                <div className='w-full'>
                                    <p className='text-gray-400 text-sm'>Select Super Category</p>
                                    <div className='relative border border-white/30 py-3 px-3 rounded-md mt-2 gap-2 text-sm flex items-center justify-between md:justify-start cursor-pointer select-none bg-[#0C0A09]' onClick={() => setIsOpen(prev => !prev)} >
                                        {superCategory.icon}
                                        <p>{superCategory.text}</p>
                                        <MdOutlineKeyboardArrowDown
                                            size={22}
                                            className={`transition-transform duration-300 ml-auto ${isOpen ? 'rotate-180 text-green-500' : ''}`}
                                        />

                                        <div
                                            className={`absolute left-0 right-0 top-full mt-2 mx-auto border rounded-md w-full py-4 px-6 flex flex-col border-white/10 bg-[#12100E] z-50 shadow-xl transition-all duration-300 ease-in-out origin-top ${
                                                isOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
                                            }`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className='flex flex-col gap-3'>
                                                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Super Categories</h2>
                                                <div className='flex flex-col gap-2 justify-center'>
                                                    <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                        setSuperCategory({ text: "Manufacturing and Processings", icon: <GiProcessor size={24} /> })
                                                        setIsOpen(false)
                                                        // Auto Reset downstream states downstream
                                                        setSubCategory({ text: "Select category...", icon: null })
                                                        setOptCategory({ text: "Choose an optional category", icon: null })
                                                    }}>
                                                        <span><GiProcessor size={24} /></span> Manufacturing and Processings
                                                    </p>
                                                    <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                        setSuperCategory({ text: "Home and Lifestyle", icon: <MdOutlineHome size={22} /> })
                                                        setIsOpen(false)
                                                        setSubCategory({ text: "Select category...", icon: null })
                                                        setOptCategory({ text: "Choose an optional category", icon: null })
                                                    }}>
                                                        <span><MdOutlineHome size={22} /></span>Home and Lifestyle
                                                    </p>
                                                    <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                        setSuperCategory({ text: "Furniture", icon: <SiBlockbench size={22} /> })
                                                        setIsOpen(false)
                                                        setSubCategory({ text: "Select category...", icon: null })
                                                        setOptCategory({ text: "Choose an optional category", icon: null })
                                                    }}>
                                                        <span><SiBlockbench size={22} /></span>Furniture
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sub Category */}
                                <div className='w-full'>
                                    <p className='text-gray-400 text-sm'>Category</p>
                                    {/* FIXED: added pointer-events-none layout block when locked */}
                                    <div className={`relative border border-white/30 py-3 px-3 rounded-md mt-2 gap-2 text-sm flex items-center justify-between md:justify-start select-none bg-[#0C0A09] transition-all duration-300 ${
                                        isSuperSelected ? "text-white cursor-pointer opacity-100" : "text-gray-500 pointer-events-none opacity-40"
                                    }`} onClick={() => isSuperSelected && setSubOpen(prev => !prev)} >
                                        {subCategory?.icon}
                                        <p>{subCategory?.text}</p>
                                        <MdOutlineKeyboardArrowDown
                                            size={22}
                                            className={`transition-transform duration-300 ml-auto ${subOpen ? 'rotate-180 text-green-500' : ''}`}
                                        />
                                        <div
                                            className={`absolute left-0 right-0 top-full mt-2 mx-auto border rounded-md w-full py-4 px-6 flex flex-col border-white/10 bg-[#12100E] z-50 shadow-xl transition-all duration-300 ease-in-out origin-top ${
                                                subOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
                                            }`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className='flex flex-col gap-3'>
                                                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Sub Categories</h2>
                                                <div className='flex flex-col gap-2 justify-center'>
                                                    <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                        setSubCategory({ text: "Clothing", icon: null })
                                                        setSubOpen(false)
                                                        setOptCategory({ text: "Choose an optional category", icon: null })
                                                    }}>
                                                        Clothing
                                                    </p>
                                                    <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                        setSubCategory({ text: "Gas", icon: null })
                                                        setSubOpen(false)
                                                        setOptCategory({ text: "Choose an optional category", icon: null })
                                                    }}>
                                                        Gas
                                                    </p>
                                                    <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                        setSubCategory({ text: "Kitchen electronics", icon: null })
                                                        setSubOpen(false)
                                                        setOptCategory({ text: "Choose an optional category", icon: null })
                                                    }}>
                                                        Kitchen electronics
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Optional category */}
                                <div className='w-full'>
                                    <p className='text-gray-400 text-sm'>Select Category (Optional)</p>
                                    {/* FIXED: tracks updated condition and opacity changes */}
                                    <div className={`relative border border-white/30 py-3 px-3 rounded-md mt-2 gap-2 text-sm flex items-center justify-between md:justify-start select-none bg-[#0C0A09] transition-all duration-300 ${
                                        isSubSelected ? "text-white cursor-pointer opacity-100" : "text-gray-500 pointer-events-none opacity-40"
                                    }`} onClick={() => isSubSelected && setOptOpen(prev => !prev)} >
                                        {optCategory?.icon}
                                        <p>{optCategory?.text}</p>
                                        <MdOutlineKeyboardArrowDown
                                            size={22}
                                            className={`transition-transform duration-300 ml-auto ${optOpen ? 'rotate-180 text-green-500' : ''}`}
                                        />
                                        <div
                                            className={`absolute left-0 right-0 top-full mt-2 mx-auto border rounded-md w-full py-4 px-6 flex flex-col border-white/10 bg-[#12100E] z-50 shadow-xl transition-all duration-300 ease-in-out origin-top ${
                                                optOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
                                            }`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className='flex flex-col gap-3'>
                                                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Optional Categories</h2>
                                                <div className='flex flex-col gap-2 justify-center'>
                                                    <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                        setOptCategory({ text: "Sub Cat 1", icon: null })
                                                        setOptOpen(false)
                                                    }}>
                                                        Sub Cat 1
                                                    </p>
                                                    <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                        setOptCategory({ text: "Sub Cat 2", icon: null })
                                                        setOptOpen(false)
                                                    }}>
                                                        Sub Cat 2
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-3 text-[0.87rem]'>
                                <h3>Inventory</h3>
                                <h3>Total Stock</h3>
                                <input type="text" placeholder='0' className='py-1 px-2 bg-black border border-white/20 rounded-md w-[80%] text-sm' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg-[#1C1917] py-4 px-4 border rounded-md border-white/5 w-full flex flex-col gap-4'>
                <h2 className='text-lg'>General Information</h2>

                <div className='flex flex-col gap-2 border-b border-white/10 pb-5'>
                    <h3>Product Name</h3>
                    <div className='flex flex-col gap-1'>
                    <input type="text" placeholder='e.g. Wireless Mouse' className='py-1 px-2 bg-black border border-white/20 rounded-md w-full text-sm' />
                    <span className='text-gray-500 text-sm'>Maximun 250 characters allowed.</span>
                    </div>
                   <h3>Short Description</h3>
                   <div className='flex flex-col gap-1'>
                   <textarea name="" id="" placeholder='Short Description' rows={4} className='border border-white/10 bg-black text-white py-1 px-2 rounded-md text-sm'></textarea>
                   <span className='text-sm text-gray-500'>Maximum 150 characters allowed.</span>
                   </div>
                   <div className='flex flex-col gap-1'>
                   <h3>Addional Description <span className='text-gray-400'>(Optional)</span></h3>
                   <textarea name="" id="" rows={7} className='border border-white/10 bg-black text-white py-1 px-2 rounded-md text-sm'></textarea>
                   <span className='text-gray-500 text-sm self-end'>0/5000</span>
                   </div>

                </div> 

                   <div className='mt-5 flex flex-col gap-4'>

                    <h2 className='text-lg '>Pricing</h2>
                      <div className='flex flex-col gap-2'>
                        <h3>Regular Price</h3>
                        <div className='relative border border-white/10 bg-black py-1.5 rounded-md text-sm px-3 flex gap-2'>
                         <span className='text-gray-400'>NPR</span>
                        <input type="text" placeholder='Enter price (e.g. 1,000)' className='absolute ml-10 -translate-y-[3px]' />
                        </div>

                        <h3>Discount Amount <span className='text-gray-400'>(Optional)</span></h3>
                        <div className='relative border border-white/10 bg-black py-1.5 rounded-md text-sm px-3 flex gap-2'>
                         <span className='text-gray-400'>NPR</span>
                        <input type="text" placeholder='Amount to subtract (e.g. 100    )' className='absolute ml-10 -translate-y-[3px]' />
                        </div>
                      </div>
                   </div>
                </div>
                </div>


                <div className='bg-[#1C1917] py-4 px-4 border rounded-md border-white/5 w-full flex flex-col gap-4'>
                 <h2 className='text-lg'>Production Variation <span className='text-gray-400'>(Optional)</span></h2>
                 <div className='flex flex-col gap-6'>
                    <button className='flex items-center bg-black border border-green-500 text-sm text-green-500 py-2 px-3 w-fit rounded-md gap-2'><IoIosAddCircleOutline size={18} />Add new variation i.e size, color, etc.</button>
                    <p className='text-gray-500'>No variations added yet.</p>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;