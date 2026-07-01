"use client"

import Logo from "@/public/darkLogo .webp"
import Image from "next/image"
import { AiOutlineMenuFold } from "react-icons/ai"
import SidebarImg from "@/public/SidebarImg.webp"
import { IoIosLogOut, IoIosStarHalf, IoMdSpeedometer } from "react-icons/io"
import { GiFlyingFlag } from "react-icons/gi"
import { CiBitcoin, CiCircleQuestion, CiDiscount1, CiViewList } from "react-icons/ci"
import { TbCategory, TbTruckDelivery } from "react-icons/tb"
import { useState } from "react"
import { IoChevronDown } from "react-icons/io5"
import { RiCoupon2Line } from "react-icons/ri"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaUserFriends } from "react-icons/fa"
import { MdOutlinePayment, MdOutlineSettings } from "react-icons/md"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation";
import { useTheme } from "../context/ThemeContext"

type Props = {
  isSidebarOpen: boolean,
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
}





const SideBar = ({isSidebarOpen, setIsSidebarOpen}: Props) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const isCategoryOpen = openMenu === "category"
  const isProductOpen = openMenu === "product"
  const isCustomerOpen = openMenu === "customer"
  const isPaymentOpen = openMenu === "payment"
  const isSettingOpen = openMenu === "setting"
  const isHelpOpen = openMenu === "help"

  const { theme } = useTheme()

  
  const HandleCloseSidebarForNestedLinks = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation()
    setIsSidebarOpen(false)
  }
  const router = useRouter()
  const pathname = usePathname();
  
  const categoryRoutes = ["/category", "/addcategory"]
  const isCategoryActive = categoryRoutes.includes(pathname)

    const productRoutes = ["/productlist", "/addproduct"]
  const isProductActive = productRoutes.includes(pathname)

      const paymentRoutes = ["/payment", "/paymentmethods"]
  const isPaymentActive = paymentRoutes.includes(pathname)

        const settingsRoutes = ["/setting", "/security"]
  const isSettingsActive = settingsRoutes.includes(pathname)
  // type SidebarPage = 'dashboard' | 'banner' | 'orderlist' | 'category' | 'product' | 'returnpolicy' | 'discountrules' | 'coupon' | 'offerlist' | 'rewardlist' | 'customer' | 'delivery' | 'payment' | 'plan' | 'settings' | 'help' | 'logout'

  // const [isActive, setIsActive] = useState<SidebarPage>('dashboard')

  // Safe router navigation function that executes ONLY on user click event
  const handleRowClick = (e: React.MouseEvent, route: string) => {
    // setIsActive(pageState)
    router.push(route)
  }

  return (
    <div className={`fixed transition-all duration-300 ease-in-out h-screen px-4 py-6 w-80 top-0 left-0 z-[999] border-r overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} ${theme === "light" ? "bg-white text-black border-black/10" : " bg-black text-white border-white/10"}`}>

      {/* Top Logo */}
      <div className="flex flex-col gap-6">

        <div className="h-12 w-full bg-[#22C55E] text-white rounded-md flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" width={30} height={30} />
            <h2 className="text-xl font-semibold">ShofyDrop</h2>
          </div>

          <AiOutlineMenuFold size={22} onClick={() => setIsSidebarOpen(prev => !prev)} className="cursor-pointer"/>
        </div>

        {/* Sidebar Image */}
        <Image src={SidebarImg} alt="Sidebar" className="w-full h-40 object-cover rounded-md" />

        {/* Menu */}
        <div className="flex flex-col gap-8 pt-3">
          <div className="flex flex-col gap-3 cursor-pointer">

            {/* Dashboard */}
            <Link href="/" className={`h-12 flex items-center gap-2 px-4 rounded-md ${pathname === '/' ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
              <IoMdSpeedometer />
              <span>Dashboard</span>
            </Link>

            {/* Banner */}
            <Link href="/banner" className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === '/banner' ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
              <GiFlyingFlag size={18} />
              <span>Banner</span>
            </Link>

            {/* Orders */}
            <Link href={"/orderlist"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === '/orderlist' ? "bg-green-500 text-black" : ""}`}  onClick={() => setIsSidebarOpen(false)} >
              <CiViewList size={22} />
              <span>Orders List</span>
            </Link>

            {/* Category Accordion */}
            <div 
              onClick={(e) => handleRowClick(e, "/category")}
              className="border-b border-white/10 rounded-md cursor-pointer"
            >
              <div className={`h-12 flex items-center justify-between px-4 rounded-md ${isCategoryActive ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
                <div className="flex items-center gap-2">
                  <TbCategory size={22} />
                  <span>Category</span>
                </div>
                <div 
                  className="p-2 hover:bg-white/10 rounded-md transition-all"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    setOpenMenu(openMenu === "category" ? null : "category");
                  }}
                >
                  <IoChevronDown className={`transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`} />
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-black ${isCategoryOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"} ${theme === "light" ? "bg-white text-black" : " bg-black text-white"}`}>
                <div className={`pl-10 pb-3 flex flex-col gap-2 text-sm  ${theme === "light" ? "bg-white text-gray-500" : " bg-black text-gray-300"}`}>
                  <Link href="/category"  onClick={() => setIsSidebarOpen(false)} className="hover:text-white cursor-pointer">Category List</Link>
                  <Link href="/addcategory" onClick={HandleCloseSidebarForNestedLinks} className={`hover:text-white cursor-pointer`}>Add Category</Link>
                </div>
              </div>
            </div>

            {/* Product Accordion */}
            <div 
              onClick={(e) => handleRowClick(e, "/productlist")}
              className="border-b border-white/10 rounded-md cursor-pointer"
            >
              <div className={`h-12 flex items-center justify-between px-4 rounded-md ${isProductActive ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
                <div className="flex items-center gap-2">
                  <TbCategory size={22} />
                  <span>Product</span>
                </div>
                <div 
                  className="p-2 hover:bg-white/10 rounded-md transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === "product" ? null : "product");
                  }}
                >
                  <IoChevronDown className={`transition-transform duration-300 ${isProductOpen ? "rotate-180" : ""}`} />
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isProductOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"} ${theme === "light" ? "bg-white text-black" : " bg-black text-white"}`}>
                <div className={`pl-10 pb-3 flex flex-col gap-2 text-sm ${theme === "light" ? "bg-white text-gray-500" : " bg-black text-gray-300"}`}>
                  <Link href="/productlist" onClick={(e) => e.stopPropagation()} className="hover:text-white cursor-pointer">Product List</Link>
                  <Link href="/addproduct" onClick={HandleCloseSidebarForNestedLinks} className="hover:text-white cursor-pointer"  >Add Product</Link>
                </div>
              </div>
            </div>

            {/* Static Content Links */}
            <Link href={"/returnpolicy"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === "/returnpolicy" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
              <CiBitcoin size={22} />
              <span>Return Policy</span>
            </Link>

            <Link href={"/discountrules"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === "/discountrules" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
              <CiDiscount1 size={22} />
              <span>Discount Rules</span>
            </Link>

            <Link href={"/coupon"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === "/coupon" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
              <RiCoupon2Line size={22} />
              <span>Coupon</span>
            </Link>

            <Link href={"/offerlist"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === "/offerlist" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
               <CiDiscount1 size={22} />
              <span>Offer list</span>
            </Link>

            <Link href={"/rewardlist"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === "/rewardlist" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
               <IoIosStarHalf size={22} />
              <span>Reward List</span>
            </Link>

            {/* Customer Accordion */}
            <div 
              onClick={(e) => handleRowClick(e, "/customer")}
              className="border-b border-white/10 rounded-md cursor-pointer"
            >
              <div className={`h-12 flex items-center justify-between px-4 rounded-md ${pathname === "/customer" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
                <div className="flex items-center gap-2">
                  <FaUserFriends size={22} />
                  <span>Customer</span>
                </div>
                <div 
                  className="p-2 hover:bg-white/10 rounded-md transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === "customer" ? null : "customer");
                  }}
                >
                  <IoChevronDown className={`transition-transform duration-300 ${isCustomerOpen ? "rotate-180" : ""}`} />
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isCustomerOpen ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"} ${theme === "light" ? "bg-white text-black" : " bg-black text-white"}`}>
                <div className={`pl-10 pb-3 flex flex-col gap-2 text-sm ${theme === "light" ? "bg-white text-gray-500" : " bg-black text-gray-300"}`}>
                  <Link href="/customer" onClick={(e) => e.stopPropagation()} className="hover:text-white cursor-pointer">Customer List</Link>
                </div>
              </div>
            </div>

            <Link href={"/delivery"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === "/delivery" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
               <TbTruckDelivery size={22} />
              <span>Delivery Options</span>
            </Link>
 
            {/* Payment Accordion */}
            <div 
              onClick={(e) => handleRowClick(e, "/payment")}
              className="border-b border-white/10 rounded-md cursor-pointer"
            >
              <div className={`h-12 flex items-center justify-between px-4 rounded-md ${isPaymentActive ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
                <div className="flex items-center gap-2">
                  <MdOutlinePayment size={22} />
                  <span>Payment Settings</span>
                </div>
                <div 
                  className="p-2 hover:bg-white/10 rounded-md transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === "payment" ? null : "payment");
                  }}
                >
                  <IoChevronDown className={`transition-transform duration-300 ${isPaymentOpen ? "rotate-180" : ""}`} />
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isPaymentOpen ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"} ${theme === "light" ? "bg-white text-black" : " bg-black text-white"}`}>
                <div className={`pl-10 pb-3 flex flex-col gap-2 text-sm ${theme === "light" ? "bg-white text-gray-500" : " bg-black text-gray-300"}`}>
                  <Link href="/payment" onClick={(e) => e.stopPropagation()} className="hover:text-white cursor-pointer">Upload QR</Link>
                  <Link href="/paymentmethods" onClick={HandleCloseSidebarForNestedLinks} className="hover:text-white cursor-pointer">Link Payment Accounts</Link>
                </div>
              </div>
            </div>

            <Link href={"/plan"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === "/plan" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)}  >
               <MdOutlinePayment size={22} />
              <span>Plan</span>
            </Link>

            {/* Setting Accordion */}
            <div 
              onClick={(e) => handleRowClick(e, "/settings")}
              className="border-b border-white/10 rounded-md cursor-pointer"
            >
              <div className={`h-12 flex items-center justify-between px-4 rounded-md ${isSettingsActive ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
                <div className="flex items-center gap-2">
                  <MdOutlineSettings size={22} />
                  <span>Settings</span>
                </div>
                <div 
                  className="p-2 hover:bg-white/10 rounded-md transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === "setting" ? null : "setting");
                  }}
                >
                  <IoChevronDown className={`transition-transform duration-300 ${isSettingOpen ? "rotate-180" : ""}`} />
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSettingOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"} ${theme === "light" ? "bg-white text-black" : " bg-black text-white"}`}>
                <div className={`pl-10 pb-3 flex flex-col gap-2 text-sm ${theme === "light" ? "bg-white text-gray-500" : " bg-black text-gray-300"}`}>
                  <Link href="/settings" onClick={(e) => e.stopPropagation()} className="hover:text-white cursor-pointer">Profile</Link>
                  <Link href="/security" onClick={HandleCloseSidebarForNestedLinks} className="hover:text-white cursor-pointer">Security</Link>
                </div>
              </div>
            </div>

            {/* Help Center Accordion */}
            <div 
              onClick={(e) => handleRowClick(e, "/help")}
              className="border-b border-white/10 rounded-md cursor-pointer"
            >
              <div className={`h-12 flex items-center justify-between px-4 rounded-md ${pathname === "/help" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
                <div className="flex items-center gap-2">
                  <CiCircleQuestion size={22} />
                  <span>Help Center</span>
                </div>
                <div 
                  className="p-2 hover:bg-white/10 rounded-md transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === "help" ? null : "help");
                  }}
                >
                  <IoChevronDown className={`transition-transform duration-300 ${isHelpOpen ? "rotate-180" : ""}`} />
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isHelpOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                <div className={`pl-10 pb-3 flex flex-col gap-2 text-sm ${theme === "light" ? "bg-white text-gray-500" : " bg-black text-gray-300"}`}>
                  <Link href="/help" onClick={(e) => e.stopPropagation()} className="hover:text-white cursor-pointer">Chat</Link>
                </div>
              </div>
            </div>

            {/* Logout */}
            <Link href={"/logout"} className={`h-12 flex items-center gap-2 px-4 border-b border-white/10 rounded-md ${pathname === "/logout" ? "bg-green-500 text-black" : ""}`} onClick={() => setIsSidebarOpen(false)} >
               <IoIosLogOut size={22} />
              <span>Logout</span>
            </Link>

          </div>
          
          <div className="flex flex-col gap-3 ml-5">
            <h2 className="font-semibold text-lg">CONNECT US</h2>
            <div className="flex items-center gap-4">
              <FaFacebookF size={22} className="cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"/>
              <FaInstagram size={22} className="cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"/>
              <FaLinkedinIn size={22} className="cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar