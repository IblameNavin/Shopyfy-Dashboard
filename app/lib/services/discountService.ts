import { MockDiscount } from "@/app/data/discount"
import { Discount } from "@/app/data/types/discount"

export const getDiscounts = async():Promise<Discount[]> => {
   return new Promise((resolve)=> {
    setTimeout(() => {
        resolve(MockDiscount)
    }, 100);
   })
}