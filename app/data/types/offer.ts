export type Offer= {
     id: string;
    productId: string;
    originalPrice: number;
    offerPrice: number; 
    discountPercent?: number
    
    status: "active" | "inactive";
    stock?: number;
    startDate: string;
    endDate: string;
    
    createdAt: string;

}