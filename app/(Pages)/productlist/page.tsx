"use client"
import React, { useEffect, useState } from 'react'
import { CiEdit, CiSearch } from 'react-icons/ci'
import { GrFormPrevious } from 'react-icons/gr'
import { IoIosAddCircleOutline, IoIosArrowDown } from 'react-icons/io'
import { MdDeleteOutline, MdNavigateNext, MdOutlineRemoveRedEye } from 'react-icons/md'
import { getProducts } from '@/app/lib/services/productService'
import { getDiscounts } from '@/app/lib/services/discountService'

interface ClientRecord {
   id: number,
   productName: string,
   SKU: string,
   productPrice: number,
   discountPrice: number,
   discountPercentage: number,
   stock: number
}

const ProductList = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [selectedCategory, setSelectedCategory] = useState("All")
const tableGridClass = "grid grid-cols-[50px_2.2fr_1.4fr_1.4fr_1.4fr_1.1fr_1fr_1.3fr] items-center gap-4 text-[0.92rem]"

//productName SKU price discountPrice discount% stock 

const [clientData, setClientData] = useState<ClientRecord[] | null>([])

useEffect(() => {
   const fetchData = async () => {
      try {
         const [products, discounts] = await Promise.all([getProducts(), getDiscounts()])
   
      const activeDiscounts = discounts.filter((d) => d.status === "active")

      const results:ClientRecord[] = products.map((product, index) => {
    const productCat = product.superCategory.toLowerCase()

   const matchingDiscount = activeDiscounts.find((discount) => 
      discount.category?.toLowerCase() === productCat
      )
      let discountPrice = product.price
      let discountPercentage = 0
 
      if(matchingDiscount){
         if(matchingDiscount.discountType === "percentage"){
            discountPercentage = matchingDiscount.discountValue
            discountPrice = product.price - (product.price * matchingDiscount.discountValue) / 100
         }
         else{
            discountPrice = product.price - matchingDiscount.discountValue
            discountPercentage = (matchingDiscount.discountValue / product.price) * 100
         }
      }

      return {
        id: index + 1,
        productName: product.name,
        SKU: product.sku,
        productPrice: product.price,
        discountPrice: Math.max(0, discountPrice),
        discountPercentage: Number(discountPercentage.toFixed(2)),
        stock: product.stock,
      };
      

      })
      setClientData(results)
      } catch (error) {
         console.log(error)
      }
   }
   fetchData()
}, [])



   return (
      <div className="w-full px-3 text-white">
         <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">

            <div className='flex justify-between items-center'>
               <h2 className='text-xl font-semibold'>Product List</h2>
               <button className='flex items-center justify-between py-2 px-3.5 rounded-md bg-green-500 text-black gap-1'><IoIosAddCircleOutline size={22} /> Add Product</button>
            </div>

            <div className='bg-[#1C1917] py-4 border rounded-md border-white/5 w-full'>


               <div className="px-2 flex flex-col gap-4 shrink-0 text-white">
                  <div className='md:grid-cols-3 lg:gird-cols-4 md:justify-between md:items-center lg:flex lg:items-center lg:justify-between lg:gap-3 '>


                     <div className="flex items-center shrink-0 gap-3 mb-2 text-[0.90rem]">
                        <span>Showing</span>
                        <select name="entries" id="entries" className="border border-white/20 bg-black px-2 py-1.5 relative cursor-pointer outline-none focus:border-green-500">
                           <option value="10">10</option>
                           <option value="20">20</option>
                           <option value="30">30</option>
                        </select>
                        <span>entries</span>
                     </div>

                     <div className='w-full flex flex-col gap-3 md:flex-row md:gap-4 md:items-center md:justify-between'>
                        <div className='flex border border-white/10 w-full items-center justify-between gap-2.5 px-2 rounded-md md:w-[40%]'>
                           <input type="text" placeholder='Search Name' className='bg-black py-1.5 px-2 w-full rounded-md text-sm' />
                           <CiSearch size={22} />
                        </div>
                        <div className='flex border border-white/10 w-full items-center justify-between gap-2.5 px-2 rounded-md md:w-[40%]'>
                           <input type="text" placeholder='Search By SKU Key' className='bg-black py-1.5 px-2 w-full rounded-md text-sm' />
                           <CiSearch size={22} />
                        </div>

                        <div className='flex items-center justify-between bg-black px-4 py-2 w-[45vw] text-sm relative md:w-[15%]' onClick={() => setIsOpen(prev => !prev)}>
                           <span>{selectedCategory}</span>
                           <IoIosArrowDown size={13} className='text-gray-400' />
                           {isOpen &&
                              <div className='absolute bg-[#1C1917] text-white text-sm left-0 right-0 top-full mt-2 border border-white/10 rounded-md flex flex-col gap-2 py-2 px-3'>
                                 <div className=''>
                                    <h3>Category</h3>
                                 </div>
                                 <div className='flex flex-col gap-1.5 text-sm'>
                                    <span className={`cursor-pointer ${selectedCategory === "All" ? "bg-white/10 py-1  rounded-md" : ""}`} onClick={() => setSelectedCategory("All")}>All</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Bed" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Bed")}>Bed</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Clothing" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Clothing")}>Clothing</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Daraz" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Daraz")}>Daraz</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Gas" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Gas")}>Gas</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Kitchen Daraz" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Kitchen Daraz")}>Kitchen Daraz</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Kitchen Electronics" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Kitchen Electronics")}>Kitchen Electronics</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Laptop" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Laptop")}>Laptop</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Mat" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Mat")}>Mat</span>
                                    <span className={`cursor-pointer ${selectedCategory === "Shofa" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("Shofa")}>Shofa</span>
                                    <span className={`cursor-pointer ${selectedCategory === "TV" ? "bg-white/10 py-1 rounded-md" : ""}`} onClick={() => setSelectedCategory("TV")}>TV</span>
                                 </div>
                              </div>
                           }
                        </div>
                     </div>
                  </div>

                  {/* Table  */}
                  <div className="w-full overflow-x-auto custom-scrollbar">
                     <div className='min-w-[1300px] xl:min-w-full flex-1 flex flex-col text-white px-4 pb-1'>

                        {/* Table Header Row */}
                        <div className={`${tableGridClass} py-3.5 px-4 font-semibold border-b border-white/10 uppercase tracking-wider text-gray-400 text-[11px] shrink-0 rounded-t-md`}>
                           <div className=''>SN</div>
                           <div className=''>Product</div>
                           <div className=''>SKU</div>
                           <div className=''>Price</div>
                           <div className=' text-red-500'>Discount Price</div>
                           <div className=''>Discount %</div>
                           <div className=''>Stock</div>
                           <div className='text-center'>Action</div>
                        </div>

                        {/* Table Data Rows */}



                        {/* Row 1 */}
                        {clientData?.map((item, index)=>
                        <div key={item.id} className={`${tableGridClass} py-6 lg:py-6 px-4 border-b border-white/5 hover:bg-white/3 transition-colors`}>
                           <div className='text-left font-medium text-gray-500'>{index+1}</div>
                           <div className='text-left font-medium text-white text-sm'>{item.productName}</div>
                           <div className="flex items-center justify-start gap-3 w-full min-w-0">
                              <span className='text-left'>{item.SKU}</span>
                           </div>
                           <div className='text-left font-semibold flex items-center gap-1 text-green-500'>Rs {item.productPrice} <CiEdit size={18} /></div>
                           <div className='text-left flex items-center gap-1 text-red-500'>Rs {item.discountPrice}<CiEdit size={18} /></div>
                           <div className='text-left cursor-pointer hover:underline font-medium flex items-center gap-1'>{item.discountPercentage}%<CiEdit size={18} /></div>
                           <div className='text-left cursor-pointer text-green-400 hover:underline font-medium flex items-center gap-1'>{item.stock}<CiEdit size={18} /></div>
                           <div className='flex items-center gap-2'>
                              <div className='bg-black text-gray-400 py-2 px-3 flex items-center justify-center'><MdOutlineRemoveRedEye size={18} /></div>
                              <div className='bg-black text-gray-400 py-2 px-3 flex items-center justify-center'><CiEdit size={18} /></div>
                              <div className='bg-black text-gray-400 py-2 px-3 flex items-center justify-center'><MdDeleteOutline size={18} /></div>
                           </div>
                        </div>
                        )}

                      


                     </div>
                  </div>

                  <div className="flex justify-between items-center py-6 px-4 mt-4">
                     <div className="flex gap-2">
                        <button className="bg-black text-gray-400 hover:text-white border border-white/10 flex items-center justify-center py-2 px-3 rounded cursor-pointer transition-colors">
                           <GrFormPrevious size={20} />
                        </button>
                        <button className="bg-black text-gray-400 hover:text-white border border-white/10 flex items-center justify-center py-2 px-3 rounded cursor-pointer transition-colors">
                           <MdNavigateNext size={20} />
                        </button>
                     </div>
                     <div>
                        <p className="text-gray-500 text-sm">Showing 10 entries</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default ProductList