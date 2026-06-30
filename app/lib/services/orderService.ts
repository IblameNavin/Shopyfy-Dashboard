import { MockOrders } from "@/app/data/order";
import { MockProducts } from "@/app/data/products";
import { Order } from "@/app/data/types/order";
import { MockUsers } from "@/app/data/user";

export const getOrders = async():Promise<Order[]> => {
    return new Promise((resolve) => {
        const detailedOrders = MockOrders.map((order) => {
            const user = MockUsers.find((u) => u.uid === order.userId )

            const products = MockProducts.filter((p) => order.productIds.includes(p.id) )

            return {...order, customerName: user ? user.name : "Unknown Customer", productNames: products.map((p) => p.category)}
        } )
        resolve(detailedOrders)
    } )
 }