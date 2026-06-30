"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { GiProcessor } from 'react-icons/gi'
import { MdOutlineHome, MdOutlineKeyboardArrowDown, MdOutlineNavigateNext } from 'react-icons/md'
import { SiBlockbench } from 'react-icons/si'

const AddCategory = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isActive, setIsActive] = useState<"murti" | "satu" | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<{
        text: string;
        icon: React.ReactNode | null;
    }>({
        text: "Choose a super category",
        icon: null
    })

    return (
        <div className="w-full px-3 text-white">
            <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">
                <div className='flex flex-col gap-3'>
                    <h2 className='text-xl font-semibold'>Add New Category</h2>
                    <div className='flex items-center gap-4'>
                        <Link href={"/addcategory"}>Category List</Link>
                        <MdOutlineNavigateNext size={24} />
                        <p className='text-gray-400'>Add Category</p>
                    </div>
                </div>

                <div className='border border-white/5 bg-[#1C1917] px-5 py-10 mt-2 rounded-xl flex flex-col gap-10 md:gap-3'>
                    <div className='md:flex md:flex-row md:justify-between md:gap-7 '>

                        <div className='w-full'>



                            <p className='text-gray-400 text-sm'>Select Super Category</p>


                            <div className=' mb-6 relative border border-white/30 py-3 px-3 rounded-md mt-2 gap-2 text-sm flex items-center justify-between md:justify-start cursor-pointer select-none bg-[#0C0A09]' onClick={() => setIsOpen(prev => !prev)} >
                                {selectedCategory.icon}
                                <p>{selectedCategory.text}</p>
                                <MdOutlineKeyboardArrowDown
                                    size={22}
                                    className={`transition-transform duration-300 ml-auto ${isOpen ? 'rotate-180 text-green-500' : ''}`}
                                />



                                <div
                                    className={`absolute left-0 right-0 top-full mt-2 mx-auto border rounded-md w-full py-4 px-6 flex flex-col border-white/10 bg-[#12100E] z-50 shadow-xl
              transition-all duration-300 ease-in-out origin-top
              ${isOpen
                                            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
                                            : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
                                        }`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className='flex flex-col gap-3'>
                                        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Super Categories</h2>
                                        <div className='flex flex-col gap-2 justify-center'>
                                            <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                setSelectedCategory({ text: "Manufacturing and Processings", icon: <GiProcessor size={24} /> })
                                                setIsOpen(false)
                                            }}>
                                                <span><GiProcessor size={24} /></span> Manufacturing and Processings
                                            </p>
                                            <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                setSelectedCategory({ text: "Home and Lifestyle", icon: <MdOutlineHome size={22} /> })
                                                setIsOpen(false)
                                            }}>
                                                <span><MdOutlineHome size={22} /></span>Home and Lifestyle
                                            </p>
                                            <p className='flex items-center gap-2 py-1.5 px-2 rounded hover:bg-white/5 transition-colors' onClick={() => {
                                                setSelectedCategory({ text: "Furniture", icon: <SiBlockbench size={22} /> })
                                                setIsOpen(false)
                                            }}
                                            >
                                                <span><SiBlockbench size={22} /></span>Furniture
                                            </p>
                                        </div>
                                    </div>
                                </div>









                            </div>
                        </div>

                        <div className='w-full'>
                            <p className='text-gray-400 text-sm'>Category Name</p>
                            <input type="text" placeholder='Enter category name' className='py-3 outline-none px-3 rounded-md mt-2 text-sm border border-white/10 bg-[#0C0A09] w-full' />
                        </div>

                    </div>




                    <div className='flex flex-col gap-2'>
                        <p className=''>Add Sub Category (Optional)</p>
                        <div className='flex justify-between items-center md:gap-3'>
                            <input type="text" placeholder='Sub Category Name' className='md:flex-1 py-1.5 md:py-3 px-3 outline-none rounded-md mt-2 text-sm border border-white/10 bg-[#0C0A09] w-[82%]' />
                            <button className='bg-green-500 py-2 px-3.5 rounded-md text-black cursor-pointer'>Add</button>
                        </div>
                    </div>


                    <div className='border border-white/10 text-gray-400 py-5 md:py-10 px-4 md:px-6 rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4 bg-[#1C1917]'>

                        <div className='w-full md:w-[45%] flex flex-col justify-center'>
                            <h2 className='text-lg font-semibold text-white leading-tight'>
                                Manufacturing and Processings <br className='block md:hidden' /> Category
                            </h2>
                            <div className='flex items-center gap-3 mt-4'>
                                <button
                                    className={`bg-black border border-white/20 py-2 px-4 text-sm transition-all duration-300 ease-in-out rounded-md cursor-pointer ${isActive === "murti" ? "bg-green-500 text-black border-transparent font-medium" : "hover:border-white/40"}`}
                                    onClick={() => setIsActive("murti")}
                                >
                                    Murti
                                </button>
                                <button
                                    className={`bg-black border border-white/20 py-2 px-4 text-sm rounded-md transition-all duration-300 ease-in-out cursor-pointer ${isActive === "satu" ? "bg-green-500 text-black border-transparent font-medium" : "hover:border-white/40"}`}
                                    onClick={() => setIsActive("satu")}
                                >
                                    Satu
                                </button>
                            </div>
                        </div>

                        <div className='hidden md:block border-l border-white/10 self-stretch'></div>

                        {/* RIGHT COLUMN: Sub-Category Panel Data Grid */}
                        <div className='w-full md:w-[48%] flex flex-col text-sm'>

                            {/* Sub-Category Table Header */}
                            <div className='grid grid-cols-[1fr_80px] items-center pb-2.5 border-b border-white/10 font-medium text-gray-500 uppercase tracking-wider text-xs'>
                                <p className='text-left'>Sub Category Name</p>
                                <p className='text-center'>Action</p>
                            </div>

                            {/* Sub-Category Data Row 1 */}
                            <div className='grid grid-cols-[1fr_80px] items-center py-3 border-b border-white/5 last:border-none'>
                                <p className='text-white font-medium truncate pr-4'>Ganesh</p>
                                <div className="flex justify-center">
                                    <button className='bg-black hover:bg-white/5 text-gray-300 hover:text-white border border-white/20 py-1.5 px-4 text-xs rounded-md transition-colors cursor-pointer'>
                                        Add
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center md:justify-end gap-2 '>
                        <button className='bg-red-500 text-black rounded-md py-2 w-[50%] md:w-[10%] lg:w-[6%] cursor-pointer'>Cancel</button>
                        <button className='bg-green-500 text-black rounded-md py-2 w-[50%] md:w-[10%] lg:w-[5%] cursor-pointer'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory