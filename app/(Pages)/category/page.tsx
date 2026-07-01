"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci"
import { FaCashRegister, FaMobileAlt } from "react-icons/fa"
import { GiLipstick } from "react-icons/gi"
import { GrFormPrevious } from "react-icons/gr"
import { IoAddCircleOutline } from "react-icons/io5"
import { MdNavigateNext, MdOutlineComputer, MdOutlineMedicalServices } from "react-icons/md"

import { getUsers } from "../../lib/services/userService"
import { getOrders } from "../../lib/services/orderService"
import { getProducts } from "../../lib/services/productService"
import { useTheme } from '@/app/context/ThemeContext'

interface ClientRecord {
  id: number
  category: string
  superCategory: string
  totalProducts: number
  subCategories: string[]
}

const Category = () => {
  const { theme } = useTheme()
  const isActive = theme === "light"
  const [activeGreen, setActiveGreen] = useState<"all" | "your">("all")
  const [clientData, setClientData] = useState<ClientRecord[]>([])


  const tableGridClass =
    "grid grid-cols-[60px_1.5fr_2fr_130px_2.5fr_100px] items-center gap-4 text-[0.92rem]"

  useEffect(() => {
    const fetchData = async () => {
      const [users, products, orders] = await Promise.all([
        getUsers(),
        getProducts(),
        getOrders()
      ])

      const grouped: Record<string, ClientRecord> = {}

      products.forEach((product, index) => {
        const key = product.category

        if (!grouped[key]) {
          grouped[key] = {
            id: index + 1,
            category: product.category,
            superCategory: product.superCategory,
            totalProducts: 0,
            subCategories: []
          }
        }
        grouped[key].totalProducts += 1

        if (product.subCategory && product.subCategory.length > 0) {
          product.subCategory.forEach((sub: string) => {
            if (!grouped[key].subCategories.includes(sub)) {
              grouped[key].subCategories.push(sub)
            }
          })
        }
      })

      setClientData(Object.values(grouped))
    }

    fetchData()
  }, [])

  return (
    <div className="w-full">
      <div className="py-4 md:py-6 lg:py-8 md:px-[5vw] xl:px-[11vw] flex flex-col gap-4">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Category List</h2>
          <button className={`flex items-center justify-center gap-1.5 bg-green-500 py-2 px-4 font-medium rounded-md ${isActive ? "text-white" : "text-black"}`}>
            <IoAddCircleOutline size={22} /> Add Category
          </button>
        </div>

        <div className={`flex-1 flex flex-col border rounded-md w-full min-h-160 py-4 ${isActive ? "bg-white border-black/10 shadow-md text-black" : "bg-[#1C1917] border-white/5 text-white"}`}>

          {/* Search */}
          <div className="px-4 flex flex-col gap-4 mb-8">
            <div className={`flex w-90 items-center gap-4 border px-2 rounded-md ${isActive ? "border-black/20" : "border-white/20"}`}>
              <input
                type="text"
                placeholder="Search Name"
                className={`text-sm px-1.5 py-2 rounded-md w-80 outline-none ${isActive ? "bg-white text-black" : "bg-black text-white"}`}
              />
              <CiSearch size={22} className="text-gray-400" />
            </div>

            <div className="flex items-center gap-3">
              <button
                className={`py-2 px-4 rounded-md ${
                  activeGreen === "all"
                    ? "bg-green-500 text-black"
                    : isActive ? "bg-white text-gray-400 border border-black/10" : "bg-black text-gray-400 border border-white/10"
                } ${isActive ? "text-white" : "text-black"}`}
                onClick={() => setActiveGreen("all")}
              >
                All Categories
              </button>

              <Link
                href={"/yourcategory"}
                className={`py-2 px-4 rounded-md ${
                  activeGreen === "your"
                    ? "bg-green-500 text-black"
                    : isActive ? "bg-white text-gray-400 border border-black/10" : "bg-black text-gray-400 border border-white/10"
                } ${isActive ? "text-black" : "text-white"}`}
                onClick={() => setActiveGreen("your")}
              >
                Your Categories
              </Link>
            </div>
          </div>

          {/* TABLE */}
          <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="min-w-[1100px] flex flex-col px-4">

              {/* HEADER */}
              <div className={`${tableGridClass} bg-white/5 py-3 px-4 text-xs uppercase border-b border-white/10 ${isActive ? "text-black" : "text-gray-400"}`}>
                <div>SN</div>
                <div>Category</div>
                <div>Super Category</div>
                <div>Total Products</div>
                <div>Sub-Categories</div>
                <div>Actions</div>
              </div>

              {/* DYNAMIC ROWS */}
              {clientData.map((item, index) => (
                <div
                  key={item.category}
                  className={`${tableGridClass} py-5 px-4 border-b hover:bg-white/3 transition-colors ${isActive ? "border-black/10 text-black" : "bg-[#1C1917] border-white/5 text-gray-300"}`}
                >
                  <div className={isActive ? "text-black" : "text-gray-500"}>{index + 1}</div>

                  <div className={`font-medium ${isActive ? "text-black" : "text-white"}`}>
                    {item.category}
                  </div>

                  <div className={isActive ? "text-black" : "text-gray-300"}>{item.superCategory}</div>

                  <div className={`font-semibold ${isActive ? "text-black" : "text-white"}`}>
                    {item.totalProducts}
                  </div>

                  <div className={`text-xs ${isActive ? "text-black" : "text-gray-400"}`}>
                    {item.subCategories.length > 0
                      ? item.subCategories.join(", ")
                      : "-"}
                  </div>

                  <div className="text-blue-400 cursor-pointer">
                    Edit
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Category