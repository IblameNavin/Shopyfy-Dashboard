"use client"

import React, { useEffect, useState } from 'react'
import { getUsers } from '../lib/services/userService'
import { getOrders } from '../lib/services/orderService'
import { getProducts } from "../lib/services/productService"
import { useTheme } from '../context/ThemeContext'

interface ClientRecord {
  userName: string
  userNumber: string
  productName: string
  orderDate: string
  orderStatus: string
  totalAmount: number
}

  const PopularClientCompo = () => {
    const [clientData, setClientData] = useState<ClientRecord[]>([])

    const { theme } = useTheme()

    useEffect(() => {
    const fetchData = async () => {
    try {
      const [users, products, orders] = await Promise.all([getUsers(), getProducts(), getOrders()])

    const transformedData =  orders.map((order)=> {
    const matchingUser = users.find((user)=> user.uid === order.userId)
    //Grabbing userName and UserNumber of the User
    const userName = matchingUser?.name ?? "Unkown User"
    const userNumber = matchingUser?.phoneNumber ?? "N/A"

    const firstProductId = order.productIds[0]
    const targetProduct = products.find((product) => product.id === firstProductId )
    const productName = targetProduct ? targetProduct.name : "Unknown Product"

    const orderDate = order.createdAt ? new Date(order.createdAt).toLocaleDateString('en-CA') : "N/A"
    const orderStatus = order.orderStatus
    const totalAmount = order.totalAmount
    return({userName,userNumber, productName, orderDate, orderStatus,totalAmount})
    })

    setClientData(transformedData)
    } catch (error) {
      console.log(error)
    }

    }
    fetchData()
  }, [])
  
  return (
    <div className={`border rounded-md w-full min-h-160 p-4  flex flex-col ${theme === "light" ? " border-black/10 shadow-md" : "bg-[#1C1917] border-white/10"}`}>
        <h3 className='font-semibold text-md lg:text-lg mb-3 shrink-0'>Popular Client</h3>
      
        <div className='w-full overflow-x-auto custom-scrollbar rounded-md flex-1 flex flex-col'>
            
          
            <div className='min-w-[900px] flex-1 flex flex-col p-1'>
                
                <div className={`flex items-center bg-white/5 py-3 px-3 font-semibold border-b border-white/10 text-center uppercase tracking-wider  text-[10px] shrink-0 ${theme === "light" ? "text-black" : "text-gray-400"}`}>
                    <p className='w-[6%] text-left px-1 lg:text-[0.90rem]'>SN</p>
                    <p className='w-[18%] text-left px-2 lg:text-[0.90rem]'>Name</p>
                    <p className='w-[14%] text-left px-2 lg:text-[0.90rem]'>Phone</p>
                    <p className='w-[28%] text-left px-2 lg:text-[0.90rem]'>Order Items</p>
                    <p className='w-[14%] text-center px-2 lg:text-[0.90rem]'>Date</p>
                    <p className='w-[10%] text-center px-2 lg:text-[0.90rem]'>Status</p>
                    <p className='w-[12%] text-right px-2 lg:text-[0.90rem]'>Total</p>
                    <p className='w-[10%] text-center px-1 lg:text-[0.90rem]'>Actions</p>
                </div>

                
                {clientData.map((client, index) => {
                  return (
        
                    <div key = {index} className={`flex-1 flex items-center py-2 px-3 border-b text-gray-300 hover:bg-white/3 transition-colors ${theme === "light" ? "border-black/10" : "bg-[#1C1917] border-white/5 "}`}> 
                    <p className={`w-[6%] text-left px-1 font-medium  text-[0.80rem] lg:text-[0.95rem] ${theme === "light" ? "text-black" : "text-gray-500"}`}>{index+1}</p>
                    <p className={`w-[18%] text-left px-2 whitespace-nowrap font-medium  text-[0.80rem] lg:text-[0.92rem] ${theme === "light" ? "text-black" : "text-white"}`}>{client.userName || "Unknown"}</p>
                    <p className={`w-[14%] text-left px-2 font-mono text-[0.80rem] lg:text-[0.92rem] ${theme === "light" ? "text-black" : "text-white"}`}>{client.userNumber}</p>
                    <p className={`w-[28%] text-left px-2 flex flex-col leading-tight`}>
                      <span className={`font-medium truncate text-[0.80rem] lg:text-[0.92rem] ${theme === "light" ? "text-black" : "text-white"}`}>{client.productName}</span>
                      <span className={` text-[0.80rem] ${theme === "light" ? "text-black" : "text-gray-400"}`}>Qty: 1 || {client.totalAmount}</span>
                    </p>
                    <p className={`w-[14%] text-center px-2 whitespace-nowrap  text-[0.80rem] lg:text-[0.92rem] ${theme === "light" ? "text-black" : "text-gray-400"}`}>{client.orderDate}</p>
                    <div className='w-[10%] flex justify-center px-2 text-[0.80rem]'>
                      <span className={` px-2 py-0.5 rounded font-medium text-[0.80rem] lg:text-[0.92rem] ${theme === "light" ? "text-white bg-green-500" : "bg-green-500/10  text-green-400"}`}>{client.orderStatus}</span>
                    </div>
                    <p className={`w-[12%] text-right px-2 font-semibold  text-[0.80rem] lg:text-[0.92rem] ${theme === "light" ? "text-black" : "text-white"}`}>Rs. {client.totalAmount}</p>
                    <p className={`w-[10%] text-center px-1 text-blue-400 cursor-pointer hover:underline font-medium text-[0.80rem] lg:text-[0.92rem]`}>Inspect</p>
                </div>
        
                  )
                })}
            </div>
        </div>
    </div>
  )
}

export default PopularClientCompo

// userName, userNumber, orderItems, orderDate, orderStatus, totalAmount,