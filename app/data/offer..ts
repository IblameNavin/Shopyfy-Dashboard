// import { Offer } from "./types/offer";

export const MockOffer = [
    {
        id: "offer1",
        productId: "product1",
        originalPrice: 15000,
        offerPrice: 12000,
        discountPercent: 20,  //3000 Discount
        status: "active",
        stock: 6,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },
    

     {
        id: "offer2",
        productId: "product2",
        originalPrice: 3000,
        offerPrice: 1800,
        discountPercent: 40,
        status: "inactive",
        stock: 6,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },

     {
        id: "offer3",
        productId: "product3",
        originalPrice: 23000,
        offerPrice: 21160,
        discountPercent: 8,
        status: "inactive",    
        stock: 6,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },

     {
        id: "offer4",
        productId: "product4",
        originalPrice: 8000,
        offerPrice: 6800,
        discountPercent: 15,
        status: "active",
        stock: 6,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },

     {
        id: "offer5",
        productId: "product5",
        originalPrice: 12000,
        offerPrice: 10800,
        discountPercent: 10,  
        status: "active",
        stock: 6,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },

     {
        id: "offer6",
        productId: "product6",
        originalPrice: 27000,
        offerPrice: 21600,
        discountPercent: 20, 
        status: "inactive",
        stock: 6,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
    },
]