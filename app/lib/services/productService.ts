import { MockProducts } from "@/app/data/products";
import { Product } from "@/app/data/types/product";

export const getProducts = async(): Promise<Product[]> => {
     return new Promise((resolve) => setTimeout(() => resolve(MockProducts), 100))
}


export const getProductById = async(id:string): Promise<Product | undefined> => {
     return new Promise((resolve)=> {
        const product = MockProducts.find((p) => p.id === id)
        resolve(product)
     })
}