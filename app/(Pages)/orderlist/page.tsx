"use client"
import { getUsers } from '../../lib/services/userService'
import { getOrders } from '../../lib/services/orderService'
import { getProducts } from "../../lib/services/productService"

import { useEffect, useState } from "react"
import { CiFilter, CiSearch } from "react-icons/ci"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

interface ClientRecord {
  userName: string
  productName: string
  orderDate: string
  orderStatus: string
  totalAmount: number
  orderId: string
  paymentMethod: string
}


const OrderListRoute = () => {
  const [activeTab, setActiveTab] = useState<"order"| "return">("order")
  const tableGridClass = "grid grid-cols-[60px_90px_150px_1.2fr_1.8fr_110px_150px_110px_100px] items-center gap-4 text-xs lg:text-sm"

   const [clientData, setClientData] = useState<ClientRecord[]>([])
  
      useEffect(() => {
      const fetchData = async () => {
      try {
        const [users, products, orders] = await Promise.all([getUsers(), getProducts(), getOrders()])
  
      const transformedData =  orders.map((order)=> {
      const matchingUser = users.find((user)=> user.uid === order.userId)
      //Grabbing userName and UserNumber of the User
      const userName = matchingUser?.name
  
      const firstProductId = order.productIds[0]
      const targetProduct = products.find((product) => product.id === firstProductId )
      const productName = targetProduct ? targetProduct.name : "Unknown Product"
  
      const orderId = order.id
      const orderDate = order.createdAt ? new Date(order.createdAt).toLocaleDateString('en-CA') : "N/A"
      const orderStatus = order.orderStatus
      const totalAmount = order.totalAmount
      const paymentMethod = order.paymentMethod
      return({userName, productName, orderDate, orderStatus, totalAmount, orderId, paymentMethod})
      })
  
      setClientData(transformedData)
      } catch (error) {
        console.log(error)
      }
  
      }
      fetchData()
    }, [])

  return (
    <div className="w-full">
      {/* Navigation Tab Links */}
      <div className='text-white border-b border-white/20 w-full py-2 px-5 relative'>
        <div className='text-sm flex items-center gap-10 '>
          <button className={`cursor-pointer transition-all ease-in-out duration-300 ${activeTab === "order" ? "text-green-500" : "text-gray-400"}`} onClick={()=>setActiveTab("order")}>Order Details</button>
          <button className={`cursor-pointer transition-all ease-in-out duration-300 ${activeTab === "return" ? "text-green-500" : "text-gray-400"}`} onClick={()=>setActiveTab("return")}>Return Details</button>

          <div className={`h-0.5 transition-all duration-300 ease-in-out bottom-0 bg-green-500 absolute`} style={{
              left: activeTab === "order" ? "0px" : "135px", 
              width: activeTab === "order" ? "130px" : "130px"
            }}/>
        </div>
      </div>

      <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">
        <h2 className="text-xl text-white">Order List</h2>

        {/* Main Panel Box Container (Removed overflow-x-auto from here so controls don't slide) */}
        <div className='flex-1 flex flex-col border rounded-md border-white/5 w-full min-h-160 py-4 bg-[#1C1917]'>
            
          {/* Controls Box: Showing Counter & Search Controls (Stays pinned perfectly in place) */}
          <div className="px-4 flex flex-col gap-4 shrink-0 text-white">
            <div className="flex items-center shrink-0 gap-3 mb-2">
              <span>Showing</span> 
              <select name="entries" id="entries" className="border border-white/20 bg-black px-2 py-1.5 relative cursor-pointer outline-none focus:border-green-500">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              <span>entries</span>
            </div>

            <div className="flex w-98 items-center gap-4 mb-8">
              <div className="border border-white/10 rounded-md py-0.5 w-80 flex items-center justify-between px-2 bg-black">
                <input type="text" placeholder="Search Name" className="text-sm px-1.5 py-2 bg-transparent text-white rounded-md w-68 outline-none"/>
                <CiSearch size={22} className="text-gray-400"/>
              </div>
              <span className="bg-black flex items-center justify-center py-2 px-3.5 rounded border border-white/10 cursor-pointer"><CiFilter size={22} className="text-white"/></span>
            </div>
          </div>
              
          {/* NEW LOCAL SCROLL WRAPPER 
              This isolates the overflow handling entirely to the canvas table container below. */}
          <div className="w-full overflow-x-auto custom-scrollbar">
            {/* 1200PX CANVAS WINDOW */}
            <div className='min-w-[1200px] flex-1 flex flex-col text-white px-4 pb-1'>
              
              {/* Table Header Row */}
              <div className={`${tableGridClass} bg-white/5 py-3.5 px-4 font-semibold border-b border-white/10 uppercase tracking-wider text-gray-400 text-[11px] shrink-0 rounded-t-md`}>
                  <div className='text-left'>SN</div>
                  <div className='text-left'>Order ID</div>
                  <div className='text-left'>Date</div>
                  <div className='text-left'>Name</div>
                  <div className='text-left'>Products</div>
                  <div className='text-right'>Total</div>
                  <div className='text-center'>Payment Method</div>
                  <div className='text-center'>Status</div>
                  <div className='text-center'>Action</div>
              </div>

              {/* Table Data Rows */}
              
              {/* Row 1 */}
              {clientData.map((client, index)=>{
                return (
           <>
                  <div key={index} className={`${tableGridClass} py-5 lg:py-6 px-4 border-b border-white/5 text-gray-300 hover:bg-white/3 transition-colors`}> 
                  <div className='text-left font-medium text-gray-500'>{index+1}</div>
                  <div className='text-left font-medium text-green-500'>#{client.orderId}</div>
                  <div className='text-left text-gray-400 whitespace-nowrap'>{client.orderDate}</div>
                  <div className='text-left font-semibold text-white truncate'>{client.userName}</div>
                  <div className='text-left flex flex-col leading-tight overflow-hidden'>
                    <span className='text-white font-medium '>{client.productName}</span>
                  </div>
                  <div className='text-right font-semibold text-white'>{client.totalAmount}</div>
                  <div className='flex justify-center'>
                    <span className='bg-green-500/10 text-green-400 px-2.5 py-0.5 rounded font-medium text-xs'>{client.paymentMethod}</span>
                  </div>
                  <div className='text-center'>
                    <span className='bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded font-medium text-xs'>{client.orderStatus}</span>
                  </div>
                  <div className='text-center text-blue-400 cursor-pointer hover:underline font-medium'>Inspect</div>
              </div>
           </>
)
})}

             

            </div>
          </div>

             <div className="flex justify-between items-center py-8 px-2">
              <div className="flex gap-4">
              <span className="bg-black text-gray-500 flex items-center justify-center py-2 px-3 cursor-pointer"><GrFormPrevious size={20}/></span>
              <span className="bg-black text-gray-500 flex items-center justify-center py-2 px-3 cursor-pointer"><MdNavigateNext size={20}/></span>
              </div>
          <div>
            <p className="text-gray-500 text-sm">Showing 10 entries</p>
          </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default OrderListRoute