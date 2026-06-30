"use client"

import React, { useEffect, useState } from 'react'
import { getUsers } from '../lib/services/userService'
import { getOrders } from '../lib/services/orderService'
import { getProducts } from "../lib/services/productService"

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

    useEffect(() => {
    const fetchData = async () => {
    try {
      const [users, products, orders] = await Promise.all([getUsers(), getProducts(), getOrders()])

    const transformedData =  orders.map((order)=> {
    const matchingUser = users.find((user)=> user.uid === order.userId)
    //Grabbing userName and UserNumber of the User
    const userName = matchingUser?.name
    const userNumber = matchingUser?.phoneNumber

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
    <div className='border rounded-md border-white/5 w-full min-h-160 p-4 bg-[#1C1917] flex flex-col'>
        <h3 className='text-white font-semibold text-md lg:text-lg mb-3 shrink-0'>Popular Client</h3>
      
        <div className='w-full overflow-x-auto custom-scrollbar rounded-md flex-1 flex flex-col'>
            
          
            <div className='min-w-[900px] flex-1 flex flex-col text-white p-1'>
                
                <div className='flex items-center bg-white/5 py-3 px-3 font-semibold border-b border-white/10 text-center uppercase tracking-wider text-gray-400 text-[10px] shrink-0'>
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
        <>
                    <div key = {index} className='flex-1 flex items-center py-2 px-3 border-b border-white/5 text-gray-300 hover:bg-white/3 transition-colors'> 
                    <p className='w-[6%] text-left px-1 font-medium text-gray-500 text-[0.80rem] lg:text-[0.95rem]'>{index+1}</p>
                    <p className='w-[18%] text-left px-2 whitespace-nowrap font-medium text-white text-[0.80rem] lg:text-[0.92rem]'>{client.userName || "Unknown"}</p>
                    <p className='w-[14%] text-left px-2 font-mono text-[0.80rem] lg:text-[0.92rem]'>{client.userNumber}</p>
                    <p className='w-[28%] text-left px-2 flex flex-col leading-tight '>
                      <span className='text-white font-medium truncate text-[0.80rem] lg:text-[0.92rem]'>{client.productName}</span>
                      <span className='text-gray-400 text-[0.80rem] '>Qty: 1 || {client.totalAmount}</span>
                    </p>
                    <p className='w-[14%] text-center px-2 whitespace-nowrap text-gray-400 text-[0.80rem] lg:text-[0.92rem]'>{client.orderDate}</p>
                    <div className='w-[10%] flex justify-center px-2 text-[0.80rem]'>
                      <span className='bg-green-500/10 text-green-400 px-2 py-0.5 rounded font-medium text-[0.80rem] lg:text-[0.92rem]'>{client.orderStatus}</span>
                    </div>
                    <p className='w-[12%] text-right px-2 font-semibold text-white text-[0.80rem] lg:text-[0.92rem]'>Rs. {client.totalAmount}</p>
                    <p className='w-[10%] text-center px-1 text-blue-400 cursor-pointer hover:underline font-medium text-[0.80rem] lg:text-[0.92rem]'>Inspect</p>
                </div>
        </>
                  )
                })}
            </div>
        </div>
    </div>
  )
}

export default PopularClientCompo

// userName, userNumber, orderItems, orderDate, orderStatus, totalAmount,